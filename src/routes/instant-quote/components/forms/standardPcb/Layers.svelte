<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.layers;
	$: ({ layers, material, fr4TG, structureOfMCPCB, innerCopper } = $quote.standardPcb);

	$: layerValues = [
		{ name: `1 ${l.layer}`, value: 1 },
		{ name: `2 ${l.layers}`, value: 2 },
		{ name: `4 ${l.layers}`, value: 4 },
		{ name: `6 ${l.layers}`, value: 6 },
		{ name: `8 ${l.layers}`, value: 8 },
		{ name: `10 ${l.layers}`, value: 10 },
		{ name: `12 ${l.layers}`, value: 12 },
		{ name: `14 ${l.layers}`, value: 14 }
	];

	const selectLayer = (value: number) => {
		if (layers !== value)
			$quote.standardPcb =
				value === 1
					? {
							...$quote.standardPcb,
							layers: value,
							copperLayer: 'NONE',
							solderMask: 'NONE',
							silkscreen: 'NONE',
							structureOfMCPCB: undefined,
							innerCopper: undefined
						}
					: {
							...$quote.standardPcb,
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

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each layerValues as { name, value }}
			{@const disabled =
				material === 'ALUMINUM' || material === 'COPPER_BASE' ? value > 4 : material === 'HDI' ? value < 4 : false}
			<button
				class="btn btn-sm btn-primary {layers !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
				on:click={() => selectLayer(value)}
			>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
