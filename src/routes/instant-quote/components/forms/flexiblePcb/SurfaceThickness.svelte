<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: apd = $productDetails.flexiblePcb;
	$: ({ surfaceFinish, surfaceThickness } = $quote.products.flexiblePcb);
</script>

{#if surfaceFinish === 'IMMERSION_GOLD'}
	{@const pd = apd.surfaceThickness.immersionGold}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				<button
					class="btn btn-sm btn-primary {JSON.stringify(surfaceThickness) !== JSON.stringify(value) && 'btn-outline'}"
					on:click={() => ($quote.products.flexiblePcb.surfaceThickness = value)}
				>
					{pd.parseValue(value)}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}

{#if surfaceFinish === 'HARD_GOLD'}
	{@const pd = apd.surfaceThickness.hardGold}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				<button
					class="btn btn-sm btn-primary {JSON.stringify(surfaceThickness) !== JSON.stringify(value) && 'btn-outline'}"
					on:click={() => ($quote.products.flexiblePcb.surfaceThickness = value)}
				>
					{pd.parseValue(value)}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}

{#if surfaceFinish === 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD'}
	{@const pd = apd.surfaceThickness.immersionGoldHardGold}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				<button
					class="btn btn-sm btn-primary {JSON.stringify(surfaceThickness) !== JSON.stringify(value) && 'btn-outline'}"
					on:click={() => ($quote.products.flexiblePcb.surfaceThickness = value)}
				>
					{pd.parseValue(value)}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}

{#if surfaceFinish === 'ENEPIG'}
	{@const pd = apd.surfaceThickness.enepig}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				<button
					class="btn btn-sm btn-primary {JSON.stringify(surfaceThickness) !== JSON.stringify(value) && 'btn-outline'}"
					on:click={() => ($quote.products.flexiblePcb.surfaceThickness = value)}
				>
					{pd.parseValue(value)}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
