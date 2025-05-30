<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.rigidFlex.minTrack;
	$: ({ minTrack } = $quote.products.rigidFlex);
</script>

<FormItem {pd}>
	<div class="flex flex-wrap gap-4">
		{#each pd.values as value}
			<button
				class="btn btn-sm btn-primary {minTrack !== value && 'btn-outline'}"
				on:click={() => ($quote.products.rigidFlex.minTrack = value)}
			>
				{pd.parseValue(value)}
			</button>
		{/each}
		<button class="btn btn-sm 'btn-primary' {pd.values.includes(minTrack) && 'btn-outline'}">
			<input
				type="number"
				class="input input-bordered input-xs w-14 text-black text-center"
				value={pd.values.includes(minTrack) ? '' : minTrack}
				on:change={(e) => {
					let val = Number(e.currentTarget.value) < 0 ? 0 : Number(e.currentTarget.value);
					e.currentTarget.value = String(val);
					$quote.products.rigidFlex.minTrack = val;
				}}
				min={0}
			/>
		</button>
	</div>
</FormItem>
