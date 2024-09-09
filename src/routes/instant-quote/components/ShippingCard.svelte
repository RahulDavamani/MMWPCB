<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { closeModal, showModal } from '$lib/client/modal';
	import { lg } from '../../../stores/i18n.store';
	import SelectShippingModal from '../../order/components/SelectShippingModal.svelte';
	import IconBtn from '../../components/IconBtn.svelte';

	$: l = $lg.shipping;

	let modalId = 'selectShippingModal';
	let shippingMethod: RouterOutput['shipping']['getMethods'][number] | undefined;
</script>

<div class="min-w-96 h-fit border rounded-lg shadow p-4">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:truck-fast-outline" width={20} />
			{l.shippingEstimate}
		</div>
		{#if shippingMethod}
			<IconBtn icon="mdi:exchange" iconClasses="text-secondary" on:click={() => showModal(modalId)} />
		{/if}
	</div>
	<div class="divider mt-0 mb-1" />

	{#if !shippingMethod}
		<button class="btn btn-primary btn-outline border-dashed my-3 w-full" on:click={() => showModal(modalId)}>
			{l.selectShippingMethod}
		</button>
	{:else}
		{@const { country, name, deliveryTime, restriction, price } = shippingMethod}

		<div class="text-sm space-y-3 mt-4 px-2">
			<div class="flex justify-between">
				<div>{l.country}</div>
				<div>{country.name}</div>
			</div>
			<div class="flex justify-between">
				<div>{l.method}</div>
				<div>{name}</div>
			</div>
			<div class="flex justify-between">
				<div>{l.deliveryTime}</div>
				<div>{deliveryTime}</div>
			</div>
			<div class="flex justify-between">
				<div>{l.restriction}</div>
				<div>{restriction}</div>
			</div>
		</div>

		<div class="divider mb-0" />
		<div class="flex justify-between font-bold mt-2 pr-2">
			<div>{l.shippingCost}</div>
			<div class="font-mono">${price.toFixed(2)}</div>
		</div>
	{/if}
</div>

<SelectShippingModal
	selectedShipping={shippingMethod ? { countryId: shippingMethod.countryId, methodId: shippingMethod.id } : null}
	selectShipping={(method) => {
		closeModal(modalId);
		shippingMethod = method;
	}}
/>
