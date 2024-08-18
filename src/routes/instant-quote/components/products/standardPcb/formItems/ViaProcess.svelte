<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, disclaimer, options } = $lg.instantQuote.standardPcb.viaProcess);
	$: ({ viaProcess } = $quote.standardPcb);

	$: values = [
		{ name: options.tentingVias, value: 'TENTING_VIAS' },
		{ name: options.pluggedVias, value: 'PLUGGED_VIAS_WITH_SOLDER_MASK' },
		{ name: options.viasNotCovered, value: 'VIAS_NOT_COVERED' }
	] as { name: string; value: StandardPcb['viaProcess'] }[];
</script>

<FormItem {title} moreInfo={{ description }} {disclaimer}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {viaProcess !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.viaProcess = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
