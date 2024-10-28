<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.injectionMolding.toolRequirements;
</script>

<FormItem {pd}>
	<textarea
		class="textarea textarea-bordered w-full"
		rows="2"
		placeholder={$lg.common.typeHere}
		bind:value={$quote.products.injectionMolding.toolRequirements}
	/>
</FormItem>
