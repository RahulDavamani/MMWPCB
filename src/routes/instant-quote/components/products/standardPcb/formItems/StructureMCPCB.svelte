<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.structureOfMCPCB;
	$: ({ structureOfMCPCB } = $quote.standardPcb);

	$: values = [
		{ name: l.metalCoreMiddle, value: 'METAL_CORE_MIDDLE' },
		{ name: l.metalBaseBottom, value: 'METAL_BASE_BOTTOM' }
	] as { name: string; value: StandardPcb['structureOfMCPCB'] }[];
</script>

{#if structureOfMCPCB}
	<FormItem title={l.title} moreInfo={{ description: l.description }}>
		<div class="flex flex-wrap gap-4">
			{#each values as { name, value }}
				<button
					class="btn btn-sm btn-primary {structureOfMCPCB !== value && 'btn-outline'}"
					on:click={() => ($quote.standardPcb.structureOfMCPCB = value)}>{name}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
