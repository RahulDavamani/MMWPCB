<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb;
	$: ({ layers } = $quote.standardPcb);

	$: copperLayerValues = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: l.copperLayer.options.topLayer, value: 'TOP_LAYER' },
		{ name: l.copperLayer.options.bottomLayer, value: 'BOTTOM_LAYER' }
	] as { name: string; value: StandardPcb['copperLayer'] }[];

	$: solderMaskValues = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: l.solderMask.options.topSide, value: 'TOP_SIDE' },
		{ name: l.solderMask.options.bottomSide, value: 'BOTTOM_SIDE' },
		{ name: l.solderMask.options.bothSides, value: 'BOTH_SIDES' }
	] as { name: string; value: StandardPcb['solderMask'] }[];

	$: silkscreenValues = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: l.silkscreen.options.topSide, value: 'TOP_SIDE' },
		{ name: l.silkscreen.options.bottomSide, value: 'BOTTOM_SIDE' },
		{ name: l.silkscreen.options.bothSides, value: 'BOTH_SIDES' }
	] as { name: string; value: StandardPcb['silkscreen'] }[];
</script>

{#if layers === 1}
	<div class="flex flex-wrap gap-x-6">
		<FormItem l={l.copperLayer}>
			<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.copperLayer}>
				{#each copperLayerValues as { name, value }}
					<option {value}>{name}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem l={l.solderMask}>
			<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.solderMask}>
				{#each solderMaskValues as { name, value }}
					<option {value}>{name}</option>
				{/each}
			</select>
		</FormItem>
		<FormItem l={l.silkscreen}>
			<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.silkscreen}>
				{#each silkscreenValues as { name, value }}
					<option {value}>{name}</option>
				{/each}
			</select>
		</FormItem>
	</div>
{/if}
