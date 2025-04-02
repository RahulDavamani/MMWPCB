<script lang="ts">
	import { onMount } from 'svelte';
	import { lg } from '../../../stores/i18n.store';
	import { order } from '../../../stores/order.store';
	import { ui } from '../../../stores/ui.store';
	import Modal from '../../components/UI/Modal.svelte';
	import FormControl from '../FormControl.svelte';
	import Loader from '../UI/Loader.svelte';
	import { onShowModal } from '$lib/client/modal';

	let modalId = 'deliveryProgressModal';
	$: ({ isPortal, deliveryStatuses, trackingNumber, trackingUrl, updateDelivery, updateTracking } = $order);
	$: btnI = deliveryStatuses.findIndex((s) => !s.completedAt);
	$: if (btnI === -1) btnI = deliveryStatuses.length;

	let trackingInfo = {
		trackingNumber: $order.trackingNumber ?? '',
		trackingUrl: $order.trackingUrl ?? ''
	};

	onMount(() =>
		onShowModal(
			modalId,
			() =>
				(trackingInfo = {
					trackingNumber: $order.trackingNumber ?? '',
					trackingUrl: $order.trackingUrl ?? ''
				})
		)
	);
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

	{#if trackingNumber && trackingUrl}
		<div class="flex items-end gap-2 mt-2">
			<FormControl label="Tracking Number" classes="w-full" labelClasses="text-sm">
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={$order.trackingNumber}
					class="input input-sm pointer-events-none"
				/>
			</FormControl>

			<FormControl label="Tracking Url" classes="w-full" labelClasses="text-sm">
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={$order.trackingUrl}
					class="input input-sm pointer-events-none"
				/>
			</FormControl>
		</div>
	{:else}
		<div class="flex items-end gap-2 mt-2">
			<FormControl label="Tracking Number" classes="w-full" labelClasses="text-sm">
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={trackingInfo.trackingNumber}
					class="input input-sm input-bordered"
				/>
			</FormControl>

			<FormControl label="Tracking Url" classes="w-full" labelClasses="text-sm">
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={trackingInfo.trackingUrl}
					class="input input-sm input-bordered"
				/>
			</FormControl>

			<button
				class="btn btn-sm btn-success"
				on:click={() => updateTracking(trackingInfo.trackingNumber, trackingInfo.trackingUrl)}>Update</button
			>
		</div>
	{/if}
</Modal>
