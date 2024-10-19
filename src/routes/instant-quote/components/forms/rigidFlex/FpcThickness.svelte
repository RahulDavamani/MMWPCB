<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.fpcThickness;
	$: ({ fpcThickness } = $quote.products.rigidFlex);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {fpcThickness !== value && 'btn-outline'}"
				on:click={() => ($quote.products.rigidFlex.fpcThickness = value)}
			>
				{value}
			</button>
		{/each}
	</div>
</FormItem>
