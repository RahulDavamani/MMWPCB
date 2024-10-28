<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.threePrinting.name;
	$: isError = $quoteError.threePrinting.name;
</script>

<FormItem {pd} {isError}>
	<input
		type="text"
		class="input input-bordered input-sm {isError && 'input-error'}"
		placeholder={$lg.common.typeHere}
		bind:value={$quote.products.threePrinting.name}
	/>
</FormItem>
