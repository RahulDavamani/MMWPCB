<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.petType;
	$: ({ petType } = $quote.products.flexiblePcb);
</script>

{#if petType}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as { title, value }}
				<button
					class="btn btn-sm btn-primary {petType !== value && 'btn-outline'}"
					on:click={() => ($quote.products.flexiblePcb.petType = value)}
				>
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
