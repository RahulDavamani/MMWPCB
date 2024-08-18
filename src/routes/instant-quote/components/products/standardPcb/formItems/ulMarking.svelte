<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, options } = $lg.instantQuote.standardPcb.ulMarking);

	$: values = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: options.topSilkscreen, value: 'TOP_SILK_SCREEN' },
		{ name: options.bottomSilkscreen, value: 'BOTTOM_SILK_SCREEN' },
		{ name: options.topSolderMask, value: 'TOP_SOLDER_MASK' },
		{ name: options.bottomSolderMask, value: 'BOTTOM_SOLDER_MASK' },
		{ name: options.topCopper, value: 'TOP_COPPER' },
		{ name: options.bottomCopper, value: 'BOTTOM_COPPER' },
		{ name: options.default, value: 'DEFAULT' }
	] as { name: string; value: StandardPcb['ulMarking'] }[];
</script>

<FormItem {title} moreInfo={{ description }}>
	<select class="select select-bordered select-sm min-w-64" bind:value={$quote.standardPcb.ulMarking}>
		{#each values as { name, value }}
			<option {value}>{name}</option>
		{/each}
	</select>
</FormItem>
