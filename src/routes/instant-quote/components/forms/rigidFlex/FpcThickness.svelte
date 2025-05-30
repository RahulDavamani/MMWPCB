<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.fpcThickness;
	$: ({ fpcThickness } = $quote.products.rigidFlex);
	$: isError = $quoteError.rigidFlex.fpcThickness;
</script>

<FormItem {pd} {isError}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {fpcThickness !== value && 'btn-outline'}"
				on:click={() => ($quote.products.rigidFlex.fpcThickness = value)}
			>
				{value}
			</button>
		{/each}
		<button
			class="btn btn-sm {isError ? 'btn-error' : 'btn-primary'} {pd.values.includes(fpcThickness) && 'btn-outline'}"
		>
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center {isError && 'input-error'}"
				value={pd.values.includes(fpcThickness) ? '' : fpcThickness}
				on:change={(e) => {
					let val = Number(e.currentTarget.value) < 0 ? 0 : Number(e.currentTarget.value);
					e.currentTarget.value = String(val);
					$quote.products.rigidFlex.fpcThickness = val;
				}}
				min={0}
			/>
		</button>
	</div>
</FormItem>
