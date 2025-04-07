<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import IconBtn from '../IconBtn.svelte';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';
	import { showModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { supabase } from '$lib/client/supabase';
	import { services } from '../../../stores/service.store';

	$: l = $lg.serviceRequests;

	export let isPortal: boolean;
	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number];
	export let userDetailsId: string | undefined;
	export let srModals: { [k: string]: RouterOutput['service']['getAll']['serviceRequests'][number] | null };
	export let fetchServiceRequests: () => Promise<void>;
	$: ({ id, user, createdAt, updatedAt, serviceCode, status, price, paymentInfo, report } = serviceRequest);
	$: serviceTitle = Object.values(
		Object.values($services).find(({ services }) => Object.values(services).find(({ code }) => code === serviceCode))
			?.services!
	).find(({ code }) => code === serviceCode)?.l.title;
	const openUserDetailsModal = () => {
		userDetailsId = user.id;
		showModal('userDetailsModal');
	};

	const openDetailsModal = () => {
		srModals.details = serviceRequest;
		showModal('srDetailsModal');
	};

	const openPaymentModal = () => {
		srModals.payment = serviceRequest;
		showModal('srPaymentModal');
	};

	const openApproveModal = () => {
		srModals.approve = serviceRequest;
		showModal('srApproveModal');
	};

	const openReportModal = () => {
		srModals.report = serviceRequest;
		showModal('srReportModal');
	};

	const initiateReview = () =>
		ui.setAlertModal({
			title: 'Initiate Review - ' + id,
			body: 'Are you sure you want to initiate the review process?',
			actions: [
				{
					name: 'Initiate Review',
					classes: 'btn-primary w-full btn-md',
					onClick: ui.loaderWrapper({ title: 'Initiating Review' }, async () => {
						ui.closeAlertModal();
						await trpc()
							.service.updateStatus.mutate({ id, status: 'IN_REVIEW' })
							.catch((e) => tce(e, { showToast: true }));
						fetchServiceRequests();
					})
				}
			]
		});

	const rejectServiceRequest = () =>
		ui.setAlertModal({
			title: 'Reject Service Request - ' + id,
			body: 'Are you sure you want to reject this service request? Once rejected, this action cannot be undone.',
			actions: [
				{
					name: 'Reject Service Request',
					classes: 'btn-error w-full btn-md',
					onClick: ui.loaderWrapper({ title: 'Rejecting Service Request' }, async () => {
						ui.closeAlertModal();
						await trpc()
							.service.updateStatus.mutate({ id, status: 'REJECTED' })
							.catch((e) => tce(e, { showToast: true }));
						fetchServiceRequests();
					})
				}
			]
		});

	const startTesting = () =>
		ui.setAlertModal({
			title: 'Start Testing - ' + id,
			body: 'Do you want to start testing now? Please confirm that the samples have been received before proceeding.',
			actions: [
				{
					name: 'Start Testing',
					classes: 'btn-primary w-full btn-md',
					onClick: ui.loaderWrapper({ title: 'Starting Test' }, async () => {
						ui.closeAlertModal();
						await trpc()
							.service.updateStatus.mutate({ id, status: 'TESTING_IN_PROGRESS' })
							.catch((e) => tce(e, { showToast: true }));
						fetchServiceRequests();
					})
				}
			]
		});

	const removeRequest = () =>
		ui.setAlertModal({
			title: 'Delete Service Request - ' + id,
			body: 'Are you sure you want to delete this service request? Once deleted, this action cannot be undone.',
			actions: [
				{
					name: 'Delete Service Request',
					classes: 'btn-error w-full btn-md',
					onClick: ui.loaderWrapper({ title: 'Deleting Service Request' }, async () => {
						ui.closeAlertModal();
						await trpc()
							.service.remove.mutate({ id })
							.catch((e) => tce(e, { showToast: true }));
						fetchServiceRequests();
					})
				}
			]
		});
</script>

<tr class="hover">
	<td class="text-center w-1">
		<IconBtn icon="mdi:info" iconClasses="text-info" on:click={openDetailsModal} />
	</td>
	<td class="font-mono">{id}</td>
	{#if isPortal}
		<td>
			<button class="btn btn-sm btn-link italic p-0 text-accent text-left" on:click={openUserDetailsModal}>
				{user.firstName}
				{user.lastName}
			</button>
		</td>
	{/if}
	<td>{createdAt.toLocaleString()}</td>
	<td>{updatedAt.toLocaleString()}</td>
	<td>{serviceTitle}</td>
	<td class="capitalize">{status.replaceAll('_', ' ').toLowerCase()}</td>
	<td class="text-center font-mono">
		{#if price}
			{#if paymentInfo}
				<a href="/payment-receipt/service-request?id={id}" target="_blank" class="text-info hover:underline">
					{parsePrice($i18n.currency, price)}
				</a>
			{:else}
				<div>{parsePrice($i18n.currency, price)}</div>
			{/if}
		{:else}
			<div class="text-gray-400">N/A</div>
		{/if}
	</td>

	{#if !isPortal}
		<td class="text-center">
			{#if price !== null}
				{#if status === 'WAITING_FOR_PAYMENT'}
					<button class="btn btn-sm btn-primary" on:click={openPaymentModal}>{l.payNow}</button>
				{:else}
					<button class="btn btn-link text-success hover:no-underline cursor-default">
						{l.paymentSuccess}
					</button>
				{/if}
			{:else}
				<button class="btn btn-sm btn-disabled">{l.payNow}</button>
			{/if}
		</td>

		{#if status === 'APPLICATION_RECEIVED'}
			<td class="w-1">
				<IconBtn icon="mdi:delete" iconClasses="text-error" on:click={removeRequest} />
			</td>
		{/if}
	{:else}
		<td>
			<div class="flex flex-col gap-2">
				{#if status === 'APPLICATION_RECEIVED'}
					<button class="btn btn-sm btn-primary w-32" on:click={initiateReview}>Initiate Review</button>
				{:else if status === 'IN_REVIEW'}
					<button class="btn btn-sm btn-success w-32" on:click={openApproveModal}>
						<Icon icon="mdi:check" width={16} />
						Approve
					</button>
				{:else if status === 'WAITING_FOR_SAMPLES'}
					<button class="btn btn-sm btn-primary w-32" on:click={startTesting}>Start Testing</button>
				{:else if status === 'TESTING_IN_PROGRESS'}
					<button class="btn btn-sm btn-primary w-32" on:click={openReportModal}>Upload Report</button>
				{:else if status === 'REPORT_RELEASED' && report}
					{@const reportUrl = supabase.storage.from('Service Reports').createSignedUrl(report, 300)}
					{#await reportUrl}
						<button class="btn btn-sm btn-link w-32 no-animation">
							<div class="flex items-center">
								<Icon icon="mdi:download" width={20} />
								Download Report
							</div>
						</button>
					{:then { data }}
						<a href={data?.signedUrl} target="_blank" class="btn btn-sm btn-link w-32">
							<div class="flex items-center">
								<Icon icon="mdi:download" width={20} />
								Download Report
							</div>
						</a>
					{/await}
				{/if}

				{#if ['APPLICATION_RECEIVED', 'IN_REVIEW'].includes(status)}
					<button class="btn btn-sm btn-error w-32" on:click={rejectServiceRequest}>
						<Icon icon="mdi:close" width={16} />
						Reject
					</button>
				{/if}
			</div>
		</td>
	{/if}

	{#if !isPortal && report}
		{@const reportUrl = supabase.storage.from('Service Reports').createSignedUrl(report, 300)}
		<td class="text-center">
			{#await reportUrl}
				<IconBtn icon="mdi:download" iconClasses="text-primary no-animation" />
			{:then { data }}
				<a href={data?.signedUrl} target="_blank">
					<IconBtn icon="mdi:download" iconClasses="text-primary" />
				</a>
			{/await}
		</td>
	{/if}
</tr>
