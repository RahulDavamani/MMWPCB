<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { SheetMetal } from '../../../../../zod/products/sheetMetal.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material, materialType } = $quote.products.sheetMetal);

	let materialTypeValues: SheetMetal['materialType'][] = ['ALUMINUM_5052', 'ALUMINUM_6061'];
	let colorValues: SheetMetal['color'][] = ['SILVER_WHITE'];

	const selectMaterial = (value: SheetMetal['material']) => {
		if ($quote.products.sheetMetal.material !== value) {
			$quote.products.sheetMetal.material = value;
			switch (value) {
				case 'ALUMINUM':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						materialType: 'ALUMINUM_6061',
						color: 'SILVER_WHITE'
					};
					materialTypeValues = ['ALUMINUM_5052', 'ALUMINUM_6061'];
					colorValues = ['SILVER_WHITE'];
					break;

				case 'STAINLESS_STEEL':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						materialType: 'STAINLESS_STEEL_304',
						color: 'SILVER'
					};
					materialTypeValues = ['STAINLESS_STEEL_201', 'STAINLESS_STEEL_304', 'STAINLESS_STEEL_316'];
					colorValues = ['SILVER'];
					break;

				case 'MILD_STEEL':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						materialType: 'MILD_STEEL_1018',
						color: 'SILVER_GRAY'
					};
					materialTypeValues = ['MILD_STEEL_1018'];
					colorValues = ['SILVER_GRAY'];
					break;

				case 'COPPER':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						materialType: 'COPPER_101',
						color: 'COPPER'
					};
					materialTypeValues = ['COPPER_101', 'COPPER_260', 'COPPER_C110'];
					colorValues = ['COPPER'];
					break;

				case 'CARBON_FIBER':
					$quote.products.sheetMetal = {
						...$quote.products.sheetMetal,
						materialType: 'CARBON_FIBER_PLATE',
						color: 'BLACK'
					};
					materialTypeValues = ['CARBON_FIBER_PLATE'];
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

{#if $productDetails.sheetMetal.materialType}
	{@const pd = $productDetails.sheetMetal.materialType}
	{@const values = pd.values.filter(({ value }) => materialTypeValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, value }}
				<button
					class="btn btn-sm btn-primary {materialType !== value && 'btn-outline'}"
					on:click={() => ($quote.products.sheetMetal.materialType = value)}>{title}</button
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
					class="btn btn-sm btn-primary {color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.sheetMetal.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
