<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import ProductsTable from './components/ProductsTable.svelte';
	import OrderSummary from './components/OrderSummary.svelte';
	import DeliveryAddress from './components/DeliveryAddress.svelte';
	import ShippingInfo from './components/ShippingInfo.svelte';
	import Icon from '@iconify/svelte';
	import OrderMessage from './components/OrderMessage.svelte';
	import RemoveOrder from './components/RemoveOrder.svelte';
	import PaymentModal from './components/PaymentModal.svelte';
	import { order } from '../../stores/order.store';
	import ReviewMessages from './components/ReviewMessages.svelte';
	import PaymentDetails from './components/PaymentDetails.svelte';
	import FabricationProgressModal from './components/FabricationProgressModal.svelte';
	import OrderStatus from './components/OrderStatus.svelte';
	import DeliveryProgressModal from './components/DeliveryProgressModal.svelte';

	$: l = $lg.order;
	$: ({ id, createdAt, status, showFabrication } = $order);
</script>

<Layout pageTitle={l.pageTitle}>
	<a href="/orders" class="btn btn-link px-0">
		<Icon icon="mdi:arrow-left" />
		All Orders
	</a>

	{#if status === 'CART'}
		<div class="text-xl font-bold">My Cart</div>
	{:else}
		<div class="flex justify-between items-center">
			<div>
				<div class="font-bold">
					<span class="text-xl">Order ID:</span>
					<span class="text-lg font-mono">{id.toUpperCase()}</span>
				</div>
				<div class="text-sm">{createdAt.toLocaleString()}</div>
			</div>
			<OrderStatus />
		</div>
	{/if}

	<div class="flex gap-8 mt-4">
		<div class="grow space-y-6">
			<div class="flex gap-10 h-64">
				<ShippingInfo />
				<DeliveryAddress />
			</div>
			<ProductsTable />
			<ReviewMessages />
		</div>

		<div class="space-y-8">
			<OrderMessage />
			<OrderSummary />
			<PaymentDetails />
		</div>
	</div>

	<RemoveOrder />
</Layout>

{#if status === 'APPROVED'}
	<PaymentModal />
{/if}

{#if showFabrication}
	<FabricationProgressModal />
{/if}

<DeliveryProgressModal />
