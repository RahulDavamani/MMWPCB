<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { VacuumCasting } from '../../../../../zod/products/vacuumCasting.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material, materialType } = $quote.products.vacuumCasting);

	let materialTypeValues: VacuumCasting['materialType'][] = ['ABS'];
	let colorValues: VacuumCasting['color'][] = ['BLACK'];

	const selectMaterial = (value: VacuumCasting['material']) => {
		if ($quote.products.vacuumCasting.material !== value) {
			$quote.products.vacuumCasting.material = value;
			switch (value) {
				case 'ABS':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						materialType: 'ABS',
						color: 'BLACK'
					};
					materialTypeValues = ['ABS'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'POM':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						materialType: 'POM',
						color: 'BLACK'
					};
					materialTypeValues = ['POM'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'NYLON':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						materialType: 'NYLON',
						color: 'BLACK'
					};
					materialTypeValues = ['NYLON'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'PVC':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						materialType: 'PVC',
						color: 'BLACK'
					};
					materialTypeValues = ['PVC'];
					colorValues = ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					break;

				case 'TPU':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
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

{#if $productDetails.vacuumCasting.material}
	{@const pd = $productDetails.vacuumCasting.material}
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

{#if $productDetails.vacuumCasting.materialType}
	{@const pd = $productDetails.vacuumCasting.materialType}
	{@const values = pd.values.filter(({ value }) => materialTypeValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, value }}
				<button
					class="btn btn-sm btn-primary {materialType !== value && 'btn-outline'}"
					on:click={() => ($quote.products.vacuumCasting.materialType = value)}>{title}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}

{#if $productDetails.vacuumCasting.color}
	{@const pd = $productDetails.vacuumCasting.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.vacuumCasting.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
