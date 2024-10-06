<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.rogers;
	$: ({ rogers } = $quote.products.standardPcb);
</script>

{#if rogers}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as { title, value }}
				<button
					class="btn btn-sm btn-primary {rogers !== value && 'btn-outline'}"
					on:click={() => ($quote.products.standardPcb.rogers = value)}>{title}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
