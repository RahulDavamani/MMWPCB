<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.differentDesign;
	$: isError = $quoteError.flexiblePcb.differentDesign;
	$: ({ differentDesign } = $quote.products.flexiblePcb);
</script>

<FormItem {pd} {isError}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {differentDesign !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.differentDesign = value)}>{value}</button
			>
		{/each}
		<button class="btn btn-sm btn-primary {differentDesign < 7 && 'btn-outline'}">
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center {isError && 'input-error'}"
				value={pd.values.includes(differentDesign) ? '' : differentDesign}
				on:change={(e) => ($quote.products.flexiblePcb.differentDesign = Number(e.currentTarget.value))}
			/>
		</button>
	</div>
</FormItem>
