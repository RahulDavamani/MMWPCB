<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { FlexiblePcb } from '../../../../../zod/products/flexiblePcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.surfaceFinish;
	$: ({ surfaceFinish } = $quote.products.flexiblePcb);

	const selectSurfaceFinish = (value: FlexiblePcb['surfaceFinish']) => {
		if (surfaceFinish !== value) {
			$quote.products.flexiblePcb.surfaceFinish = value;

			switch (value) {
				case 'IMMERSION_GOLD':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						surfaceThickness: [1]
					};
					break;

				case 'HARD_GOLD':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						surfaceThickness: [5, 120]
					};
					break;

				case 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						surfaceThickness: [1, 10, 120]
					};
					break;

				case 'ENEPIG':
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						surfaceThickness: [200, 2, 2]
					};
					break;

				default:
					$quote.products.flexiblePcb = {
						...$quote.products.flexiblePcb,
						surfaceThickness: []
					};
					break;
			}
		}
	};
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {surfaceFinish !== value && 'btn-outline'}"
				on:click={() => selectSurfaceFinish(value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
