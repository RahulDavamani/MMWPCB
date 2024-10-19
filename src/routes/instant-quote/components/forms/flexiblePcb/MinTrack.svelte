<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.minTrack;
	$: ({ minTrack } = $quote.products.flexiblePcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {minTrack !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.minTrack = value)}
			>
				{pd.parseValue(value)}
			</button>
		{/each}
	</div>
</FormItem>
