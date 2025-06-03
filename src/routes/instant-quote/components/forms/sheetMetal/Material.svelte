<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { SheetMetal } from '../../../../../zod/products/sheetMetal.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material } = $quote.products.sheetMetal);
	$: colorValues = (
		material === 'ALUMINUM'
			? ['SILVER_WHITE']
			: material === 'STAINLESS_STEEL'
				? ['SILVER']
				: material === 'MILD_STEEL'
					? ['SILVER_GRAY']
					: material === 'COPPER'
						? ['COPPER']
						: material === 'CARBON_FIBER'
							? ['BLACK']
							: []
	) as SheetMetal['color'][];

	const selectMaterial = (value: SheetMetal['material']) => {
		if ($quote.products.sheetMetal.material !== value) {
			$quote.products.sheetMetal.material = value;
			switch (value) {
				case 'ALUMINUM':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						color: 'SILVER_WHITE'
					};
					colorValues = ['SILVER_WHITE'];
					break;

				case 'STAINLESS_STEEL':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						color: 'SILVER'
					};
					colorValues = ['SILVER'];
					break;

				case 'MILD_STEEL':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						color: 'SILVER_GRAY'
					};
					colorValues = ['SILVER_GRAY'];
					break;

				case 'COPPER':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						color: 'COPPER'
					};
					colorValues = ['COPPER'];
					break;

				case 'CARBON_FIBER':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						color: 'BLACK'
					};
					colorValues = ['BLACK'];
					break;
			}
		}
	};
</script>

{#if $productDetails.sheetMetal.material}
	{@const pd = $productDetails.sheetMetal.material}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as { title, value }}
				<button
					class="btn btn-sm btn-primary {material !== value && 'btn-outline'}"
					on:click={() => selectMaterial(value)}>{title}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}

{#if $productDetails.sheetMetal.color}
	{@const pd = $productDetails.sheetMetal.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {$quote.products.sheetMetal.color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.sheetMetal.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
