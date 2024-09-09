<script lang="ts">
	import Icon from '@iconify/svelte';
	import { showModal } from '$lib/client/modal';
	import { order } from '../../../stores/order.store';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.order.orderMessage;

	$: ({ status, cancelReview } = $order);
</script>

{#if status !== 'CART' && status !== 'SAVED'}
	<div class="min-w-96 w-96 h-fit border rounded-lg shadow p-4">
		{#if status === 'REVIEW'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:access-time" class="text-warning" width={40} />
				<div class="font-semibold">{l.review.title}</div>
			</div>

			<button class="btn btn-outline btn-error btn-sm w-full mt-6" on:click={cancelReview}>{l.review.button}</button>
		{:else if status === 'REJECTED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:close-circle-outline" class="text-error" width={40} />
				<div>
					<div class="font-semibold">{l.rejected.title}</div>
					<div class="text-sm">{l.rejected.description}</div>
				</div>
			</div>

			<button class="btn btn-primary rounded-box w-full mt-6">{l.rejected.button}</button>
		{:else if status === 'APPROVED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
				<div>
					<div class="font-semibold">{l.approved.title}</div>
					<div class="text-sm">{l.approved.description}</div>
				</div>
			</div>

			<button class="btn btn-primary rounded-box w-full mt-6" on:click={() => showModal('paymentModal')}>
				{l.approved.button}
			</button>
		{:else if status === 'CONFIRMED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
				<div>
					<div class="font-semibold">{l.confirmed.title}</div>
					<div class="text-sm">{l.confirmed.description}</div>
				</div>
			</div>
		{:else if status === 'FABRICATION'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:manufacturing" class="text-warning" width={40} />
				<div>
					<div class="font-semibold">{l.fabrication.title}</div>
					<div class="text-sm">{l.fabrication.description}</div>
				</div>
			</div>
		{:else if status === 'DELIVERY'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:truck-delivery" class="text-accent w-fit" width={40} />
				<div>
					<div class="font-semibold">{l.delivery.title}</div>
					<div class="text-sm">{l.delivery.description}</div>
					<button
						class="btn btn-xs btn-link text-sm px-0 !underline"
						on:click={() => showModal('deliveryProgressModal')}>{l.delivery.button}</button
					>
				</div>
			</div>
		{:else if status === 'COMPLETED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:shopping" class="text-success" width={40} />
				<div>
					<div class="font-semibold">{l.completed.title}</div>
					<div class="text-sm">{l.completed.description}</div>
				</div>
			</div>
		{/if}
	</div>
{/if}
