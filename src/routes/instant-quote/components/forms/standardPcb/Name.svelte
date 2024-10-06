<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.name;
	$: isError = $quoteError.standardPcb.name;
</script>

<FormItem {pd} {isError}>
	<input
		type="text"
		class="input input-bordered input-sm {isError && 'input-error'}"
		placeholder={$lg.common.typeHere}
		bind:value={$quote.products.standardPcb.name}
	/>
</FormItem>
