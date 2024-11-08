<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.order.orderSummary;

	$: ({
		isPortal,
		status,
		totalItemsPrice,
		shippingPrice,
		discount,
		taxes,
		orderTotal,
		estDeliveryDate,
		weight,
		submitReview,
		submitReviewError,
		saveOrder,
		saveOrderError
	} = $order);
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
			<div class="font-mono">${totalItemsPrice.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>{l.shippingCost}</div>
			<div class="font-mono">${shippingPrice.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>{l.discount}</div>
			<div class="font-mono text-success">-${discount.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>{l.taxes}</div>
			<div class="font-mono">${taxes.toFixed(2)}</div>
		</div>
		<div class="divider" />
		<div class="flex justify-between">
			<div class="text-lg font-bold">{l.orderTotal}</div>
			<div class="text-lg font-bold font-mono">${orderTotal.toFixed(2)}</div>
		</div>
		<div class="divider" />
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div class="tooltip tooltip-left tooltip-info" data-tip={l.estDeliveryDateDesc}>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			{l.estDeliveryDate}
		</div>
		<div class="font-mono">{estDeliveryDate}</div>
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div class="tooltip tooltip-left tooltip-info" data-tip={l.weightDesc}>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			{l.weight}
		</div>
		<div class="font-mono">{weight.toFixed(2)} kg</div>
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
