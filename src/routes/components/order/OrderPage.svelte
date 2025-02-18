<script lang="ts">
	import Icon from '@iconify/svelte';
	import { order, orderProductPrices } from '../../../stores/order.store';
	import OrderStatus from './OrderStatus.svelte';
	import ShippingInfo from './ShippingInfo.svelte';
	import DeliveryAddress from './DeliveryAddress.svelte';
	import OrderSummary from './OrderSummary.svelte';
	import OrderActions from './OrderActions.svelte';
	import PaymentDetails from './PaymentDetails.svelte';
	import ProductsTable from './ProductsTable.svelte';
	import ReviewMessages from './ReviewMessages.svelte';
	import RemoveOrder from './RemoveOrder.svelte';
	import { onMount } from 'svelte';
	import OrderPaymentModal from './OrderPaymentModal.svelte';
	import DeliveryProgressModal from './DeliveryProgressModal.svelte';

	$: ({ isPortal, id, createdAt, status, products } = $order);
	onMount(() => products.forEach(({ id, finalPrice }) => finalPrice && ($orderProductPrices[id] = finalPrice)));
</script>

<a href={isPortal ? '/portal/orders' : '/orders'} class="btn btn-link px-0">
	<Icon icon="mdi:arrow-left" />
	All Orders
</a>

{#if status === 'CART'}
	<div class="text-xl font-bold">My Cart</div>
{:else}
	<div class="flex justify-between items-center">
		<div>
			<div class="font-semibold">
				<span>Order No :</span>
				<span class="text-lg text-primary font-mono ml-1">#{id}</span>
			</div>
			<div class="text-sm">{createdAt.toLocaleString()}</div>
		</div>
		<OrderStatus />
	</div>
{/if}

<div class="flex gap-8 mt-4">
	<div class="grow space-y-8">
		<div class="flex gap-10 h-64">
			<ShippingInfo />
			<DeliveryAddress />
		</div>
		<ProductsTable />
		<ReviewMessages />
	</div>

	<div class="min-w-96 w-96 space-y-8">
		<OrderActions />
		<OrderSummary />
		<PaymentDetails />
	</div>
</div>

<RemoveOrder />
<OrderPaymentModal />
<DeliveryProgressModal />
