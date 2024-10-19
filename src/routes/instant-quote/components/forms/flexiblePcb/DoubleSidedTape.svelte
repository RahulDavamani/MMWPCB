<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.doubleSidedTape;
	$: ({ doubleSidedTape } = $quote.products.flexiblePcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {doubleSidedTape !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.doubleSidedTape = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
