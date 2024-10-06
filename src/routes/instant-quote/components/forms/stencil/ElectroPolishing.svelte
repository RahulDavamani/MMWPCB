<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.stencil.electroPolishing;
	$: ({ electroPolishing } = $quote.products.stencil);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {electroPolishing !== value && 'btn-outline'}"
				on:click={() => ($quote.products.stencil.electroPolishing = value)}
			>
				{title}
			</button>
		{/each}
	</div>
</FormItem>
