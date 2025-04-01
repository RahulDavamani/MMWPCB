<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { showModal } from '$lib/client/modal';
	import SelectShippingModal from './SelectShippingModal.svelte';
	import { order, orderApproveData } from '../../../stores/order.store';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';

	$: l = $lg.shipping;

	$: ({ isPortal, status, shippingInfo, selectShipping, editable } = $order);

	let modalId = 'selectShippingModal';
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
					{#if isPortal && status === 'REVIEW'}
						<input
							type="text"
							class="input input-bordered input-xs text-center
                     {$orderApproveData.shippingInfo.countryName === '' && 'input-error'}"
							bind:value={$orderApproveData.shippingInfo.countryName}
						/>
					{:else}
						<div class="font-semibold">{countryName}</div>
					{/if}
				</div>
				<div class="flex justify-between">
					<div>{l.method}</div>
					{#if isPortal && status === 'REVIEW'}
						<input
							type="text"
							class="input input-bordered input-xs text-center"
							bind:value={$orderApproveData.shippingInfo.methodName}
						/>
					{:else}
						<div class="font-semibold">{methodName ?? 'TBA'}</div>
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
						<div class="font-semibold">{deliveryTime ?? 'TBA'}</div>
					{/if}
				</div>
				<div class="flex justify-between">
					<div>{l.restriction}</div>
					{#if isPortal && status === 'REVIEW'}
						<input
							type="text"
							class="input input-bordered input-xs text-center"
							bind:value={$orderApproveData.shippingInfo.restriction}
						/>
					{:else}
						<div class="font-semibold">{restriction ?? 'TBA'}</div>
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

<SelectShippingModal {selectShipping} showOther={true} />

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
