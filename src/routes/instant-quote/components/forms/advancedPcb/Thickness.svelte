<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.thickness;
	$: ({ thickness } = $quote.products.advancedPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {thickness !== value && 'btn-outline'}"
				on:click={() => ($quote.products.advancedPcb.thickness = value)}>{value}</button
			>
		{/each}
		<button class="btn btn-sm btn-primary {pd.values.includes(thickness) && 'btn-outline'}">
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center"
				value={pd.values.includes(thickness) ? '' : thickness}
				on:change={(e) => ($quote.products.advancedPcb.thickness = Number(e.currentTarget.value))}
			/>
		</button>
	</div>
</FormItem>
