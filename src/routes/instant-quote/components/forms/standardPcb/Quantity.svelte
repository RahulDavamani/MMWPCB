<script lang="ts">
	import FormItem from '../../FormItem.svelte';
	import { lg } from '../../../../../stores/i18n.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import { productDetails } from '../../../../../stores/product.store';

	$: pd = $productDetails.standardPcb.quantity;
	$: isError = $quoteError.standardPcb.quantity;
</script>

<FormItem {pd} {isError}>
	<div class="join">
		<input
			type="number"
			class="input input-bordered input-sm {isError && 'input-error'} w-24 join-item"
			placeholder={$lg.common.typeHere}
			bind:value={$quote.products.standardPcb.quantity}
		/>
		<div class="btn btn-sm join-item pointer-events-none font-normal">{pd.l.pieces}</div>
	</div>
</FormItem>
