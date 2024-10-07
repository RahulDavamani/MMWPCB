<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.thermalConductivity;
	$: ({ material, thermalConductivity } = $quote.products.standardPcb);
</script>

{#if thermalConductivity}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as value}
				{@const disabled = material === 'COPPER_BASE' && value < 2}
				<button
					class="btn btn-sm btn-primary {thermalConductivity !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
					on:click={() => ($quote.products.standardPcb.thermalConductivity = value)}>{pd.parseValue(value)}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
