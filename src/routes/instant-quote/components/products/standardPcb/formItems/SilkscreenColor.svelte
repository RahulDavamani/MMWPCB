<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description } = $lg.instantQuote.standardPcb.silkscreenColor);
	$: ({ silkscreenColor } = $quote.standardPcb);

	$: values = [
		{ name: $lg.common.color.yellow, color: 'bg-yellow-400', value: 'YELLOW' },
		{ name: $lg.common.color.white, color: 'bg-white', value: 'WHITE' },
		{ name: $lg.common.color.black, color: 'bg-black', value: 'BLACK' },
		{ name: $lg.common.none, color: 'bg-gray-400', value: 'NONE' }
	] as { name: string; color: string; value: StandardPcb['silkscreenColor'] }[];
</script>

<FormItem {title} moreInfo={{ description }}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, color, value }}
			<button
				class="btn btn-sm btn-primary {silkscreenColor !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.silkscreenColor = value)}
			>
				<div class="{color} w-3 h-3 border rounded"></div>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
