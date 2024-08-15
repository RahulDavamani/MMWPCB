<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = { solderMaskColor: $lg.instantQuote.standardPcb.solderMaskColor, color: $lg.common.color };
	$: ({ solderMaskColor } = $quote.standardPcb);

	$: values = [
		{ name: l.color.green, color: 'bg-green-400', value: 'GREEN' },
		{ name: l.color.red, color: 'bg-red-400', value: 'RED' },
		{ name: l.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
		{ name: l.color.blue, color: 'bg-blue-400', value: 'BLUE' },
		{ name: l.color.purple, color: 'bg-purple-400', value: 'PURPLE' },
		{ name: l.color.matteBlack, color: 'bg-black', value: 'MATTE_BLACK' },
		{ name: l.color.matteGreen, color: 'bg-green-400', value: 'MATTE_GREEN' },
		{ name: l.color.white, color: 'bg-white', value: 'WHITE' },
		{ name: l.color.black, color: 'bg-black', value: 'BLACK' },
		{ name: $lg.common.none, color: 'bg-gray-400', value: 'NONE' }
	] as { name: string; color: string; value: StandardPcb['solderMaskColor'] }[];
</script>

<FormItem title={l.solderMaskColor.title} moreInfo={{ description: l.solderMaskColor.description }}>
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
