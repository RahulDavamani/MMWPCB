<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.surfaceFinishLayer;
	$: ({ surfaceFinishLayer } = $quote.products.standardPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {surfaceFinishLayer !== value && 'btn-outline'}"
				on:click={() => ($quote.products.standardPcb.surfaceFinishLayer = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
