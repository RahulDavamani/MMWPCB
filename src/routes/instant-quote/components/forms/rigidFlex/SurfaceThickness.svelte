<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: apd = $productDetails.rigidFlex;
	$: ({ surfaceFinish, surfaceThickness } = $quote.products.rigidFlex);
</script>

{#if surfaceFinish === 'IMMERSION_GOLD'}
	{@const pd = apd.surfaceThickness.immersionGold}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				<button
					class="btn btn-sm btn-primary {JSON.stringify(surfaceThickness) !== JSON.stringify(value) && 'btn-outline'}"
					on:click={() => ($quote.products.rigidFlex.surfaceThickness = value)}
				>
					{pd.parseValue(value)}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
