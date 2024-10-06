<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.assembly.quantity;
	$: isError = $quoteError.assembly.quantity;
</script>

<FormItem {pd} {isError}>
	<div class="join">
		<input
			type="number"
			class="input input-bordered input-sm {isError && 'input-error'} join-item"
			placeholder={$lg.common.typeHere}
			bind:value={$quote.products.assembly.quantity}
		/>
		<div class="btn btn-sm join-item pointer-events-none font-normal">{pd.l.pieces}</div>
	</div>
</FormItem>
