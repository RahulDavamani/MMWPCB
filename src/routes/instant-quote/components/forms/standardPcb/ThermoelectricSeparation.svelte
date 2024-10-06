<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.thermoElectricSeparation;
	$: ({ thermoElectricSeparation } = $quote.products.standardPcb);
</script>

{#if thermoElectricSeparation !== undefined && thermoElectricSeparation !== null}
	<FormItem {pd}>
		<input
			type="checkbox"
			class="checkbox checkbox-sm checkbox-primary"
			bind:checked={$quote.products.standardPcb.thermoElectricSeparation}
		/>
	</FormItem>
{/if}
