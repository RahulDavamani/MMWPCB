<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.injectionMolding.molds;
	$: ({ molds } = $quote.products.injectionMolding);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {molds !== value && 'btn-outline'}"
				on:click={() => ($quote.products.injectionMolding.molds = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
