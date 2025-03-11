<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { showModal } from '$lib/client/modal';
	import SelectShippingModal from './SelectShippingModal.svelte';
	import { order, orderShippingPrice } from '../../../stores/order.store';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.shipping;

	$: ({ isPortal, status, shippingInfo, selectShipping, editable } = $order);

	let modalId = 'selectShippingModal';
	$: console.log($orderShippingPrice);
</script>

<div class="grow border rounded-lg shadow p-4 flex flex-col">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:truck-fast-outline" width={20} />
			{l.shippingInfo}
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
				{l.selectShippingMethod}
			</button>
		{:else}
			{@const { countryName, methodName, price, deliveryTime, restriction } = shippingInfo}
			<div class="space-y-1">
				<div class="flex justify-between">
					<div>{l.country}</div>
					<div class="font-semibold">{countryName}</div>
				</div>
				<div class="flex justify-between">
					<div>{l.method}</div>
					<div class="font-semibold">{methodName}</div>
				</div>
				<div class="flex justify-between">
					<div>{l.deliveryTime}</div>
					<div class="font-semibold">{deliveryTime}</div>
				</div>
				<div class="flex justify-between">
					<div>{l.restriction}</div>
					<div class="font-semibold">{restriction}</div>
				</div>
			</div>

			<div class="divider mt-auto m-0" />
			{#if isPortal && status === 'REVIEW'}
				<div class="flex justify-end mt-2 pr-2">
					<label class="input input-bordered input-sm flex items-center gap-2 {!$orderShippingPrice && 'input-error'}">
						<Icon icon="mdi:currency-usd" width={16} />
						<input type="number" bind:value={$orderShippingPrice} class="w-20" />
					</label>
				</div>
			{:else}
				<div class="flex justify-between font-bold mt-2 pr-2">
					<div>{l.shippingCost}</div>
					<div class="font-mono">${price.toFixed(2)}</div>
				</div>
			{/if}
		{/if}
	</div>
</div>

<SelectShippingModal selectedShipping={shippingInfo} {selectShipping} />

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
