<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';

	$: ({ status, showRemoveOrderModal } = $order);
</script>

{#if status === 'SAVED' || status === 'REJECTED'}
	<div class="divider" />
	<div class="flex justify-between items-center">
		<div class="max-w-2xl">
			<span class="font-bold">Warning: </span>
			This action will permanently delete the order and all its related information. This cannot be undone, so please proceed
			with caution.
		</div>
		<button class="btn btn-error" on:click={showRemoveOrderModal}>
			<Icon icon="mdi:delete-forever" width={20} />
			Delete Order
		</button>
	</div>
{/if}
