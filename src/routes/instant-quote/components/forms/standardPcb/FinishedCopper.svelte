<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.finishedCopper;
	$: ({ finishedCopper } = $quote.products.standardPcb);

	$: values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {finishedCopper !== value && 'btn-outline'}"
				on:click={() => ($quote.products.standardPcb.finishedCopper = value)}>{pd.parseValue(value)}</button
			>
		{/each}
	</div>
</FormItem>
