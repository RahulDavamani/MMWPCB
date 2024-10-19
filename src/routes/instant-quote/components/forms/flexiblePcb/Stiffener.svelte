<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.stiffener;
	$: ({ stiffener } = $quote.products.flexiblePcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {stiffener !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.stiffener = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
