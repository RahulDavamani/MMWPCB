<script lang="ts">
	import OrdersList from '../../components/OrdersList.svelte';
	import Layout from '../components/Layout.svelte';
</script>

<Layout pageTitle="Orders">
	<div class="mt-5">
		<OrdersList isPortal={true} />
	</div>
</Layout>
