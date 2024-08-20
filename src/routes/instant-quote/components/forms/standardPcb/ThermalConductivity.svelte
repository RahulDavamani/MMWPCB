<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.thermalConductivity;
	$: ({ material, thermalConductivity } = $quote.standardPcb);

	$: values = [
		{ name: '1.0 W/(m-K)', value: 1.0 },
		{ name: '1.5 W/(m-K)', value: 1.5 },
		{ name: '2.0 W/(m-K)', value: 2.0 },
		{ name: '3.0 W/(m-K)', value: 3.0 }
	] as { name: string; value: NonNullable<StandardPcb['thermalConductivity']> }[];
</script>

{#if thermalConductivity}
	<FormItem {l}>
		<div class="flex flex-wrap gap-4">
			{#each values as { name, value }}
				{@const disabled = material === 'COPPER_BASE' && value < 2}
				<button
					class="btn btn-sm btn-primary {thermalConductivity !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
					on:click={() => ($quote.standardPcb.thermalConductivity = value)}>{name}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
