<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { FlexiblePcb } from '../../../../../zod/products/flexiblePcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.material;
	$: ({ material } = $quote.products.flexiblePcb);
	$: values = pd.values.map(({ value }) => value);

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
		<button class="btn btn-sm btn-primary {values.includes(material) && 'btn-outline'}">
			<input
				type="text"
				class="input input-bordered input-xs w-24 text-black text-center"
				value={values.includes(material) ? '' : material}
				on:change={(e) => {
					if (e.currentTarget.value.length === 0) $quote.products.flexiblePcb.material = 'POLYIMIDE_FLEX';
					else $quote.products.flexiblePcb.material = e.currentTarget.value;
				}}
			/>
		</button>
	</div>
</FormItem>
