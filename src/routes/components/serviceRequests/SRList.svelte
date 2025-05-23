<script lang="ts">
	import { onMount } from 'svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { serviceStatuses } from '../../../stores/service.store';
	import { lg } from '../../../stores/i18n.store';
	import Icon from '@iconify/svelte';
	import Loader from '../UI/Loader.svelte';
	import UserDetailsModal from '../../portal/components/UserDetailsModal.svelte';
	import SrItem from './SRItem.svelte';
	import SRDetailsModal from './SRDetailsModal.svelte';
	import SRPaymentModal from './SRPaymentModal.svelte';
	import SRApproveModal from './SRApproveModal.svelte';
	import SRReportModal from './SRReportModal.svelte';

	$: l = $lg.serviceRequests;

	export let isPortal = false;
	export let userId: string | undefined = undefined;

	type Data = RouterOutput['service']['getAll'];
	let data: Data | undefined;

	let filters = {
		search: '',
		status: null,
		page: 1
	};

	const fetchServiceRequests = async (page?: number) => {
		data = undefined;
		filters.page = page ?? 1;
		data = undefined;
		data = await trpc().service.getAll.query({ userId, filters }).catch(tce);
	};

	onMount(fetchServiceRequests);

	let statuses = [
		'APPLICATION_RECEIVED',
		'IN_REVIEW',
		'WAITING_FOR_PAYMENT',
		'WAITING_FOR_SAMPLES',
		'TESTING_IN_PROGRESS',
		'REPORT_RELEASED',
		'REJECTED'
	] as (keyof typeof $serviceStatuses)[];

	let userDetailsId: string | undefined = undefined;
	let srModals = {
		details: null,
		payment: null,
		approve: null,
		report: null
	} as { [k: string]: RouterOutput['service']['getAll']['serviceRequests'][number] | null };
</script>

<div class="flex gap-4">
	<input
		type="text"
		class="input input-sm input-bordered w-full"
		placeholder={$lg.common.typeHere}
		bind:value={filters.search}
	/>

	<select class="select select-sm select-bordered min-w-60" bind:value={filters.status}>
		<option value={null}>{l.allServiceRequests}</option>
		{#each statuses as status}
			<option value={status}>{$serviceStatuses[status]}</option>
		{/each}
	</select>

	<button class="btn btn-sm btn-primary" on:click={() => fetchServiceRequests()}>{$lg.common.search}</button>
</div>

{#if !data}
	<Loader title={l.fetchingServiceRequests} overlay={false} fixed={false} classes="mt-40" />
{:else}
	{@const { total, serviceRequests } = data}

	{#if total === 0}
		<div class="text-center mt-20">
			<div class="font-semibold text-xl">{l.noServiceRequests}</div>
			<div>{l.checkFilters}</div>
			{#if !isPortal}
				<a href="/services" class="btn btn-sm btn-primary mt-4">{l.browseSolutions}</a>
			{/if}
		</div>
	{:else}
		<div class="overflow-x-auto my-8">
			<table class="table">
				<thead>
					<tr>
						<th />
						<th>{l.id}</th>
						{#if isPortal}
							<th>{l.createdBy}</th>
						{/if}
						<th>{l.createdAt}</th>
						<th>{l.service}</th>
						<th>{l.status}</th>
						<th>{l.estDeliveryDate}</th>
						<th class="text-center">{l.price}</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each serviceRequests as serviceRequest}
						<SrItem {isPortal} {serviceRequest} bind:userDetailsId bind:srModals {fetchServiceRequests} />
					{/each}
				</tbody>
			</table>
		</div>

		<div class="flex justify-end gap-2">
			<button
				class="btn btn-sm btn-square btn-primary {filters.page === 1 && 'btn-disabled'}"
				on:click={() => fetchServiceRequests(filters.page - 1)}
			>
				<Icon icon="mdi:chevron-left" width={20} />
			</button>
			<button class="btn btn-sm font-semibold no-animation cursor-default">
				{$lg.common.page}
				{filters.page}
			</button>
			<button
				class="btn btn-sm btn-square btn-primary {filters.page > total / 10 && 'btn-disabled'}"
				on:click={() => fetchServiceRequests(filters.page + 1)}
			>
				<Icon icon="mdi:chevron-right" width={20} />
			</button>
		</div>
		<div class="flex justify-end mt-2 font-semibold opacity-60">
			{$lg.common.results}: {(filters.page - 1) * 10 + 1} - {(filters.page - 1) * 10 + serviceRequests.length} of {total}
		</div>
	{/if}
{/if}

<UserDetailsModal id={userDetailsId} />
<SRDetailsModal serviceRequest={srModals.details} />
<SRPaymentModal serviceRequest={srModals.payment} {fetchServiceRequests} />
<SRApproveModal serviceRequest={srModals.approve} {fetchServiceRequests} />
<SRReportModal serviceRequest={srModals.report} {fetchServiceRequests} />
