<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Assembly } from '../../../../../zod/products/assembly.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.boardType;
	$: ({ boardType } = $quote.assembly);

	$: values = [
		{ name: l.options.singlePieces, value: 'SINGLE_PIECES' },
		{ name: l.options.panelizedPcbs, value: 'PANELIZED_PCBS' }
	] as { name: string; value: Assembly['boardType'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {boardType !== value && 'btn-outline'}"
				on:click={() => ($quote.assembly.boardType = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
