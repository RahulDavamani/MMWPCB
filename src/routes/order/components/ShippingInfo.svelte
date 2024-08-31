<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { showModal } from '$lib/client/modal';
	import SelectShippingModal from './SelectShippingModal.svelte';
	import { order } from '../../../stores/order.store';

	$: ({ shippingInfo, selectShipping, editable } = $order);

	let modalId = 'selectShippingModal';
</script>

<div class="grow border rounded-lg shadow p-4 flex flex-col">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:truck-fast-outline" width={20} />
			Shipping Info
		</div>
		{#if shippingInfo && editable}
			<IconBtn icon="mdi:exchange" iconClasses="text-secondary" on:click={() => showModal(modalId)} />
		{/if}
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="grow flex flex-col justify-center">
		{#if !shippingInfo}
			<button
				class="btn btn-link border-primary border-dashed hover:border-primary hover:border-dashed hover:no-underline h-32"
				on:click={() => showModal(modalId)}
			>
				Select Shipping Method
			</button>
		{:else}
			{@const { countryName, methodName, price, deliveryTime, restriction } = shippingInfo}
			<div class="space-y-1">
				<div class="flex justify-between">
					<div>Country</div>
					<div class="font-semibold">{countryName}</div>
				</div>
				<div class="flex justify-between">
					<div>Method</div>
					<div class="font-semibold">{methodName}</div>
				</div>
				<div class="flex justify-between">
					<div>Delivery Time</div>
					<div class="font-semibold">{deliveryTime}</div>
				</div>
				<div class="flex justify-between">
					<div>Restriction</div>
					<div class="font-semibold">{restriction}</div>
				</div>
			</div>

			<div class="divider mt-auto m-0" />
			<div class="flex justify-between font-bold mt-2 pr-2">
				<div>Shipping Cost</div>
				<div class="font-mono">${price.toFixed(2)}</div>
			</div>
		{/if}
	</div>
</div>

<SelectShippingModal selectedShipping={shippingInfo} {selectShipping} />
