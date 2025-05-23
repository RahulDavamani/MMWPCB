<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import { order } from '../../../stores/order.store';
	import { showModal } from '$lib/client/modal';

	$: l = $lg.order.orderMessage;

	$: ({
		isPortal,
		status,
		submitReview,
		cancelReview,
		approveReviewError,
		approveReview,
		rejectReview,
		verifyPayment,
		startFabrication,
		completeFabrication,
		completeOrder
	} = $order);
</script>

{#if status !== 'CART'}
	<div class="border rounded-lg shadow p-4">
		{#if status === 'SAVED'}
			{#if isPortal}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:content-save-outline" class="text-slate-400" width={40} />
					<div>
						<div class="font-semibold">This Order is saved as draft</div>
						<div class="text-sm">It is not yet submitted for review</div>
					</div>
				</div>
			{:else}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:content-save-outline" class="text-slate-400" width={40} />
					<div>
						<div class="font-semibold">This Order is saved as draft</div>
						<div class="text-sm">It is not yet submitted for review</div>
					</div>
				</div>
			{/if}
		{:else if status === 'REVIEW'}
			{#if isPortal}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:access-time" class="text-warning" width={40} />
					<div>
						<div class="font-semibold">Order submitted for review</div>
						<div class="text-sm">Review the products and update the prices</div>
					</div>
				</div>

				<div class="flex justify-around">
					<button class="btn btn-outline btn-error btn-sm w-2/5" on:click={rejectReview}>
						<Icon icon="mdi:close" width={16} />
						Reject
					</button>
					<div class="tooltip tooltip-error w-2/5" data-tip={approveReviewError}>
						<button
							class="btn btn-outline btn-success btn-sm w-full {approveReviewError && 'btn-disabled'}"
							on:click={approveReview}
						>
							<Icon icon="mdi:check" width={16} />
							Approve
						</button>
					</div>
				</div>
			{:else}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:access-time" class="text-warning" width={40} />
					<div class="font-semibold">Your order has been submitted for review</div>
				</div>

				<button class="btn btn-outline btn-error btn-sm w-full" on:click={cancelReview}>Cancel Review</button>
			{/if}
		{:else if status === 'REJECTED'}
			{#if isPortal}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:close-circle-outline" class="text-error" width={40} />
					<div>
						<div class="font-semibold">This order review has been rejected</div>
						<div class="text-sm">Check the reply messages from customer</div>
					</div>
				</div>
			{:else}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:close-circle-outline" class="text-error" width={40} />
					<div>
						<div class="font-semibold">Your order review has been rejected</div>
						<div class="text-sm">Check the review messages for more detail</div>
					</div>
				</div>

				<button class="btn btn-outline btn-primary btn-sm w-full" on:click={submitReview}>
					Submit Again For Review
				</button>
			{/if}
		{:else if status === 'APPROVED'}
			{#if isPortal}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Order review has been approved</div>
						<div class="text-sm">Waiting for payment from customer</div>
					</div>
				</div>
			{:else}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Your order review has been approved</div>
						<div class="text-sm">Check the updated prices and proceed with payment</div>
					</div>
				</div>

				<button class="btn btn-outline btn-success btn-sm w-full" on:click={() => showModal('orderPaymentModal')}>
					Proceed to Payment
				</button>
				<div class="divider m-2">OR</div>
				<button class="btn btn-outline btn-error btn-sm w-full" on:click={cancelReview}>Cancel Review</button>
			{/if}
		{:else if status === 'PENDING'}
			{#if isPortal}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Payment Success</div>
						<div class="text-sm">Check the payment details and verify it</div>
					</div>
				</div>
				<button class="btn btn-outline btn-primary btn-sm w-full" on:click={verifyPayment}>Payment Verified</button>
			{:else}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Payment Success</div>
						<div class="text-sm">Your order will be confirmed once verification is complete.</div>
					</div>
				</div>
			{/if}
		{:else if status === 'CONFIRMED'}
			{#if isPortal}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Order Confirmed</div>
						<div class="text-sm">Proceed to start the fabrication process</div>
					</div>
				</div>

				<button class="btn btn-outline btn-primary btn-sm w-full" on:click={startFabrication}>
					Start Fabrication
				</button>
			{:else}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:check-circle-outline" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Order Confirmed</div>
						<div class="text-sm">Your order is confirmed and is now being processed</div>
					</div>
				</div>
			{/if}
		{:else if status === 'FABRICATION'}
			{#if isPortal}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:manufacturing" class="text-warning" width={40} />
					<div>
						<div class="font-semibold">Fabrication in progress</div>
						<div class="text-sm">Update the progress status of each product</div>
					</div>
				</div>

				<button class="btn btn-outline btn-success btn-sm w-full" on:click={completeFabrication}>
					Complete Fabrication
				</button>
			{:else}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:manufacturing" class="text-warning" width={40} />
					<div>
						<div class="font-semibold">Fabrication in progress</div>
						<div class="text-sm">Check the progress status of each product</div>
					</div>
				</div>
			{/if}
		{:else if status === 'DELIVERY'}
			{#if isPortal}
				<div class="flex items-center gap-4 mb-4">
					<Icon icon="mdi:truck-delivery" class="text-accent w-fit" width={40} />
					<div>
						<div class="font-semibold">Delivery in progress</div>
						<div class="text-sm">Update the delivery progress status</div>
						<button
							class="btn btn-xs btn-link text-sm px-0 !underline"
							on:click={() => showModal('deliveryProgressModal')}
						>
							Update Delivery
						</button>
					</div>
				</div>

				<button class="btn btn-outline btn-success btn-sm w-full" on:click={completeOrder}>
					<Icon icon="mdi:check-all" width={20} />
					Complete Order
				</button>
			{:else}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:truck-delivery" class="text-accent w-fit" width={40} />
					<div>
						<div class="font-semibold">Delivery in progress</div>
						<div class="text-sm">Your order is on the way</div>
						<button
							class="btn btn-xs btn-link text-sm px-0 !underline"
							on:click={() => showModal('deliveryProgressModal')}
						>
							Track Delivery
						</button>
					</div>
				</div>
			{/if}
		{:else if status === 'COMPLETED'}
			{#if isPortal}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:shopping" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Order Completed!</div>
						<button
							class="btn btn-xs btn-link text-sm px-0 !underline"
							on:click={() => showModal('deliveryProgressModal')}
						>
							Delivery Status
						</button>
					</div>
				</div>
			{:else}
				<div class="flex items-center gap-4">
					<Icon icon="mdi:shopping" class="text-success" width={40} />
					<div>
						<div class="font-semibold">Order Completed!</div>
						<div class="text-sm">Thank you for shopping with us</div>
						<button
							class="btn btn-xs btn-link text-sm px-0 !underline"
							on:click={() => showModal('deliveryProgressModal')}
						>
							Delivery Status
						</button>
					</div>
				</div>
			{/if}
		{/if}
	</div>
{/if}
