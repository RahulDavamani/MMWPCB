<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import ProductsTable from './components/ProductsTable.svelte';
	import OrderSummary from './components/OrderSummary.svelte';
	import DeliveryAddress from './components/DeliveryAddress.svelte';
	import ShippingInfo from './components/ShippingInfo.svelte';
	$: l = $lg.order;
</script>

<Layout pageTitle={l.pageTitle}>
	<div class="text-xl font-bold">My Cart</div>

	<div class="flex gap-8 mt-4">
		<div class="grow space-y-6">
			<div class="flex gap-10 h-64">
				<ShippingInfo />
				<DeliveryAddress />
			</div>
			<ProductsTable />
		</div>
		<OrderSummary />
	</div>
</Layout>
