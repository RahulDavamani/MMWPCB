<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb;
	$: ({ highSpeed, highFrequency } = $quote.products.advancedPcb);
</script>

{#if highSpeed !== undefined && highSpeed !== undefined}
	<FormItem pd={pd.highSpeed}>
		<div class="flex flex-wrap gap-4">
			{#each pd.highSpeed.values as value}
				<button
					class="btn btn-sm btn-primary {highSpeed !== value && 'btn-outline'}"
					on:click={() => ($quote.products.advancedPcb.highSpeed = value)}
				>
					{value}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}

{#if highFrequency !== undefined && highFrequency !== null}
	<FormItem pd={pd.highFrequency}>
		<div class="flex flex-wrap gap-4">
			{#each pd.highFrequency.values as value}
				<button
					class="btn btn-sm btn-primary {highFrequency !== value && 'btn-outline'}"
					on:click={() => ($quote.products.advancedPcb.highFrequency = value)}
				>
					{value}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
