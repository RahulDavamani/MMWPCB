<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import ProductsList from './components/ProductsList.svelte';
	import PricingCard from './components/PricingCard.svelte';
	import ShippingCard from './components/ShippingCard.svelte';
	import { lg } from '../../stores/i18n.store';
	import ProductForm from './components/ProductForm.svelte';
	import { quote } from '../../stores/quote.store';
	import { onMount } from 'svelte';

	onMount(quote.init);
</script>

<Layout pageTitle={$lg.instantQuote.pageTitle}>
	<ProductsList />
	<div class="flex gap-10 mt-6">
		<ProductForm />
		<div class="space-y-6 sticky top-4 max-h-screen">
			<PricingCard />
			<ShippingCard />
		</div>
	</div>
</Layout>
