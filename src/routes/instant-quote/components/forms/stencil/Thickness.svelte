<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.stencil.thickness;
	$: ({ thickness } = $quote.products.stencil);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {thickness !== value && 'btn-outline'}"
				on:click={() => ($quote.products.stencil.thickness = value)}>{value} mm</button
			>
		{/each}
	</div>
</FormItem>
