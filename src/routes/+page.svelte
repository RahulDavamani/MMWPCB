<script lang="ts">
	import { lg } from '../stores/i18n.store';
	import Carousel from './components/home/Carousel.svelte';
	import InstantQuote from './components/home/InstantQuote.svelte';
	import PlaceOrder from './components/home/PlaceOrder.svelte';
	import ProductCards from './components/home/ProductCards.svelte';
	import ServiceCards from './components/home/ServiceCards.svelte';
	import Layout from './components/layout/Layout.svelte';
</script>

<Layout pageTitle={$lg.home.pageTitle}>
	<div slot="top-main">
		<Carousel />
	</div>

	<div class="space-y-12">
		<InstantQuote />
		<PlaceOrder />
		<ProductCards />
		<ServiceCards />
	</div>
</Layout>
