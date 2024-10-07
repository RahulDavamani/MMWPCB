<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.minHoleSize;
	$: ({ minHoleSize } = $quote.products.standardPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {minHoleSize !== value && 'btn-outline'}"
				on:click={() => ($quote.products.standardPcb.minHoleSize = value)}>{pd.parseValue(value)}</button
			>
		{/each}
		<button
			class="btn btn-sm btn-primary {minHoleSize !== 0 && 'btn-outline'}"
			on:click={() => ($quote.products.standardPcb.minHoleSize = 0)}>{pd.l.noDrill}</button
		>
	</div>
</FormItem>
