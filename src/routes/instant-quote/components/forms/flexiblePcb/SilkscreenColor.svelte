<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.silkscreenColor;
	$: ({ silkscreenColor } = $quote.products.flexiblePcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, color, value }}
			<button
				class="btn btn-sm btn-primary {silkscreenColor !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.silkscreenColor = value)}
			>
				<div class="{color} w-3 h-3 border rounded" />
				{title}
			</button>
		{/each}
	</div>
</FormItem>
