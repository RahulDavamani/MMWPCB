<script lang="ts">
	import SRList from '../../components/serviceRequests/SRList.svelte';
	import Layout from '../components/Layout.svelte';
</script>

<Layout pageTitle="Service Requests">
	<div class="mt-5">
		<SRList isPortal={true} />
	</div>
</Layout>
