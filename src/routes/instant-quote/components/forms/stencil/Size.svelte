<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	let size: { length: number; width: number; vaLength: number; vaWidth: number };
	$: $quote.products.stencil.length = size?.length;
	$: $quote.products.stencil.width = size?.width;

	$: pd = $productDetails.stencil.length;
</script>

<FormItem pd={{ l: $lg.instantQuote.stencil.size }}>
	<select class="select select-bordered select-sm" bind:value={size}>
		{#each pd.values as value}
			<option {value}>{value.length} x {value.width}mm (Valid area {value.vaLength} x {value.vaWidth}mm)</option>
		{/each}
	</select>
</FormItem>
