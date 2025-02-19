<script lang="ts">
	import Layout from '../components/layout/Layout.svelte';
	import { lg } from '../../stores/i18n.store';
	import SRList from '../components/serviceRequests/SRList.svelte';
	import { page } from '$app/stores';

	$: l = $lg.serviceRequests;
</script>

<Layout pageTitle={l.title}>
	<div class="text-2xl font-bold mb-4">{l.title}</div>
	<SRList userId={$page.data.user.id} />
</Layout>
