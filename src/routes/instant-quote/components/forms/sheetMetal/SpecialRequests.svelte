<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.sheetMetal.specialRequests;
</script>

<FormItem {pd}>
	<textarea
		class="textarea textarea-bordered w-full"
		rows="2"
		placeholder={pd.l.placeholder}
		bind:value={$quote.products.sheetMetal.specialRequests}
	/>
</FormItem>
