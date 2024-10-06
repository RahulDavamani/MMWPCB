<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.differentDesign;
	$: isError = $quoteError.standardPcb.differentDesign;
	$: ({ differentDesign } = $quote.products.standardPcb);

	$: values = [1, 2, 3, 4, 5, 6];
</script>

<FormItem {pd} {isError}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {differentDesign !== value && 'btn-outline'}"
				on:click={() => ($quote.products.standardPcb.differentDesign = value)}>{value}</button
			>
		{/each}
		<button class="btn btn-sm btn-primary {differentDesign < 7 && 'btn-outline'}">
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center {isError && 'input-error'}"
				value={values.includes(differentDesign) ? '' : differentDesign}
				on:change={(e) => ($quote.products.standardPcb.differentDesign = Number(e.currentTarget.value))}
			/>
		</button>
	</div>
</FormItem>
