<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import ProductsTable from './components/ProductsTable.svelte';
	import OrderSummary from './components/OrderSummary.svelte';
	import DeliveryAddress from './components/DeliveryAddress.svelte';
	import ShippingInfo from './components/ShippingInfo.svelte';
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';
	import OrderMessage from './components/OrderMessage.svelte';
	import RemoveOrder from './components/RemoveOrder.svelte';

	$: l = $lg.order;
	$: ({
		order: { id, createdAt, status }
	} = $page.data as PageData);
</script>

<Layout pageTitle={l.pageTitle}>
	<a href="/orders" class="btn btn-link px-0">
		<Icon icon="mdi:arrow-left" />
		All Orders
	</a>
	{#if status === 'CART'}
		<div class="text-xl font-bold">My Cart</div>
	{:else}
		<div>
			<div class="font-bold">
				<span class="text-xl">Order ID:</span>
				<span class="text-lg font-mono">{id.toUpperCase()}</span>
			</div>
			<div class="text-sm">{createdAt.toLocaleString()}</div>
		</div>
	{/if}

	<div class="flex gap-8 mt-4">
		<div class="grow space-y-6">
			<div class="flex gap-10 h-64">
				<ShippingInfo />
				<DeliveryAddress />
			</div>
			<ProductsTable />
		</div>
		<div class="space-y-8">
			<OrderSummary />
			<OrderMessage />
		</div>
	</div>

	<RemoveOrder />
</Layout>
