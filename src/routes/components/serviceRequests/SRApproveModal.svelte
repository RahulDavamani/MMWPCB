<script lang="ts">
	import Modal from '../UI/Modal.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import Icon from '@iconify/svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { onMount } from 'svelte';

	let modalId = 'srApproveModal';
	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number] | null;
	export let fetchServiceRequests: () => Promise<void>;
	let price = 0;

	onMount(() => onShowModal(modalId, () => (price = 0)));

	const approveServiceRequest = ui.loaderWrapper({ title: 'Approving Service Request' }, async () => {
		if (!price || !serviceRequest) return;
		closeModal(modalId);
		await trpc()
			.service.approve.mutate({ id: serviceRequest.id, price })
			.catch((e) => tce(e, { showToast: true }));
		fetchServiceRequests();
	});
</script>

<Modal {modalId} title="Approve Service Request - {serviceRequest?.id}" boxClasses="max-w-lg w-full">
	<div>Do you want to approve this service request? Please confirm the service price before proceeding.</div>
	<label class="input input-bordered flex items-center gap-2 mt-4">
		<Icon icon="mdi:dollar" />
		<input type="number" class="grow" placeholder="Service Price" bind:value={price} />
	</label>
	<button class="btn btn-success w-full mt-6 {price == null && 'btn-disabled'}" on:click={approveServiceRequest}>
		Approve Service Request
	</button>
</Modal>
