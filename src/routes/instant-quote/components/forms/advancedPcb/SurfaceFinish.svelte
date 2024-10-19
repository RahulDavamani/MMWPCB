<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { AdvancedPcb } from '../../../../../zod/products/advancedPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.surfaceFinish;
	$: ({ surfaceFinish } = $quote.products.advancedPcb);

	const selectSurfaceFinish = (value: AdvancedPcb['surfaceFinish']) => {
		if (surfaceFinish !== value) {
			$quote.products.advancedPcb.surfaceFinish = value;

			switch (value) {
				case 'IMMERSION_GOLD':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						surfaceThickness: [2]
					};
					break;

				case 'HARD_GOLD':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						surfaceThickness: [5, 120]
					};
					break;

				case 'HASL_LEAD_FREE_SELECTIVE_IMMERSION_GOLD':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						surfaceThickness: [2]
					};
					break;

				case 'HASL_LEAD_FREE_SELECTIVE_HARD_GOLD':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						surfaceThickness: [10, 120]
					};
					break;

				case 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						surfaceThickness: [2, 10, 120]
					};
					break;

				case 'ENEPIG':
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
						surfaceThickness: [200, 2, 2]
					};
					break;

				default:
					$quote.products.advancedPcb = {
						...$quote.products.advancedPcb,
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
