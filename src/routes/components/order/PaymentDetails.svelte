<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';
	import { lg } from '../../../stores/i18n.store';
	import IconBtn from '../IconBtn.svelte';

	$: l = $lg.order.payment;

	$: ({ id, paymentInfo } = $order);
</script>

{#if paymentInfo}
	{@const { amount, currency, captureId, captureTime } = paymentInfo}
	<div class="grow border rounded-lg shadow p-4">
		<div class="flex justify-between items-center">
			<div class="text-lg font-bold flex items-center gap-2">
				<Icon icon="mdi:money" width={20} />
				{l.title}
			</div>
			<IconBtn
				icon="prime:receipt"
				iconClasses="text-info"
				width={24}
				on:click={() => window.open('/payment-receipt/order?id=' + id, '_blank')}
			/>
		</div>
		<div class="divider mt-0 mb-1" />

		<div class="space-y-1">
			<div class="flex justify-between">
				<div>{l.transactionId}</div>
				<div class="font-semibold">{captureId.toUpperCase()}</div>
			</div>
			<div class="flex justify-between">
				<div>{l.paymentTime}</div>
				<div class="font-semibold">{new Date(captureTime).toLocaleString()}</div>
			</div>
			<div class="flex justify-between">
				<div>{l.totalAmount}</div>
				<div class="font-semibold">{(currency === 'USD' ? '$' : '€') + amount}</div>
			</div>
		</div>
	</div>
{/if}
