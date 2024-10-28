<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.threePrinting.designUnits;
	$: ({ designUnits } = $quote.products.threePrinting);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {designUnits !== value && 'btn-outline'}"
				on:click={() => ($quote.products.threePrinting.designUnits = value)}>{pd.parseValue(value)}</button
			>
		{/each}
	</div>
</FormItem>
