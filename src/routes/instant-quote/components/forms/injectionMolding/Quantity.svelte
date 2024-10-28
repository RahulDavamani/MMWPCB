<script lang="ts">
	import Icon from '@iconify/svelte';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.injectionMolding.quantity;
	$: isError = $quoteError.injectionMolding.quantity;
</script>

<FormItem {pd} {isError}>
	<input
		type="number"
		class="input input-bordered input-sm {isError && 'input-error'} w-20"
		bind:value={$quote.products.injectionMolding.quantity}
	/>
</FormItem>
