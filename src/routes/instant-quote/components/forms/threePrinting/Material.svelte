<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { ThreePrinting } from '../../../../../zod/products/threePrinting.schema';
	import FormItem from '../../FormItem.svelte';

	$: ({ material, materialType, process } = $quote.products.threePrinting);

	let materialTypeValues: ThreePrinting['materialType'][] = ['ALUMINUM'];
	let colorValues: ThreePrinting['color'][] = ['METALLIC'];
	let processValues: ThreePrinting['process'][] = ['SLM'];

	const selectMaterial = (value: ThreePrinting['material']) => {
		if ($quote.products.threePrinting.material !== value) {
			$quote.products.threePrinting.material = value;
			switch (value) {
				case 'ALUMINUM':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						materialType: 'ALUMINUM',
						color: 'METALLIC',
						process: 'SLM'
					};
					materialTypeValues = ['ALUMINUM'];
					colorValues = ['METALLIC'];
					processValues = ['SLM'];
					break;

				case 'STAINLESS_STEEL':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						materialType: 'STAINLESS_STEEL',
						color: 'METALLIC',
						process: 'SLM'
					};
					materialTypeValues = ['STAINLESS_STEEL'];
					colorValues = ['METALLIC'];
					processValues = ['SLM'];
					break;

				case 'NYLON':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						materialType: 'PA_12',
						color: 'WHITE',
						process: 'SLS'
					};
					materialTypeValues = ['PA_12', 'HP_PA_12', 'GLASS_FIBER_NYLON'];
					colorValues = ['WHITE', 'DARK_BLACK'];
					processValues = ['SLS'];
					break;

				case 'ABS':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						materialType: 'ABS',
						color: 'WHITE',
						process: 'FDM'
					};
					materialTypeValues = ['ABS', 'STRATASYS_ABS'];
					colorValues = ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					processValues = ['FDM'];
					break;

				case 'PETG':
					$quote.products.threePrinting = {
						...$quote.products.threePrinting,
						materialType: 'PETG',
						color: 'WHITE',
						process: 'FDM'
					};
					materialTypeValues = ['PETG'];
					colorValues = ['WHITE', 'BLACK', 'SILVER_GRAY', 'RED', 'BLUE', 'YELLOW', 'GREEN'];
					processValues = ['FDM'];
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

{#if $productDetails.threePrinting.materialType}
	{@const pd = $productDetails.threePrinting.materialType}
	{@const values = pd.values.filter(({ value }) => materialTypeValues.includes(value))}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each values as { title, value }}
				<button
					class="btn btn-sm btn-primary {materialType !== value && 'btn-outline'}"
					on:click={() => ($quote.products.threePrinting.materialType = value)}>{title}</button
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
					class="btn btn-sm btn-primary {color !== value && 'btn-outline'}"
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
