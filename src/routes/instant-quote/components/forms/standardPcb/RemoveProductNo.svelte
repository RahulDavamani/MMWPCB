<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.removeProductNo;
	$: ({ removeProductNo } = $quote.standardPcb);

	$: values = [
		{ name: l.options.no, value: 'NO' },
		{ name: l.options.yes, value: 'YES' },
		{ name: l.options.specifyLocation, value: 'SPECIFY_LOCATION' }
	] as { name: string; value: StandardPcb['removeProductNo'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {removeProductNo !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.removeProductNo = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
