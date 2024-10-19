<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.layers;
	$: ({ layers } = $quote.products.advancedPcb);

	const selectLayer = (value: number) => {
		if (layers !== value)
			$quote.products.advancedPcb = {
				...$quote.products.advancedPcb,
				layers: value,
				copperLayer: value === 1 ? 'NONE' : undefined,
				solderMask: value === 1 ? 'NONE' : undefined,
				silkscreen: value === 1 ? 'NONE' : undefined,

				innerCopper: value >= 4 ? 1 : undefined
			};
	};
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button class="btn btn-sm btn-primary {layers !== value && 'btn-outline'}" on:click={() => selectLayer(value)}>
				{pd.parseValue(value)}
			</button>
		{/each}
	</div>
</FormItem>
