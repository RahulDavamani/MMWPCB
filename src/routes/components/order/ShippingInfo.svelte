<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { showModal } from '$lib/client/modal';
	import SelectShippingModal from './SelectShippingModal.svelte';
	import { order, orderApproveData } from '../../../stores/order.store';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';

	$: l = $lg.shipping;

	$: ({ isPortal, status, shippingInfo, selectShipping, removeShipping, editable } = $order);

	let modalId = 'selectShippingModal';
</script>

<div class="w-1/2 border rounded-lg shadow p-4 flex flex-col">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:truck-fast-outline" width={20} />
			{l.shippingInfo}
		</div>
		{#if shippingInfo && editable}
			<div>
				<IconBtn icon="mdi:close" iconClasses="text-error" on:click={removeShipping} />
				<IconBtn icon="mdi:exchange" iconClasses="text-secondary" on:click={() => showModal(modalId)} />
			</div>
		{/if}
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="grow flex flex-col justify-center">
		{#if !shippingInfo}
			{#if editable}
				<button
					class="btn btn-link border-primary border-dashed hover:border-primary hover:border-dashed hover:no-underline h-32"
					on:click={() => showModal(modalId)}
				>
					{l.selectShippingMethod}
				</button>
			{:else}
				<button class="btn btn-disabled h-32">{l.shippingNotSelected}</button>
			{/if}
		{:else}
			{@const { country, method, price, deliveryTime } = shippingInfo}
			<div class="space-y-1">
				<div class="flex justify-between">
					<div>{l.country}</div>
					{#if isPortal && status === 'REVIEW'}
						<input
							type="text"
							class="input input-bordered input-xs text-center
                     {$orderApproveData.shippingInfo.country === '' && 'input-error'}"
							bind:value={$orderApproveData.shippingInfo.country}
						/>
					{:else}
						<div class="font-semibold">{country}</div>
					{/if}
				</div>
				<div class="flex justify-between">
					<div>{l.method}</div>
					{#if isPortal && status === 'REVIEW'}
						<input
							type="text"
							class="input input-bordered input-xs text-center"
							bind:value={$orderApproveData.shippingInfo.method}
						/>
					{:else}
						<div class="font-semibold">{method}</div>
					{/if}
				</div>
				<div class="flex justify-between">
					<div>{l.deliveryTime}</div>
					{#if isPortal && status === 'REVIEW'}
						<input
							type="text"
							class="input input-bordered input-xs text-center"
							bind:value={$orderApproveData.shippingInfo.deliveryTime}
						/>
					{:else}
						<div class="font-semibold">{deliveryTime} {l.days}</div>
					{/if}
				</div>
			</div>

			<div class="divider mt-auto m-0" />

			<div class="flex justify-between font-bold mt-2 pr-2">
				<div>{l.shippingCost}</div>
				{#if isPortal && status === 'REVIEW'}
					<input
						type="number"
						class="input input-bordered input-xs w-24 text-center
                  {$orderApproveData.shippingInfo.price === null && 'input-error'}"
						bind:value={$orderApproveData.shippingInfo.price}
					/>
				{:else}
					<div class="font-mono">{price ? parsePrice($i18n.currency, price) : 'TBA'}</div>
				{/if}
			</div>
		{/if}
	</div>
</div>

<SelectShippingModal {selectShipping} />

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		appearance: textfield;
		-moz-appearance: textfield;
	}
</style>
