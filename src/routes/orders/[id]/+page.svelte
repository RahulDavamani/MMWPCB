<script lang="ts">
	import { order } from '../../../stores/order.store';
	import Layout from '../../components/layout/Layout.svelte';
	import OrderPage from '../../components/order/OrderPage.svelte';
</script>

<Layout pageTitle="Order #{$order.id}">
	<OrderPage />
</Layout>
