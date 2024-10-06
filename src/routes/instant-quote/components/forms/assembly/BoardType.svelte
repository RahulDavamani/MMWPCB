<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.assembly.boardType;
	$: ({ boardType } = $quote.products.assembly);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {boardType !== value && 'btn-outline'}"
				on:click={() => ($quote.products.assembly.boardType = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
