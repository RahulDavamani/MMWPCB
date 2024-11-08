<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import { order } from '../../../stores/order.store';
	import { ui } from '../../../stores/ui.store';
	import Modal from '../../components/UI/Modal.svelte';
	import Loader from '../UI/Loader.svelte';

	$: l = $lg.order.productsTable.fabrication;

	let modalId = 'fabricationProgressModal';
	export let fabricationProgressId: string | undefined = undefined;

	$: ({ isPortal, products, updateFabrication } = $order);
	$: product = products.find((p) => p.id === fabricationProgressId);
	$: btnI = product?.fabricationStatuses.findIndex((s) => !s.completedAt) ?? -1;
	$: if (btnI === -1) btnI = product?.fabricationStatuses.length ?? 0;
</script>

<Modal
	{modalId}
	title={l.fabricationProgress}
	boxClasses="{isPortal ? 'max-w-lg' : 'max-w-sm'} w-full"
	dividerClasses="mb-2"
>
	{#if $ui.loader}
		<Loader title={$ui.loader.title} />
	{/if}

	{#if product}
		<ul class="steps steps-vertical w-full">
			{#each product.fabricationStatuses as { id, status, completedAt }, i}
				{@const checked = i < btnI}
				{@const disabled = $order.status === 'FABRICATION' ? i + 1 < btnI || i > btnI : true}
				{@const tooltip = i === btnI ? 'Mark as complete' : i + 1 === btnI ? 'Mark as incomplete' : undefined}

				<li class="step {checked && 'step-success'}">
					<div class="flex justify-between items-center w-full">
						<div class="text-start">
							<div class="font-semibold">{status}</div>
							{#if completedAt}
								<div class="text-sm opacity-50">{completedAt.toLocaleString()}</div>
							{/if}
						</div>
						{#if isPortal}
							<div class="tooltip {checked ? 'tooltip-error' : 'tooltip-success'} tooltip-left" data-tip={tooltip}>
								<input
									type="checkbox"
									class="checkbox checkbox-success"
									{checked}
									{disabled}
									on:change={(e) => updateFabrication(id, e.currentTarget.checked)}
								/>
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</Modal>
