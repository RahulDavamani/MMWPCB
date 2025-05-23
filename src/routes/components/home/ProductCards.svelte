<script lang="ts">
	import { goto } from '$app/navigation';
	import { lg } from '../../../stores/i18n.store';
	import { productTypes, type ProductType } from '../../../stores/product.store';
	import { quote } from '../../../stores/quote.store';

	$: l = $lg.home;

	const quoteNow = async (productType: string) => {
		await goto('/instant-quote');
		$quote.productType = productType as ProductType;
	};
</script>

<div class="text-xl font-bold mb-2">Products</div>

<div class="grid grid-cols-4 gap-8 mt-8">
	{#each Object.values($productTypes) as { key, title, img }}
		<button class="rounded-box shadow-lg grow p-4">
			<div class="h-20 flex justify-center">
				{#await import(`$lib/assets/products/${img}.jpg`) then { default: src }}
					<img {src} alt="icon" />
				{/await}
			</div>

			<div class="text-left text-sm">
				<div class="text-lg font-semibold my-2">{title}</div>

				<div>From <span class="text-primary font-bold">$15</span> / 5pcs</div>
				<div class="">Build Time: 24 hours</div>

				<ul class="list-disc ml-5 mt-2 text-gray-500">
					<li>1-2L - $2 for 100x100mm PCBs</li>
					<li>Supports PCB Assembly</li>
					<li>FR4, Aluminum, Copper, Rogers, PTFE</li>
				</ul>
			</div>

			<button class="btn btn-sm btn-primary w-full mt-4" on:click={() => quoteNow(key)}>{l.quoteNow}</button>
		</button>
	{/each}
</div>
