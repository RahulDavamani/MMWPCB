<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { CNC } from '../../../../../zod/products/cnc.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material, materialType } = $quote.products.cnc);

	let materialTypeValues: CNC['materialType'][] = ['ALUMINUM_5052', 'ALUMINUM_6061', 'ALUMINUM_7075', 'ALUMINUM_2A12'];
	let colorValues: CNC['color'][] = ['SILVER_WHITE'];

	const selectMaterial = (value: CNC['material']) => {
		if ($quote.products.cnc.material !== value) {
			$quote.products.cnc.material = value;
			switch (value) {
				case 'ALUMINUM':
					$quote.products.cnc = {
						...$quote.products.cnc,
						materialType: 'ALUMINUM_6061',
						color: 'SILVER_WHITE'
					};
					materialTypeValues = ['ALUMINUM_5052', 'ALUMINUM_6061', 'ALUMINUM_7075', 'ALUMINUM_2A12'];
					colorValues = ['SILVER_WHITE'];
					break;

				case 'STAINLESS_STEEL':
					$quote.products.cnc = {
						...$quote.products.cnc,
						materialType: 'STAINLESS_STEEL_304',
						color: 'SILVER'
					};
					materialTypeValues = ['STAINLESS_STEEL_304', 'STAINLESS_STEEL_316', 'STAINLESS_STEEL_430'];
					colorValues = ['SILVER'];
					break;

				case 'MILD_STEEL':
					$quote.products.cnc = {
						...$quote.products.cnc,
						materialType: 'MILD_STEEL_1018',
						color: 'SILVER_GRAY'
					};
					materialTypeValues = ['MILD_STEEL_1018', 'MILD_STEEL_1045', 'MILD_STEEL_A36'];
					colorValues = ['SILVER_GRAY'];
					break;

				case 'COPPER':
					$quote.products.cnc = {
						...$quote.products.cnc,
						materialType: 'COPPER',
						color: 'COPPER'
					};
					materialTypeValues = ['COPPER'];
					colorValues = ['COPPER'];
					break;

				case 'CARBON_FIBER':
					$quote.products.cnc = {
						...$quote.products.cnc,
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

{#if $productDetails.cnc.material}
	{@const pd = $productDetails.cnc.material}
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

{#if $productDetails.cnc.materialType}
	{@const pd = $productDetails.cnc.materialType}
	{@const values = pd.values.filter(({ value }) => materialTypeValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, value }}
				<button
					class="btn btn-sm btn-primary {materialType !== value && 'btn-outline'}"
					on:click={() => ($quote.products.cnc.materialType = value)}>{title}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}

{#if $productDetails.cnc.color}
	{@const pd = $productDetails.cnc.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.cnc.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
