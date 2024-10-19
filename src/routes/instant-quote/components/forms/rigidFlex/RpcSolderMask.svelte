<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.rpcSolderMaskColor;
	$: ({ rpcSolderMaskColor } = $quote.products.rigidFlex);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, color, value }}
			<button
				class="btn btn-sm btn-primary {rpcSolderMaskColor !== value && 'btn-outline'}"
				on:click={() => ($quote.products.rigidFlex.rpcSolderMaskColor = value)}
			>
				<div class="{color} w-3 h-3 border rounded" />
				{title}
			</button>
		{/each}
	</div>
</FormItem>
