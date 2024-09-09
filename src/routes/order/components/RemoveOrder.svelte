<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order } from '../../../stores/order.store';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.order.removeOrder;
	$: ({ status, showRemoveOrderModal } = $order);
</script>

{#if status === 'SAVED' || status === 'REJECTED'}
	<div class="divider" />
	<div class="flex justify-between items-center">
		<div class="max-w-2xl">
			<span class="font-bold">{$lg.common.warning}: </span>
			{l.description}
		</div>
		<button class="btn btn-error" on:click={showRemoveOrderModal}>
			<Icon icon="mdi:delete-forever" width={20} />
			{l.title}
		</button>
	</div>
{/if}
