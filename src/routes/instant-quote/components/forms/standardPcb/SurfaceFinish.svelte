<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.surfaceFinish;
	$: ({ material, surfaceFinish } = $quote.products.standardPcb);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			{@const disabled = (material === 'HDI' || material === 'COPPER_BASE') && value.includes('HASL')}
			<button
				class="btn btn-sm btn-primary {surfaceFinish !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
				on:click={() => ($quote.products.standardPcb.surfaceFinish = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
<div class="ml-44">
	<FormControl inputType="In" label={pd.l.acceptHASLChange} labelClasses="text-sm text-secondary">
		<input
			type="checkbox"
			class="checkbox checkbox-secondary checkbox-sm"
			bind:checked={$quote.products.standardPcb.acceptHASLChange}
		/>
	</FormControl>
</div>
