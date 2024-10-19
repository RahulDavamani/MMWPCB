<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.holeCopperThickness;
</script>

<FormItem {pd}>
	<select
		class="select select-bordered select-sm min-w-64"
		bind:value={$quote.products.advancedPcb.holeCopperThickness}
	>
		<option value={0}>{$lg.common.none}</option>
		{#each pd.values as value}
			<option {value}>{pd.parseValue(value)}</option>
		{/each}
	</select>
</FormItem>
