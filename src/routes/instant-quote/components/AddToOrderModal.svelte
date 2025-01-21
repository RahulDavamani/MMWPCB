<script lang="ts">
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { onMount } from 'svelte';
	import Modal from '../../components/UI/Modal.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import IconBtn from '../../components/IconBtn.svelte';
	import Loader from '../../components/UI/Loader.svelte';
	import { quote } from '../../../stores/quote.store';

	let modalId = 'addToOrderModal';
	let orders: RouterOutput['order']['getSaved'] | undefined;
	let selectedOrderId: string | undefined;

	const fetchOrders = async () => {
		orders = undefined;
		orders = await trpc()
			.order.getSaved.query()
			.catch((e) =>
				tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to fetch saved orders' } })
			);
	};

	const addToOrder = async () => {
		if (!selectedOrderId) return;
		closeModal(modalId);
		await quote.upsertProduct(selectedOrderId);
	};

	onMount(() => onShowModal(modalId, fetchOrders));
</script>

<Modal {modalId} boxClasses="max-w-3xl w-full">
	<div slot="title" class="flex items-center gap-2">
		<IconBtn icon="mdi:refresh" iconClasses="text-accent" width={16} on:click={fetchOrders} />
		<div class="text-xl font-bold">Add to Order</div>
	</div>

	{#if !orders}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="overflow-x-auto mt-6">
			<table class="table">
				<thead>
					<tr>
						<th></th>
						<th>Order Id</th>
						<th>Created At</th>
						<th class="text-center">Item Count</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each orders as { id, createdAt, _count }}
						{@const checked = selectedOrderId === id}
						{@const itemCount = Object.values(_count).reduce((acc, cur) => acc + cur, 0)}
						<tr class="cursor-pointer hover {checked && 'bg-base-200'}" on:click={() => (selectedOrderId = id)}>
							<td>
								<input type="radio" class="radio radio-primary radio-sm" {checked} />
							</td>
							<td class="font-semibold">#{id}</td>
							<td>{createdAt.toLocaleString()}</td>
							<td class="text-center">{itemCount}</td>
							<td class="flex items-center w-1">
								<IconBtn
									icon="mdi:chevron-right"
									iconClasses="text-info"
									width={24}
									on:click={() => window.open(`/orders/${id}`, '_blank')}
								/>
							</td>
						</tr>
					{:else}
						<tr>
							<td colspan="5" class="text-center">No saved orders found</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="flex justify-end mt-6">
			<button class="btn btn-success {!selectedOrderId && 'btn-disabled'}" on:click={addToOrder}> Add to Order </button>
		</div>
	{/if}
</Modal>
