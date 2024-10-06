<script lang="ts">
	import { productTypes } from '../../../stores/product.store';
	import { quote, type Quote } from '../../../stores/quote.store';

	$: ({ productType } = $quote);

	const selectProduct = (key: string) => ($quote.productType = key as Quote['productType']);
</script>

<div class="flex flex-wrap justify-around gap-8">
	{#each Object.values($productTypes) as { key, title, img }}
		<button
			class="btn btn-primary flex-grow h-14 gap-4 text-base font-semibold shadow
         {productType !== key && 'btn-outline'}"
			on:click={() => selectProduct(key)}
		>
			{#await import(`$lib/assets/products/${img}.png`) then { default: src }}
				<img {src} alt="icon" width={50} />
			{/await}
			{title}
		</button>
	{/each}
</div>
