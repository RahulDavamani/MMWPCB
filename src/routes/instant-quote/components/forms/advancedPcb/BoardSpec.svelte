<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.boardSpec;
	$: ({ boardSpec } = $quote.products.advancedPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {boardSpec !== value && 'btn-outline'}"
				on:click={() => ($quote.products.advancedPcb.boardSpec = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
