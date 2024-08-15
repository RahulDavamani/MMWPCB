<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.peelableSolderMask;

	$: values = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: l.options.topSide, value: 'TOP_SIDE' },
		{ name: l.options.bottomSide, value: 'BOTTOM_SIDE' },
		{ name: l.options.bothSides, value: 'BOTH_SIDES' }
	] as { name: string; value: StandardPcb['peelableSolderMask'] }[];
</script>

<FormItem title={l.title} moreInfo={{ description: l.description }}>
	<select class="select select-bordered select-sm min-w-64" bind:value={$quote.standardPcb.peelableSolderMask}>
		{#each values as { name, value }}
			<option {value}>{name}</option>
		{/each}
	</select>
</FormItem>
