<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.peelableSolderMask;
</script>

<FormItem {pd}>
	<select class="select select-bordered select-sm min-w-64" bind:value={$quote.products.advancedPcb.peelableSolderMask}>
		{#each pd.values as { title, value }}
			<option {value}>{title}</option>
		{/each}
	</select>
</FormItem>
