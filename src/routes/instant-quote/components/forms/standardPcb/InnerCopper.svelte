<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.innerCopper;
	$: ({ innerCopper } = $quote.products.standardPcb);

	$: values = [1, 1.5, 2, 3, 4, 5, 6];
</script>

{#if innerCopper}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as value}
				<button
					class="btn btn-sm btn-primary {innerCopper !== value && 'btn-outline'}"
					on:click={() => ($quote.products.standardPcb.innerCopper = value)}>{pd.parseValue(value)}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
