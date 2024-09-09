<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { showModal } from '$lib/client/modal';
	import SelectAddressModal from './SelectAddressModal.svelte';
	import Address from '../../components/Address.svelte';
	import { order } from '../../../stores/order.store';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.order.deliveryAddress;

	let modalId = 'selectAddressModal';
	$: ({ deliveryAddress, editable } = $order);
</script>

<div class="grow border rounded-lg shadow p-4 flex flex-col">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:address-marker-outline" width={20} />
			{l.title}
		</div>
		{#if deliveryAddress && editable}
			<IconBtn icon="mdi:exchange" iconClasses="text-secondary" on:click={() => showModal(modalId)} />
		{/if}
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="grow flex flex-col justify-center">
		{#if !deliveryAddress}
			<button
				class="btn btn-link border-primary border-dashed hover:border-primary hover:border-dashed hover:no-underline h-32"
				on:click={() => showModal(modalId)}
			>
				{l.selectAddress}
			</button>
		{:else}
			<div class="px-2">
				<Address address={deliveryAddress} />
			</div>
		{/if}
	</div>
</div>

<SelectAddressModal />
