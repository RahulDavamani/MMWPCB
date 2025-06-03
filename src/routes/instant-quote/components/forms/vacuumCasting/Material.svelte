<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { VacuumCasting } from '../../../../../zod/products/vacuumCasting.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material } = $quote.products.vacuumCasting);
	$: colorValues = (
		material === 'ABS'
			? ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
			: material === 'POM'
				? ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
				: material === 'NYLON'
					? ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
					: material === 'PVC'
						? ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
						: material === 'TPU'
							? ['BLACK', 'WHITE', 'GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
							: []
	) as VacuumCasting['color'][];

	const selectMaterial = (value: VacuumCasting['material']) => {
		if ($quote.products.vacuumCasting.material !== value) {
			$quote.products.vacuumCasting.material = value;
			switch (value) {
				case 'ABS':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						color: 'BLACK'
					};
					break;

				case 'POM':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						color: 'BLACK'
					};
					break;

				case 'NYLON':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						color: 'BLACK'
					};
					break;

				case 'PVC':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						color: 'BLACK'
					};
					break;

				case 'TPU':
					$quote.products.vacuumCasting = {
						...$quote.products.vacuumCasting,
						color: 'BLACK'
					};
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

{#if $productDetails.vacuumCasting.color}
	{@const pd = $productDetails.vacuumCasting.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {$quote.products.vacuumCasting.color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.vacuumCasting.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
