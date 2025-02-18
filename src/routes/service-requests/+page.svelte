<script lang="ts">
	import { page } from '$app/stores';
	import { showModal } from '$lib/client/modal';
	import { i18n, lg, parsePrice } from '../../stores/i18n.store';
	import type { RouterOutput } from '../../trpc/routers/app.router';
	import IconBtn from '../components/IconBtn.svelte';
	import Layout from '../components/layout/Layout.svelte';
	import type { PageData } from './$types';
	import ServiceMoreDetailsModal from './components/ServiceMoreDetailsModal.svelte';
	import ServicePaymentModal from './components/ServicePaymentModal.svelte';

	$: l = $lg.serviceRequests;

	$: ({ services } = $page.data as PageData);
	let modalId = 'serviceMoreDetailsModal';
	let serviceMoreDetails: RouterOutput['service']['getAll'][number] | null = null;
	let servicePayment: RouterOutput['service']['getAll'][number] | null = null;
</script>

<Layout pageTitle={l.title}>
	<div class="text-2xl font-bold mb-4">{l.title}</div>

	<div class="overflow-x-auto mt-6">
		<table class="table">
			<thead>
				<tr>
					<th />
					<th>{l.id}</th>
					<th>{l.createdAt}</th>
					<th>{l.service}</th>
					<th>{l.status}</th>
					<th class="text-center">{l.price}</th>
				</tr>
			</thead>
			<tbody>
				{#each services as s}
					{@const { id, createdAt, service, status, price, reportUrl } = s}
					{@const openMoreDetailsModal = () => {
						serviceMoreDetails = s;
						showModal(modalId);
					}}
					{@const openPaymentModal = () => {
						servicePayment = s;
						showModal('servicePaymentModal');
					}}

					<tr>
						<td class="text-center w-1">
							<IconBtn icon="mdi:info" iconClasses="text-info" on:click={openMoreDetailsModal} />
						</td>
						<td class="font-mono">{id}</td>
						<td>{createdAt.toLocaleString()}</td>
						<td>{service}</td>
						<td class="capitalize">{status.replaceAll('_', ' ').toLowerCase()}</td>
						<td class="text-center font-mono">
							<div>{price ? parsePrice($i18n.currency, price) : 'N/A'}</div>
						</td>

						<td class="text-center">
							{#if price}
								{#if status === 'WAITING_FOR_PAYMENT'}
									<button class="btn btn-primary btn-sm" on:click={openPaymentModal}>{l.payNow}</button>
								{:else}
									<button class="btn btn-link text-success hover:no-underline cursor-default">
										{l.paymentSuccess}
									</button>
								{/if}
							{:else}
								<button class="btn btn-disabled btn-sm">{l.payNow}</button>
							{/if}
						</td>

						{#if status === 'APPLICATION_RECEIVED'}
							<td class="w-1">
								<IconBtn icon="mdi:delete" iconClasses="text-error" />
							</td>
						{/if}

						{#if reportUrl}
							<td class="w-1">
								<IconBtn
									icon="mdi:download"
									iconClasses="text-primary"
									on:click={() => window.open(reportUrl, '_blank')}
								/>
							</td>
						{/if}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Layout>

<ServiceMoreDetailsModal service={serviceMoreDetails} />
<ServicePaymentModal service={servicePayment} />
