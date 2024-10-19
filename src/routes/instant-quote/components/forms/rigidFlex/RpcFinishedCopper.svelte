<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.rpcFinishedCopper;
	$: ({ rpcFinishedCopper } = $quote.products.rigidFlex);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {rpcFinishedCopper !== value && 'btn-outline'}"
				on:click={() => ($quote.products.rigidFlex.rpcFinishedCopper = value)}
			>
				{pd.parseValue(value)}
			</button>
		{/each}
	</div>
</FormItem>
