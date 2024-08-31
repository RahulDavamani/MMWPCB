<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';

	$: ({ paymentInfo, orderTotal } = $order);
</script>

{#if paymentInfo}
	{@const { transactionId, createdAt, paymentInstrumentType, amount, currencyIsoCode } = paymentInfo}
	<div class="grow border rounded-lg shadow p-4">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:money" width={20} />
			Payment Details
		</div>
		<div class="divider mt-0 mb-1" />

		<div class="space-y-1">
			<div class="flex justify-between">
				<div>Transaction ID</div>
				<div class="font-semibold">{transactionId.toUpperCase()}</div>
			</div>
			<div class="flex justify-between">
				<div>Payment Time</div>
				<div class="font-semibold">{new Date(createdAt).toLocaleString()}</div>
			</div>
			<div class="flex justify-between">
				<div>Payment Method</div>
				<div class="font-semibold">
					{paymentInstrumentType.replace('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
				</div>
			</div>
			<div class="flex justify-between">
				<div>Total Amount</div>
				<div class="font-semibold">
					${orderTotal.toFixed(2)}
				</div>
			</div>
		</div>
	</div>
{/if}
