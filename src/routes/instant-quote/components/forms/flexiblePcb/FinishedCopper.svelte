<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.finishedCopper;
	$: ({ finishedCopper } = $quote.products.advancedPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {finishedCopper !== value && 'btn-outline'}"
				on:click={() => ($quote.products.advancedPcb.finishedCopper = value)}>{pd.parseValue(value)}</button
			>
		{/each}
	</div>
</FormItem>
