<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { AdvancedPcb } from '../../../../../zod/products/advancedPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.advancedPcb.surfaceFinish;
	$: ({ surfaceFinish } = $quote.products.advancedPcb);
	$: values = pd.values.map(({ value }) => value);

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

		<button class="btn btn-sm btn-primary {values.includes(surfaceFinish) && 'btn-outline'}">
			<input
				type="text"
				class="input input-bordered input-xs w-14 text-black text-center"
				value={values.includes(surfaceFinish) ? '' : surfaceFinish}
				on:change={(e) => {
					if (e.currentTarget.value.length === 0) $quote.products.advancedPcb.surfaceFinish = 'IMMERSION_GOLD';
					else $quote.products.advancedPcb.surfaceFinish = e.currentTarget.value;
				}}
			/>
		</button>
	</div>
</FormItem>
