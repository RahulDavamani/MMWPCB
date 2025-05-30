<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.thickness;
	$: ({ thickness } = $quote.products.flexiblePcb);
	$: isError = $quoteError.flexiblePcb.thickness;
</script>

<FormItem {pd} {isError}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {thickness !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.thickness = value)}>{value}</button
			>
		{/each}
		<button class="btn btn-sm {isError ? 'btn-error' : 'btn-primary'} {pd.values.includes(thickness) && 'btn-outline'}">
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center {isError && 'input-error'}"
				value={pd.values.includes(thickness) ? '' : thickness}
				on:change={(e) => {
					let val = Number(e.currentTarget.value) < 0 ? 0 : Number(e.currentTarget.value);
					e.currentTarget.value = String(val);
					$quote.products.flexiblePcb.thickness = val;
				}}
				min={0}
			/>
		</button>
	</div>
</FormItem>
