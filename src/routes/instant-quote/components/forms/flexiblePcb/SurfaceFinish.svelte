<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { FlexiblePcb } from '../../../../../zod/products/flexiblePcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.surfaceFinish;
	$: ({ surfaceFinish } = $quote.products.flexiblePcb);
	$: values = pd.values.map(({ value }) => value);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {surfaceFinish !== value && 'btn-outline'}"
				on:click={() => ($quote.products.flexiblePcb.surfaceFinish = value)}>{title}</button
			>
		{/each}
		<button class="btn btn-sm btn-primary {values.includes(surfaceFinish) && 'btn-outline'}">
			<input
				type="text"
				class="input input-bordered input-xs w-24 text-black text-center"
				value={values.includes(surfaceFinish) ? '' : surfaceFinish}
				on:change={(e) => {
					if (e.currentTarget.value.length === 0) $quote.products.flexiblePcb.surfaceFinish = 'IMMERSION_GOLD';
					else $quote.products.flexiblePcb.surfaceFinish = e.currentTarget.value;
				}}
			/>
		</button>
	</div>
</FormItem>
