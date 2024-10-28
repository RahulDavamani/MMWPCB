<script lang="ts">
	import { productTypes } from '../../../stores/product.store';
	import { quote, type Quote } from '../../../stores/quote.store';

	$: ({ productType } = $quote);

	const selectProduct = (key: string) => ($quote.productType = key as Quote['productType']);
</script>

<div class="flex justify-around gap-8">
	{#each Object.values($productTypes).slice(0, 6) as { key, title, img }}
		<button
			class="btn btn-primary flex-grow min-h-14 h-fit gap-2 px-1 text-base font-semibold shadow
         {productType !== key && 'btn-outline'}"
			on:click={() => selectProduct(key)}
		>
			{#await import(`$lib/assets/products/${img}.png`) then { default: src }}
				<img {src} alt="icon" width={45} />
			{/await}
			{title}
		</button>
	{/each}
</div>

<div class="flex justify-around gap-8 mt-8">
	{#each Object.values($productTypes).slice(6) as { key, title, img }}
		<button
			class="btn btn-primary flex-grow min-h-14 h-fit gap-2 px-1 text-base font-semibold shadow
         {productType !== key && 'btn-outline'}"
			on:click={() => selectProduct(key)}
		>
			{#await import(`$lib/assets/products/${img}.png`) then { default: src }}
				<img {src} alt="icon" width={45} />
			{/await}
			{title}
		</button>
	{/each}
</div>
