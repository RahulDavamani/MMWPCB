<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.vacuumCasting.productDescription;
	$: console.log($productDetails.vacuumCasting.productDescription);
	$: console.log($quote.products.vacuumCasting.productDescription);
</script>

<FormItem {pd}>
	<div slot="description">
		{@const { title1, body1, body2, title2, body3, body4, body5 } = pd.l.descriptionDetail}
		<div class="font-semibold">{title1}:</div>
		<div>{body1}</div>
		<div>{body2}</div>

		<div class="font-semibold mt-2">{title2}:</div>
		<div>{body3}</div>
		<div>{body4}</div>
		<div>{body5}</div>
	</div>

	<select class="select select-bordered select-sm" bind:value={$quote.products.vacuumCasting.productDescription}>
		{#each pd.values as { title, value }}
			<option {value}>{title}</option>
		{/each}
	</select>
</FormItem>
