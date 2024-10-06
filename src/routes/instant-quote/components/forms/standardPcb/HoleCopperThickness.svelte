<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.holeCopperThickness;

	$: values = [20, 25, 30, 35, 50, 55, 70];
</script>

<FormItem {pd}>
	<select
		class="select select-bordered select-sm min-w-64"
		bind:value={$quote.products.standardPcb.holeCopperThickness}
	>
		<option value={0}>{$lg.common.none}</option>
		{#each values as value}
			<option {value}>{pd.parseValue(value)}</option>
		{/each}
	</select>
</FormItem>
