<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order, orderApproveData } from '../../../stores/order.store';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';
	import Flatpickr from 'svelte-flatpickr';
	import IconBtn from '../IconBtn.svelte';

	$: l = $lg.order.orderSummary;

	$: ({
		isPortal,
		status,
		editable,
		totalItemsPrice,
		shippingPrice,
		discount,
		discountPrice,
		orderTotal,
		estDeliveryDate,
		weight,
		applyDiscount,
		removeDiscount,
		submitReview,
		submitReviewError,
		saveOrder,
		saveOrderError
	} = $order);

	let promoCode = '';
</script>

<div class="border rounded-lg shadow p-4">
	<div class="text-lg font-bold flex items-center gap-2">
		<Icon icon="mdi:receipt-text-outline" width={20} />
		{l.title}
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="space-y-2 mt-4 px-2">
		<div class="flex justify-between">
			<div>{l.itemsCost}</div>
			<div class="font-mono">{parsePrice($i18n.currency, totalItemsPrice)}</div>
		</div>
		<div class="flex justify-between">
			<div>{l.shippingCost}</div>
			<div class="font-mono">{parsePrice($i18n.currency, shippingPrice)}</div>
		</div>
		{#if discount}
			<div class="flex justify-between">
				<div>{l.discount}</div>
				<div class="font-mono text-success">-{parsePrice($i18n.currency, discountPrice)}</div>
			</div>
		{/if}
		<div class="divider" />
		<div class="flex justify-between">
			<div class="text-lg font-bold">{l.orderTotal}</div>
			<div class="text-lg font-bold font-mono">{parsePrice($i18n.currency, orderTotal)}</div>
		</div>
		<div class="divider" />
	</div>

	{#if editable && !discount}
		<div class="px-2 mb-6 mt-3">
			<div class="font-semibold ml-1 mb-1">{l.promoCode}</div>
			<div class="flex gap-2">
				<input type="text" class="input input-bordered input-sm w-full" bind:value={promoCode} />
				<button class="btn btn-sm btn-secondary ml-2" on:click={() => applyDiscount(promoCode)}>{l.apply}</button>
			</div>
		</div>
	{/if}

	{#if discount}
		{@const discountText =
			discount.type === 'PERCENTAGE'
				? `${discount.code} - ${parsePrice($i18n.currency, discount.value)}% off`
				: `${discount.code} - Flat ${parsePrice($i18n.currency, discount.value)} off`}

		<div class="flex justify-between mt-4 px-2">
			<div class="flex items-center gap-2 font-semibold tooltip">
				<div class="tooltip tooltip-left tooltip-info" data-tip={discountText}>
					<Icon icon="mdi:discount" width={20} class="text-secondary" />
				</div>
				{l.promoCode}
				{#if editable}
					<IconBtn icon="mdi:trash" iconClasses="text-error" width={20} on:click={removeDiscount} />
				{/if}
			</div>

			<div class="font-mono">{discount.code}</div>
		</div>
	{/if}

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div class="tooltip tooltip-left tooltip-info" data-tip={l.estDeliveryDateDesc}>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			{l.estDeliveryDate}
		</div>
		{#if isPortal && status === 'REVIEW'}
			<Flatpickr
				class="input input-bordered input-xs text-center"
				options={{ dateFormat: 'j M Y', minDate: 'today' }}
				value={[$orderApproveData.estDeliveryDate]}
				on:close={(e) => ($orderApproveData.estDeliveryDate = e.detail[0][0])}
				children
			/>
		{:else}
			<div class="font-mono">{estDeliveryDate ? estDeliveryDate.toDateString() : 'TBA'}</div>
		{/if}
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div class="tooltip tooltip-left tooltip-info" data-tip={l.weightDesc}>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			{l.weight}
		</div>
		{#if isPortal && status === 'REVIEW'}
			<div class="join">
				<input
					type="number"
					class="input input-bordered input-xs w-20 text-center join-item
               {($orderApproveData.weight === null || $orderApproveData.weight === 0) && 'input-error'}"
					bind:value={$orderApproveData.weight}
				/>
				<div class="btn btn-xs join-item pointer-events-none">Kg</div>
			</div>
		{:else}
			<div class="font-mono">{weight ? `${weight.toFixed(2)} Kg` : 'TBA'}</div>
		{/if}
	</div>

	{#if !isPortal}
		{#if status === 'CART' || status === 'SAVED'}
			<div class="tooltip tooltip-error mt-8 w-full" data-tip={submitReviewError}>
				<button
					class="btn btn-primary rounded-box w-full {submitReviewError && 'btn-disabled'}"
					on:click={submitReview}
				>
					{l.submitOrderForReview}
				</button>
			</div>
		{/if}

		{#if status === 'CART'}
			<div class="divider">OR</div>
			<div class="tooltip tooltip-error w-full" data-tip={saveOrderError}>
				<button
					class="btn btn-secondary btn-outline rounded-box w-full {saveOrderError && 'btn-disabled'}"
					on:click={saveOrder}
				>
					<Icon icon="mdi:content-save-outline" width={22} />
					{l.saveOrder}
				</button>
			</div>
		{/if}
	{/if}
</div>

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
