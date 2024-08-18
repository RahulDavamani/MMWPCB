<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import ShippingMethodModal from './ShippingMethodModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.instantQuote.shipping;

	let shippingMethod: RouterOutput['shipping']['getMethods'][number] | undefined;
</script>

<div class="min-w-96 h-fit rounded shadow border p-4">
	<div class="flex w-full gap-2 items-center">
		<Icon icon="mdi:truck-fast-outline" width={20} />
		<div class="font-bold">{l.title}</div>
	</div>
	<div class="divider mt-0 mb-1" />

	{#if !shippingMethod}
		<button class="btn btn-sm btn-link w-full" on:click={() => showModal('shippingMethodModal')}>
			{l.selectShipping}
		</button>
	{:else}
		{@const { country, name, deliveryTime, price } = shippingMethod}

		<div class="text-sm space-y-3 mt-4 px-2">
			<div class="flex justify-between">
				<div>{l.country}</div>
				<button class="btn btn-link p-0 min-h-5 h-5" on:click={() => showModal('shippingMethodModal')}>
					{country.name}
				</button>
			</div>
			<div class="flex justify-between">
				<div>{l.method}</div>
				<button class="btn btn-link p-0 min-h-5 h-5" on:click={() => showModal('shippingMethodModal')}>
					{name}
				</button>
			</div>
			<div class="flex justify-between">
				<div>{l.deliveryTime}</div>
				<div>{deliveryTime}</div>
			</div>
			<div class="flex justify-between">
				<div>{l.weight}</div>
				<div>0.01 kg</div>
			</div>
		</div>

		<div class="divider mb-0" />
		<div class="flex justify-between font-bold mt-2 pr-2">
			<div>{l.shippingCost}</div>
			<div class="font-mono">${price.toFixed(2)}</div>
		</div>
	{/if}
</div>

<ShippingMethodModal bind:shippingMethod />
