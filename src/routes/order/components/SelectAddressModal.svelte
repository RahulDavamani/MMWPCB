<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from '../../components/UI/Modal.svelte';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import IconBtn from '../../components/IconBtn.svelte';
	import Loader from '../../components/UI/Loader.svelte';
	import Address from '../../components/Address.svelte';
	import { order } from '../../../stores/order.store';

	let modalId = 'selectAddressModal';
	let addresses: RouterOutput['address']['get'] | undefined;
	let selectedAddressId: string | undefined;

	$: ({ deliveryAddress, selectAddress } = $order);

	const fetchAddresses = async () => {
		addresses = undefined;
		addresses = await trpc()
			.address.get.query()
			.catch((e) => tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to get addresses' } }));
	};

	onMount(() =>
		onShowModal(modalId, async () => {
			await fetchAddresses();
			selectedAddressId = deliveryAddress?.addressId ?? undefined;
		})
	);
</script>

<Modal {modalId} boxClasses="max-w-3xl w-full">
	<div slot="title" class="flex items-center gap-2">
		<IconBtn icon="mdi:refresh" iconClasses="text-accent" width={18} on:click={fetchAddresses} />
		<div class="text-xl font-bold">Select Delivery Address</div>
	</div>

	{#if !addresses}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="flex flex-wrap gap-4 mb-2">
			{#each addresses as address}
				<button
					class="btn btn-ghost border border-black border-opacity-10 shadow flex flex-col flex-nowrap items-start h-fit py-3 font-normal
               {selectedAddressId === address.id ? 'outline outline-success' : ''}"
					on:click={() => (selectedAddressId = address.id)}
				>
					<Address {address} />
				</button>
			{:else}
				<div class="text-center w-full my-4">No Address Found</div>
			{/each}
		</div>

		<div class="flex justify-end mt-4">
			<button
				class="btn btn-success {!selectedAddressId && 'btn-disabled'}"
				on:click={() => {
					const address = addresses?.find((a) => a.id === selectedAddressId);
					if (address) selectAddress(address);
				}}
			>
				Select Address
			</button>
		</div>
	{/if}
</Modal>
