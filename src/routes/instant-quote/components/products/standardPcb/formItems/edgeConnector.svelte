<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.edgeConnector;
	$: ({ edgeConnector } = $quote.standardPcb);

	$: values = [
		{ name: $lg.common.yes, value: true },
		{ name: $lg.common.no, value: false }
	] as { name: string; value: StandardPcb['edgeConnector'] }[];
</script>

<FormItem title={l.title} moreInfo={{}}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {edgeConnector !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.edgeConnector = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
