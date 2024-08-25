<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from '../../components/FormControl.svelte';
	import { quote, quoteError } from '../../../stores/quote.store';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import { lg } from '../../../stores/i18n.store';

	$: ({ user } = $page.data as PageData);
	$: l = $lg.instantQuote.pricing;
	$: isEdit = $page.url.searchParams.get('id') !== null;

	$: buildTimes = [
		{ name: '24 Hours', value: '24 Hours', price: 5 },
		{ name: 'Extra Urgent!', value: 'Extra Urgent!', price: 99 }
	];

	$: chargeDetails = [
		{ name: 'PCB Cost', price: 5 },
		{ name: 'Material', price: 0 }
	];

	$: disabled = Object.values($quoteError[$quote.productType]).filter(Boolean).length > 0;
</script>

<div class="min-w-96 h-fit border rounded-lg shadow p-4">
	<div class=" flex gap-2 items-center">
		<Icon icon="mdi:tag-multiple-outline" width={20} />
		<div class="font-bold">{l.title}</div>
	</div>
	<div class="divider mt-0" />

	<div class="flex justify-between mr-2">
		<div class="font-semibold">Weight</div>
		<div class="font-mono">0.5 Kg</div>
	</div>

	<div class="font-semibold mt-4">{l.buildTime}:</div>
	<div class="text-sm mt-2 px-2">
		{#each buildTimes as { name, value, price }}
			<div class="flex justify-between">
				<FormControl inputType="In" label={name}>
					<input
						type="radio"
						name="buildTime"
						class="radio radio-primary radio-xs"
						{value}
						bind:group={$quote.standardPcb.buildTime}
					/>
				</FormControl>
				<div class="font-mono">${price.toFixed(2)}</div>
			</div>
		{/each}
	</div>

	<div class="font-semibold mt-4">{l.chargeDetails}:</div>
	<div class="text-sm space-y-2 mt-4 px-2">
		{#each chargeDetails as { name, price }}
			<div class="flex justify-between">
				<div>{name}</div>
				<div class="font-mono">${price.toFixed(2)}</div>
			</div>
		{/each}
	</div>

	<div class="divider mb-0" />
	<div class="flex justify-between font-bold mt-2 pr-2">
		<div>{l.total}</div>
		<div class="font-mono">$5.00</div>
	</div>

	{#if user}
		{#if isEdit}
			<button
				class="btn btn-primary text-base gap-4 mt-6 w-full {disabled && 'btn-disabled'}"
				on:click={() => {
					const orderId = $page.url.searchParams.get('orderId');
					if (!orderId) return;
					quote.upsertProduct(orderId);
				}}
			>
				<Icon icon="mdi:content-save" width={22} />
				Save Product
			</button>
		{:else}
			<div class="flex justify-between mt-6">
				<button class="btn btn-secondary btn-outline text-base gap-4 {disabled && 'btn-disabled'}">
					<Icon icon="mdi:bookmark-add-outline" width={22} />
					{l.addToOrder}
				</button>
				<button
					class="btn btn-primary text-base gap-4 {disabled && 'btn-disabled'}"
					on:click={() => quote.upsertProduct()}
				>
					<Icon icon="mdi:cart" width={22} />
					{l.saveToCart}
				</button>
			</div>
		{/if}
	{:else}
		<a href="/login" class="btn btn-accent btn-outline text-base gap-4 w-full mt-6">
			<Icon icon="mdi:login" width={22} />
			{$lg.common.login}
		</a>
	{/if}
</div>
