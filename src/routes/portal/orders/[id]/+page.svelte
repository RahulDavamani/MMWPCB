<script lang="ts">
	import Layout from '../../components/Layout.svelte';
	import OrderPage from '../../../components/order/OrderPage.svelte';
	import { order } from '../../../../stores/order.store';
</script>

<Layout pageTitle="Order #{$order.id}">
	<OrderPage />
</Layout>
