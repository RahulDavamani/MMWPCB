<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { AdvancedPcb } from '../../../../../zod/products/advancedPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.material;
	$: ({ material } = $quote.products.advancedPcb);
	$: values = pd.values.map(({ value }) => value);

	const selectMaterial = (value: AdvancedPcb['material']) => {
		if (material !== value) {
			$quote.products.advancedPcb.material = value;
			switch (value) {
				case 'HIGH_SPEED':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						highSpeed: '0',
						highFrequency: undefined
					};
					break;

				case 'HIGH_FREQUENCY':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						highSpeed: undefined,
						highFrequency: '0'
					};
					break;

				default:
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						highSpeed: undefined,
						highFrequency: undefined
					};
					break;
			}
		}
	};
</script>

<FormItem pd={{ ...pd, l: { ...pd.l, disclaimer: pd.values.find(({ value }) => value === material)?.l.disclaimer } }}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { l, value }}
			<button
				class="btn btn-sm btn-primary {material !== value && 'btn-outline'}"
				on:click={() => selectMaterial(value)}
			>
				{l.title}
			</button>
		{/each}
		<button class="btn btn-sm btn-primary {values.includes(material) && 'btn-outline'}">
			<input
				type="text"
				class="input input-bordered input-xs w-24 text-black text-center"
				value={values.includes(material) ? '' : material}
				on:change={(e) => {
					if (e.currentTarget.value.length === 0) $quote.products.advancedPcb.material = 'TG140_FR4';
					else $quote.products.advancedPcb.material = e.currentTarget.value;
				}}
			/>
		</button>
	</div>
</FormItem>
