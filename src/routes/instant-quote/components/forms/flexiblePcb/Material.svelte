<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { FlexiblePcb } from '../../../../../zod/products/flexiblePcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.material;
	$: ({ material } = $quote.products.flexiblePcb);

	const selectMaterial = (value: FlexiblePcb['material']) => {
		if (material !== value)
			$quote.products.flexiblePcb = {
				...$quote.products.flexiblePcb,
				material: value,
				petType: value === 'PET' ? 'TRANSPARENT' : undefined
			};
	};
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {material !== value && 'btn-outline'}"
				on:click={() => selectMaterial(value)}
			>
				{title}
			</button>
		{/each}
	</div>
</FormItem>
