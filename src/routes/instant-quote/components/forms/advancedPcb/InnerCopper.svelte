<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.innerCopper;
	$: ({ innerCopper } = $quote.products.advancedPcb);
</script>

{#if innerCopper}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				<button
					class="btn btn-sm btn-primary {innerCopper !== value && 'btn-outline'}"
					on:click={() => ($quote.products.advancedPcb.innerCopper = value)}>{pd.parseValue(value)}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
