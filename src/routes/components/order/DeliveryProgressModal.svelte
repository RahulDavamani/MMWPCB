<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import { order } from '../../../stores/order.store';
	import { ui } from '../../../stores/ui.store';
	import Modal from '../../components/UI/Modal.svelte';
	import Loader from '../UI/Loader.svelte';

	let modalId = 'deliveryProgressModal';
	$: ({ isPortal, deliveryStatuses, updateDelivery } = $order);
	$: btnI = deliveryStatuses.findIndex((s) => !s.completedAt);
	$: if (btnI === -1) btnI = deliveryStatuses.length;
</script>

<Modal
	{modalId}
	title={$lg.order.trackDelivery}
	boxClasses="{isPortal ? 'max-w-lg' : 'max-w-sm'} w-full"
	dividerClasses="mb-2"
>
	{#if $ui.loader}
		<Loader title={$ui.loader.title} />
	{/if}

	<ul class="steps steps-vertical w-full">
		{#each deliveryStatuses as { id, status, completedAt }, i}
			{@const checked = i < btnI}
			{@const disabled = $order.status === 'DELIVERY' ? i + 1 < btnI || i > btnI : true}
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
								on:change={(e) => updateDelivery(id, e.currentTarget.checked)}
							/>
						</div>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</Modal>
