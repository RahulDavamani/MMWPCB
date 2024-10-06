<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.assembly.flexibleOptions;
	$: ({ flexibleOption } = $quote.products.assembly);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, description, value }}
			<button
				class="btn btn-primary {flexibleOption !== value && 'btn-outline'}"
				on:click={() => ($quote.products.assembly.flexibleOption = value)}
			>
				<div class="flex flex-col">
					<span>{title}</span>
					<span class="text-secondary text-xs">{description}</span>
				</div>
			</button>
		{/each}
	</div>
</FormItem>
