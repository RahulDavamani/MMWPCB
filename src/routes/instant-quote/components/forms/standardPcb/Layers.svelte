<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.layers;
	$: ({ layers, material, fr4TG, structureOfMCPCB, innerCopper } = $quote.products.standardPcb);

	$: values = [1, 2, 4, 6, 8, 10, 12, 14];

	const selectLayer = (value: number) => {
		if (layers !== value)
			$quote.products.standardPcb =
				value === 1
					? {
							...$quote.products.standardPcb,
							layers: value,
							copperLayer: 'NONE',
							solderMask: 'NONE',
							silkscreen: 'NONE',
							structureOfMCPCB: undefined,
							innerCopper: undefined
						}
					: {
							...$quote.products.standardPcb,
							layers: value,
							copperLayer: undefined,
							solderMask: undefined,
							silkscreen: undefined,
							structureOfMCPCB:
								material === 'ALUMINUM' || material === 'COPPER_BASE'
									? (structureOfMCPCB ?? 'METAL_CORE_MIDDLE')
									: undefined,
							fr4TG:
								value > 2 && (fr4TG === 'TG130_140' || fr4TG === 'TG150_160' || fr4TG === 'TG170_180')
									? 'S1000H_TG150'
									: fr4TG,
							innerCopper: value > 2 ? (innerCopper ?? 1) : undefined
						};
	};
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			{@const disabled =
				material === 'ALUMINUM' || material === 'COPPER_BASE' ? value > 4 : material === 'HDI' ? value < 4 : false}
			<button
				class="btn btn-sm btn-primary {layers !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
				on:click={() => selectLayer(value)}
			>
				{pd.parseValue(value)}
			</button>
		{/each}
	</div>
</FormItem>
