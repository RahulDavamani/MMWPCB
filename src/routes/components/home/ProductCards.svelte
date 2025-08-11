<script lang="ts">
	import { goto } from '$app/navigation';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';
	import { productTypes, type ProductType } from '../../../stores/product.store';
	import { quote } from '../../../stores/quote.store';

	$: l = $lg.home;

	const quoteNow = async (productType: string) => {
		await goto('/instant-quote');
		$quote.productType = productType as ProductType;
	};
</script>

<div class="text-xl font-bold mb-2">{l.products}</div>

<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
	{#each Object.values($productTypes) as { key, l: { title, description }, img, from, buildTime }}
		<button class="rounded-box shadow-lg grow p-4">
			<div class="h-20 flex justify-center">
				{#await import(`$lib/assets/products/${img}.jpg`) then { default: src }}
					<img {src} alt="icon" />
				{/await}
			</div>

			<div class="text-left text-sm">
				<div class="text-lg font-semibold my-2">{title}</div>

				<div>
					{l.cards.from} <span class="text-primary font-bold">{parsePrice($i18n.currency, from.price)}</span> / {from.quantity}
					{l.cards.pcs}
				</div>
				<div class="">{l.cards.buildTime}: {buildTime} {l.cards.hours}</div>

				<ul class="list-disc ml-5 mt-2 text-gray-500">
					{#each Object.values(description) as d}
						<li>{d}</li>
					{/each}
				</ul>
			</div>

			<button class="btn btn-sm btn-primary w-full mt-4" on:click={() => quoteNow(key)}>{l.quoteNow}</button>
		</button>
	{/each}
</div>
