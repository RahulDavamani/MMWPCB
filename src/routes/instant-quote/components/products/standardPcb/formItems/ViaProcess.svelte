<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.viaProcess;
	$: ({ viaProcess } = $quote.standardPcb);

	$: values = [
		{ name: l.options.tentingVias, value: 'TENTING_VIAS' },
		{ name: l.options.pluggedVias, value: 'PLUGGED_VIAS_WITH_SOLDER_MASK' },
		{ name: l.options.viasNotCovered, value: 'VIAS_NOT_COVERED' }
	] as { name: string; value: StandardPcb['viaProcess'] }[];
</script>

<FormItem title={l.title} moreInfo={{ description: l.description }}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {viaProcess !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.viaProcess = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
<div class="ml-44 text-sm text-secondary">
	{l.disclaimer}
</div>
