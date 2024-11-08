<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import OrdersList from '../components/OrdersList.svelte';
	import { page } from '$app/stores';

	$: l = $lg.orders;
</script>

<Layout pageTitle={l.pageTitle}>
	<div class="text-2xl font-bold mb-4">{l.pageTitle}</div>
	<OrdersList userId={$page.data.user.id} />
</Layout>
