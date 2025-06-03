<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { CNC } from '../../../../../zod/products/cnc.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material } = $quote.products.cnc);
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
	) as CNC['color'][];

	const selectMaterial = (value: CNC['material']) => {
		if ($quote.products.cnc.material !== value) {
			$quote.products.cnc.material = value;
			switch (value) {
				case 'ALUMINUM':
					$quote.products.cnc = {
						...$quote.products.cnc,
						color: 'SILVER_WHITE'
					};
					break;

				case 'STAINLESS_STEEL':
					$quote.products.cnc = {
						...$quote.products.cnc,
						color: 'SILVER'
					};
					break;

				case 'MILD_STEEL':
					$quote.products.cnc = {
						...$quote.products.cnc,
						color: 'SILVER_GRAY'
					};
					break;

				case 'COPPER':
					$quote.products.cnc = {
						...$quote.products.cnc,
						color: 'COPPER'
					};
					break;

				case 'CARBON_FIBER':
					$quote.products.cnc = {
						...$quote.products.cnc,
						color: 'BLACK'
					};
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

{#if $productDetails.cnc.color}
	{@const pd = $productDetails.cnc.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {$quote.products.cnc.color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.cnc.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
