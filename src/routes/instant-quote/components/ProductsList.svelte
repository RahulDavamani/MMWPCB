<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import { quote, type Quote } from '../../../stores/quote.store';

	$: l = $lg.instantQuote.products;
	$: ({ product } = $quote);

	$: products = [
		{ name: l.standardPcb, value: 'standardPcb' },
		{ name: l.advancedPcb, value: 'advancedPcb' },
		{ name: l.flexiblePcb, value: 'flexiblePcb' },
		{ name: l.assembly, value: 'assembly' },
		{ name: l.stencil, value: 'stencil' }
	] as { name: string; value: Quote['product'] }[];
</script>

<div class="flex flex-wrap justify-around gap-8">
	{#each products as { name, value }}
		<button
			class="btn btn-primary flex-grow h-14 gap-4 text-base font-semibold shadow
         {product !== value && 'btn-outline'}"
			on:click={() => ($quote.product = value)}
		>
			{#await import(`$lib/assets/products/${value}Icon.png`) then { default: src }}
				<img {src} alt="icon" width={50} />
			{/await}
			{name}
		</button>
	{/each}
</div>
