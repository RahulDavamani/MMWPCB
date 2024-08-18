<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, options } = $lg.instantQuote.standardPcb.structureOfMCPCB);
	$: ({ structureOfMCPCB } = $quote.standardPcb);

	$: values = [
		{ name: options.metalCoreMiddle, value: 'METAL_CORE_MIDDLE' },
		{ name: options.metalBaseBottom, value: 'METAL_BASE_BOTTOM' }
	] as { name: string; value: StandardPcb['structureOfMCPCB'] }[];
</script>

{#if structureOfMCPCB}
	<FormItem {title} moreInfo={{ description }}>
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
