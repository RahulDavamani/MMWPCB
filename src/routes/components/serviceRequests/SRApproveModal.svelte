<script lang="ts">
	import Modal from '../UI/Modal.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import Icon from '@iconify/svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { onMount } from 'svelte';
	import FormControl from '../FormControl.svelte';

	let modalId = 'srApproveModal';
	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number] | null;
	export let fetchServiceRequests: () => Promise<void>;
	let price = 0;
	let estDeliveryDate = new Date();
	$: console.log(estDeliveryDate);

	onMount(() =>
		onShowModal(modalId, () => {
			price = 0;
			estDeliveryDate = new Date();
		})
	);

	const approveServiceRequest = ui.loaderWrapper({ title: 'Approving Service Request' }, async () => {
		if (!serviceRequest) return;
		closeModal(modalId);
		await trpc()
			.service.approve.mutate({ id: serviceRequest.id, price, estDeliveryDate })
			.catch((e) => tce(e, { showToast: true }));
		fetchServiceRequests();
	});
</script>

<Modal {modalId} title="Approve Service Request - {serviceRequest?.id}" boxClasses="max-w-lg w-full">
	<div class="mb-2">
		Do you want to approve this service request? Please confirm the service price and Estimated Delivery Date before
		proceeding.
	</div>

	<FormControl label="Price">
		<label class="input input-bordered flex items-center gap-2">
			<Icon icon="mdi:dollar" />
			<input type="number" class="grow" placeholder="Service Price" bind:value={price} />
		</label>
	</FormControl>
	<FormControl label="Estimated Delivery Date">
		<input
			type="date"
			class="input input-bordered"
			value={estDeliveryDate.toISOString().split('T')[0]}
			on:change={(e) => (estDeliveryDate = new Date(e.currentTarget.value))}
		/>
	</FormControl>

	<button class="btn btn-success w-full mt-8 {price == null && 'btn-disabled'}" on:click={approveServiceRequest}>
		Approve Service Request
	</button>
</Modal>
