<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.otherParameters;
	let collapseOpen = false;

	$: pd = $productDetails.assembly.solderPads;
	$: isError = $quoteError.assembly.solderPads;
</script>

<div class="collapse collapse-arrow mt-6 {collapseOpen && 'overflow-visible'}">
	<input type="checkbox" class="peer" bind:checked={collapseOpen} />
	<div class="collapse-title bg-base-200 rounded-box font-semibold">{l.title}</div>
	<div class="collapse-content">
		<div class="mt-4 text-sm text-secondary">{l.description}</div>
		<FormItem {pd} {isError}>
			<input
				type="number"
				class="input input-bordered input-sm {isError && 'input-error'}"
				placeholder={$lg.common.typeHere}
				bind:value={$quote.products.assembly.solderPads}
			/>
		</FormItem>
	</div>
</div>
