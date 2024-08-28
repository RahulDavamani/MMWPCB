<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../$types';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { goto, invalidateAll } from '$app/navigation';
	import { showModal } from '$lib/client/modal';

	$: ({
		order: { id, status }
	} = $page.data as PageData);

	const cancelReview = ui.loaderWrapper({ title: 'Cancelling Review' }, async () => {
		await trpc()
			.order.cancelReview.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: 'Failed to cancel review', retryFn: cancelReview } }));

		ui.setToast({ title: 'Order review cancelled', alertClasses: 'alert-success' });
		await invalidateAll();
		goto(`/order?id=${id}`);
	});
</script>

{#if status !== 'CART' && status !== 'SAVED'}
	<div class="min-w-96 w-96 h-fit border rounded-lg shadow p-4">
		{#if status === 'IN_REVIEW'}
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
		{/if}
	</div>
{/if}
