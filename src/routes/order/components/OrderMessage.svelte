<script lang="ts">
	import Icon from '@iconify/svelte';
	import { showModal } from '$lib/client/modal';
	import { order } from '../../../stores/order.store';

	$: ({ status, cancelReview } = $order);
</script>

{#if status !== 'CART' && status !== 'SAVED'}
	<div class="min-w-96 w-96 h-fit border rounded-lg shadow p-4">
		{#if status === 'REVIEW'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:access-time" class="text-warning" width={40} />
				<div class="font-semibold">Your order has been submitted for review</div>
			</div>

			<button class="btn btn-outline btn-error btn-sm w-full mt-6" on:click={cancelReview}>Cancel Review</button>
		{:else if status === 'REJECTED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:close-circle-outline" class="text-error" width={40} />
				<div>
					<div class="font-semibold">Your order review has been rejected</div>
					<div class="text-sm">Check the review messages for more detail</div>
				</div>
			</div>

			<button class="btn btn-primary rounded-box w-full mt-6">Submit Again For Review</button>
		{:else if status === 'APPROVED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
				<div>
					<div class="font-semibold">Your order review has been Approved</div>
					<div class="text-sm">Check the updated prices and proceed with payment</div>
				</div>
			</div>

			<button class="btn btn-primary rounded-box w-full mt-6" on:click={() => showModal('paymentModal')}>
				Proceed to Payment
			</button>
		{:else if status === 'CONFIRMED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
				<div>
					<div class="font-semibold">Payment Success!</div>
					<div class="text-sm">Your order is confirmed and is now being processed</div>
				</div>
			</div>
		{:else if status === 'FABRICATION'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:manufacturing" class="text-warning" width={40} />
				<div>
					<div class="font-semibold">Fabrication in progress</div>
					<div class="text-sm">Check the progress status of each product</div>
				</div>
			</div>
		{:else if status === 'DELIVERY'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:truck-delivery" class="text-accent w-fit" width={40} />
				<div>
					<div class="font-semibold">Delivery in progress</div>
					<div class="text-sm">Your order is on the way</div>
					<button
						class="btn btn-xs btn-link text-sm px-0 !underline"
						on:click={() => showModal('deliveryProgressModal')}>Track Delivery</button
					>
				</div>
			</div>
		{:else if status === 'COMPLETED'}
			<div class="flex items-center gap-4">
				<Icon icon="mdi:shopping" class="text-success" width={40} />
				<div>
					<div class="font-semibold">Order Completed</div>
					<div class="text-sm">Thank you for shopping with us</div>
				</div>
			</div>
		{/if}
	</div>
{/if}
