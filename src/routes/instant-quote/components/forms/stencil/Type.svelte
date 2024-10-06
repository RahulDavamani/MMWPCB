<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.stencil.type;
	$: ({ type } = $quote.products.stencil);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {type !== value && 'btn-outline'}"
				on:click={() => ($quote.products.stencil.type = value)}
			>
				{title}
			</button>
		{/each}
	</div>
</FormItem>
