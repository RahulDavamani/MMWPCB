<script lang="ts">
	import { lg } from '../stores/i18n.store';
	import Layout from './components/layout/Layout.svelte';
</script>

<Layout pageTitle={$lg.home.pageTitle}></Layout>
