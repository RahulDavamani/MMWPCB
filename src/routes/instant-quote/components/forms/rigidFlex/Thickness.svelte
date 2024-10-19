<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.thickness;
	$: ({ thickness } = $quote.products.rigidFlex);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {thickness !== value && 'btn-outline'}"
				on:click={() => ($quote.products.rigidFlex.thickness = value)}
			>
				{value}
			</button>
		{/each}
	</div>
</FormItem>
