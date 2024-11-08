<!-- <script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import { order } from '../../../stores/order.store';
	import Modal from '../../components/UI/Modal.svelte';

	$: l = $lg.order.productsTable.fabrication;

	let modalId = 'fabricationProgressModal';
	export let fabricationProgressId: string | undefined = undefined;
	$: ({ status, products } = $order);
	$: product = products.find((p) => p.id === fabricationProgressId);
</script>

<Modal {modalId} title={l.fabricationProgress} boxClasses="max-w-sm w-full" dividerClasses="mb-2">
	{#if product}
		{#if product.fabricationStatuses.length === 0}
			{#if status === 'FABRICATION'}
				<div class="text-center">{l.notStarted}</div>
			{:else}
				<div class="text-center">{l.completed}</div>
			{/if}
		{:else}
			<ul class="steps steps-vertical">
				{#each product.fabricationStatuses as { status, completed, completedAt }}
					<li class="step {completed && 'step-primary'}">
						<div class="text-left">
							<div>{status}</div>
							{#if completedAt}
								<div class="text-sm opacity-50">{completedAt.toLocaleString()}</div>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</Modal> -->
