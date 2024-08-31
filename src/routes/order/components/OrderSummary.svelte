<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';

	$: ({
		status,
		totalItemsPrice,
		shippingPrice,
		discount,
		taxes,
		orderTotal,
		estDeliveryDate,
		weight,
		submitReviewError,
		saveOrderError,
		submitReview,
		saveOrder
	} = $order);
</script>

<div class="min-w-96 w-96 h-fit border rounded-lg shadow p-4">
	<div class="text-lg font-bold flex items-center gap-2">
		<Icon icon="mdi:receipt-text-outline" width={20} />
		Order Summary
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="space-y-2 mt-4 px-2">
		<div class="flex justify-between">
			<div>Items Cost</div>
			<div class="font-mono">${totalItemsPrice.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>Shipping Cost</div>
			<div class="font-mono">${shippingPrice.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>Discount</div>
			<div class="font-mono text-success">-${discount.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>Taxes</div>
			<div class="font-mono">${taxes.toFixed(2)}</div>
		</div>
		<div class="divider" />
		<div class="flex justify-between">
			<div class="text-lg font-bold">Order Total</div>
			<div class="text-lg font-bold font-mono">${orderTotal.toFixed(2)}</div>
		</div>
		<div class="divider" />
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div
				class="tooltip tooltip-left tooltip-info"
				data-tip="The estimated shipping date is calculated based on the item with the longest build time in your order. Please note that this date is for reference only. If your order requires confirmation, the shipping date may be subject to extension."
			>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			Est Delivery Date
		</div>
		<div class="font-mono">{estDeliveryDate}</div>
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div
				class="tooltip tooltip-left tooltip-info"
				data-tip="The weight here is calculated based on the larger value of gross weight and volume weight, which is estimated for reference. If the actual weight differs from the estimate, shipping cost may be adjusted accordingly."
			>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			Weight
		</div>
		<div class="font-mono">{weight.toFixed(2)} kg</div>
	</div>

	{#if status === 'CART' || status === 'SAVED'}
		<div class="tooltip tooltip-error mt-8 w-full" data-tip={submitReviewError}>
			<button class="btn btn-primary rounded-box w-full {submitReviewError && 'btn-disabled'}" on:click={submitReview}>
				Submit Order For Review
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
				Save Order
			</button>
		</div>
	{/if}
</div>
