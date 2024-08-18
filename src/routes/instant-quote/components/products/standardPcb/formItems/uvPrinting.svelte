<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, disclaimer, options } = $lg.instantQuote.standardPcb.uvPrinting);
	$: ({ uvPrinting } = $quote.standardPcb);

	$: values = [
		{ name: options.singleSidedTop, value: 'SINGLE_SIDED_TOP' },
		{ name: options.singleSidedBottom, value: 'SINGLE_SIDED_BOTTOM' },
		{ name: options.doubleSided, value: 'DOUBLE_SIDED' },
		{ name: $lg.common.none, value: 'NONE' }
	] as { name: string; value: StandardPcb['uvPrinting'] }[];
</script>

<FormItem {title} moreInfo={{ url: '' }} {disclaimer}>
	<div slot="description">
		{@const { title1, body1, body2, title2, body3, body4, disclaimer } = description}
		<div class="font-semibold">{title1}:</div>
		<div>1. {body1}</div>
		<div>2. {body2}</div>

		<div class="font-semibold mt-2">{title2}:</div>
		<div>1. {body3}</div>
		<div>2. {body4}</div>

		<div class="opacity-60 mt-2">{disclaimer}</div>
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
