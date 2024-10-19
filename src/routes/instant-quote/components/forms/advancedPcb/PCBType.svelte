<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.pcbType;
	$: ({ pcbType } = $quote.products.advancedPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {pcbType !== value && 'btn-outline'}"
				on:click={() => ($quote.products.advancedPcb.pcbType = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
