<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { RigidFlex } from '../../../../../zod/products/rigidFlex.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.surfaceFinish;
	$: ({ surfaceFinish } = $quote.products.rigidFlex);

	const selectSurfaceFinish = (value: RigidFlex['surfaceFinish']) => {
		if (surfaceFinish !== value) {
			$quote.products.rigidFlex.surfaceFinish = value;

			switch (value) {
				case 'IMMERSION_GOLD':
					$quote.products.rigidFlex = {
						...$quote.products.rigidFlex,
						surfaceThickness: [1]
					};
					break;

				default:
					$quote.products.rigidFlex = {
						...$quote.products.rigidFlex,
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
