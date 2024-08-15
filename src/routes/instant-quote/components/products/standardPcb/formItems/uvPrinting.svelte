<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.uvPrinting;
	$: ({ uvPrinting } = $quote.standardPcb);

	$: values = [
		{ name: l.options.singleSidedTop, value: 'SINGLE_SIDED_TOP' },
		{ name: l.options.singleSidedBottom, value: 'SINGLE_SIDED_BOTTOM' },
		{ name: l.options.doubleSided, value: 'DOUBLE_SIDED' },
		{ name: $lg.common.none, value: 'NONE' }
	] as { name: string; value: StandardPcb['uvPrinting'] }[];
</script>

<FormItem title={l.title} moreInfo={{ url: '' }}>
	<div slot="dropdownContent">
		<div class="font-semibold">{l.description.title1}:</div>
		<div>1. {l.description.body1}</div>
		<div>2. {l.description.body2}</div>

		<div class="font-semibold mt-2">{l.description.title2}:</div>
		<div>1. {l.description.body3}</div>
		<div>2. {l.description.body4}</div>

		<div class="opacity-60 mt-2">{l.description.disclaimer}</div>
	</div>

	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {uvPrinting !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.uvPrinting = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>

<div class="ml-44 mb-6 text-secondary text-sm">{l.disclaimer}</div>
