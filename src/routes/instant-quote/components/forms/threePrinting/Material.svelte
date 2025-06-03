<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { ThreePrinting } from '../../../../../zod/products/threePrinting.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material, process } = $quote.products.threePrinting);

	$: colorValues = (
		material === 'ALUMINUM'
			? ['METALLIC']
			: material === 'STAINLESS_STEEL'
				? ['METALLIC']
				: material === 'NYLON'
					? ['WHITE', 'DARK_BLACK']
					: material === 'ABS' || material === 'PETG'
						? ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN']
						: []
	) as ThreePrinting['color'][];

	$: processValues = (
		material === 'ALUMINUM' || material === 'STAINLESS_STEEL'
			? ['SLM']
			: material === 'NYLON'
				? ['SLS']
				: material === 'ABS' || material === 'PETG'
					? ['FDM']
					: []
	) as ThreePrinting['process'][];

	const selectMaterial = (value: ThreePrinting['material']) => {
		if ($quote.products.threePrinting.material !== value) {
			$quote.products.threePrinting.material = value;
			switch (value) {
				case 'ALUMINUM':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						color: 'METALLIC',
						process: 'SLM'
					};
					break;

				case 'STAINLESS_STEEL':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						color: 'METALLIC',
						process: 'SLM'
					};
					break;

				case 'NYLON':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						color: 'WHITE',
						process: 'SLS'
					};
					break;

				case 'ABS':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						color: 'WHITE',
						process: 'FDM'
					};
					break;

				case 'PETG':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						color: 'WHITE',
						process: 'FDM'
					};
					break;
			}
		}
	};
</script>

{#if $productDetails.threePrinting.material}
	{@const pd = $productDetails.threePrinting.material}
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

{#if $productDetails.threePrinting.color}
	{@const pd = $productDetails.threePrinting.color}
	{@const values = pd.values.filter(({ value }) => colorValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, color, value }}
				<button
					class="btn btn-sm btn-primary {$quote.products.threePrinting.color !== value && 'btn-outline'}"
					on:click={() => ($quote.products.threePrinting.color = value)}
				>
					<div class="{color} w-3 h-3 border rounded" />
					{title}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}

{#if $productDetails.threePrinting.process}
	{@const pd = $productDetails.threePrinting.process}
	{@const values = pd.values.filter((value) => processValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as value}
				<button
					class="btn btn-sm btn-primary {process !== value && 'btn-outline'}"
					on:click={() => ($quote.products.threePrinting.process = value)}
				>
					{value}
				</button>
			{/each}
		</div>
	</FormItem>
{/if}
