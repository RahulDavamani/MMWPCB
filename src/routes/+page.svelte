<script lang="ts">
	import { lg } from '../stores/i18n.store';
	import Layout from './components/layout/Layout.svelte';
</script>

<Layout pageTitle={$lg.home.pageTitle}>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</Layout>
