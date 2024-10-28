<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { InjectionMolding } from '../../../../../zod/products/injectionMolding.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material, materialType } = $quote.products.injectionMolding);

	let materialTypeValues: InjectionMolding['materialType'][] = ['ABS'];
	let colorValues: InjectionMolding['color'][] = ['BLACK'];

	const selectMaterial = (value: InjectionMolding['material']) => {
		if ($quote.products.injectionMolding.material !== value) {
			$quote.products.injectionMolding.material = value;
			switch (value) {
				case 'ABS':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						materialType: 'ABS',
						color: 'BLACK'
					};
					materialTypeValues = ['ABS'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'POM':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						materialType: 'POM',
						color: 'BLACK'
					};
					materialTypeValues = ['POM'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'NYLON':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						materialType: 'NYLON',
						color: 'BLACK'
					};
					materialTypeValues = ['NYLON'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'PVC':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						materialType: 'PVC',
						color: 'BLACK'
					};
					materialTypeValues = ['PVC'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'TPU':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						materialType: 'TPU',
						color: 'BLACK'
					};
					materialTypeValues = ['TPU'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;
			}
		}
	};
</script>

{#if $productDetails.injectionMolding.material}
	{@const pd = $productDetails.injectionMolding.material}
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

{#if $productDetails.injectionMolding.materialType}
	{@const pd = $productDetails.injectionMolding.materialType}
	{@const values = pd.values.filter(({ value }) => materialTypeValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, value }}
				<button
					class="btn btn-sm btn-primary {materialType !== value && 'btn-outline'}"
					on:click={() => ($quote.products.injectionMolding.materialType = value)}>{title}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}

{#if $productDetails.injectionMolding.color}
	{@const pd = $productDetails.injectionMolding.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.injectionMolding.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
