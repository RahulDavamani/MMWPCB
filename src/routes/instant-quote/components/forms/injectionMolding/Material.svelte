<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { InjectionMolding } from '../../../../../zod/products/injectionMolding.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material } = $quote.products.injectionMolding);

	$: colorValues = (
		material === 'ABS'
			? ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
			: material === 'POM'
				? ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
				: material === 'NYLON'
					? ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
					: material === 'PVC'
						? ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
						: material === 'TPU'
							? ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
							: []
	) as InjectionMolding['color'][];

	const selectMaterial = (value: InjectionMolding['material']) => {
		if ($quote.products.injectionMolding.material !== value) {
			$quote.products.injectionMolding.material = value;
			switch (value) {
				case 'ABS':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						color: 'BLACK'
					};
					break;

				case 'POM':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						color: 'BLACK'
					};
					break;

				case 'NYLON':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						color: 'BLACK'
					};
					break;

				case 'PVC':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						color: 'BLACK'
					};
					break;

				case 'TPU':
					$quote.products.injectionMolding = {
						...$quote.products.injectionMolding,
						color: 'BLACK'
					};
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

{#if $productDetails.injectionMolding.color}
	{@const pd = $productDetails.injectionMolding.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {$quote.products.injectionMolding.color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.injectionMolding.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
