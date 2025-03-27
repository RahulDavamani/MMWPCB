<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormControl from '../../../../components/FormControl.svelte';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.surfaceFinish;
	$: ({ material, surfaceFinish } = $quote.products.standardPcb);
	$: values = pd.values.map(({ value }) => value);
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

		<button class="btn btn-sm btn-primary {values.includes(surfaceFinish) && 'btn-outline'}">
			<input
				type="text"
				class="input input-bordered input-xs w-14 text-black text-center"
				value={values.includes(surfaceFinish) ? '' : surfaceFinish}
				on:change={(e) => {
					if (e.currentTarget.value.length === 0) $quote.products.standardPcb.surfaceFinish = 'IMMERSION_GOLD';
					else $quote.products.standardPcb.surfaceFinish = e.currentTarget.value;
				}}
			/>
		</button>
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
