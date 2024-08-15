<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { quote } from '../../stores/quote.store';
	import ProductsList from './components/ProductsList.svelte';
	import PricingCard from './components/PricingCard.svelte';
	import StandardPcbForm from './components/products/standardPcb/StandardPcbForm.svelte';
	import AdvancedPcbForm from './components/products/AdvancedPcbForm.svelte';
	import StencilForm from './components/products/StencilForm.svelte';
	import AssemblyForm from './components/products/AssemblyForm.svelte';
	import FlexiblePcbForm from './components/products/FlexiblePcbForm.svelte';

	$: ({ product } = $quote);
</script>

<Layout pageTitle="Home">
	<ProductsList />
	<div class="flex gap-10 mt-6">
		{#if product === 'standardPcb'}
			<StandardPcbForm />
		{:else if product === 'advancedPcb'}
			<AdvancedPcbForm />
		{:else if product === 'flexiblePcb'}
			<FlexiblePcbForm />
		{:else if product === 'assembly'}
			<AssemblyForm />
		{:else}
			<StencilForm />
		{/if}
		<PricingCard />
	</div>
</Layout>
