<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.solderMaskColor;
	$: ({ solderMaskColor } = $quote.standardPcb);

	$: values = [
		{ name: $lg.common.color.green, color: 'bg-green-400', value: 'GREEN' },
		{ name: $lg.common.color.red, color: 'bg-red-400', value: 'RED' },
		{ name: $lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
		{ name: $lg.common.color.blue, color: 'bg-blue-400', value: 'BLUE' },
		{ name: $lg.common.color.purple, color: 'bg-purple-400', value: 'PURPLE' },
		{ name: $lg.common.color.matteBlack, color: 'bg-black', value: 'MATTE_BLACK' },
		{ name: $lg.common.color.matteGreen, color: 'bg-green-400', value: 'MATTE_GREEN' },
		{ name: $lg.common.color.white, color: 'bg-white', value: 'WHITE' },
		{ name: $lg.common.color.black, color: 'bg-black', value: 'BLACK' },
		{ name: $lg.common.none, color: 'bg-gray-400', value: 'NONE' }
	] as { name: string; color: string; value: StandardPcb['solderMaskColor'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, color, value }}
			<button
				class="btn btn-sm btn-primary {solderMaskColor !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.solderMaskColor = value)}
			>
				<div class="{color} w-3 h-3 border rounded"></div>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
