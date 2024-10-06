<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.uvPrinting;
	$: ({ uvPrinting } = $quote.products.standardPcb);
</script>

<FormItem {pd}>
	<div slot="description">
		{@const { title1, body1, body2, title2, body3, body4, disclaimer } = pd.l.descriptionDetail}
		<div class="font-semibold">{title1}:</div>
		<div>1. {body1}</div>
		<div>2. {body2}</div>

		<div class="font-semibold mt-2">{title2}:</div>
		<div>1. {body3}</div>
		<div>2. {body4}</div>

		<div class="opacity-60 mt-2">{disclaimer}</div>
	</div>

	<div class="flex flex-wrap gap-4">
		{#each pd.values as { title, value }}
			<button
				class="btn btn-sm btn-primary {uvPrinting !== value && 'btn-outline'}"
				on:click={() => ($quote.products.standardPcb.uvPrinting = value)}>{title}</button
			>
		{/each}
	</div>
</FormItem>
