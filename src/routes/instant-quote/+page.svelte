<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import ProductsList from './components/ProductsList.svelte';
	import PricingCard from './components/PricingCard.svelte';
	import ShippingCard from './components/ShippingCard.svelte';
	import { lg } from '../../stores/i18n.store';
	import ProductForm from './components/ProductForm.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import { quote } from '../../stores/quote.store';
	import { onMount } from 'svelte';

	$: ({ products } = $page.data as PageData);

	onMount(() => {
		if (!products) quote.reset();
		else {
			const { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils } = products;
			quote.update((state) => ({
				...state,
				productType: standardPcbs.length
					? 'standardPcb'
					: advancedPcbs.length
						? 'advancedPcb'
						: flexiblePcbs.length
							? 'flexiblePcb'
							: assemblies.length
								? 'assembly'
								: stencils.length
									? 'stencil'
									: $quote.productType,
				standardPcb: standardPcbs[0] ?? $quote.standardPcb,
				advancedPcb: advancedPcbs[0] ?? $quote.advancedPcb,
				flexiblePcb: flexiblePcbs[0] ?? $quote.flexiblePcb,
				assembly: assemblies[0] ?? $quote.assembly,
				stencil: stencils[0] ?? $quote.stencil
			}));
		}
	});
</script>

<Layout pageTitle={$lg.instantQuote.pageTitle}>
	{#if !products}
		<ProductsList />
	{/if}
	<div class="flex gap-10 mt-6">
		<ProductForm />
		<div class="space-y-6 sticky top-4 max-h-screen">
			<PricingCard />
			{#if !products}
				<ShippingCard />
			{/if}
		</div>
	</div>
</Layout>
