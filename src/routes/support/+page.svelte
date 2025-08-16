<script lang="ts">
	import { lg } from '../../stores/i18n.store';
	import Layout from '../components/layout/Layout.svelte';
	import Search from './components/Search.svelte';
	import MoreTopics from './components/MoreTopics.svelte';
	import FAQ from './components/FAQ.svelte';
	import QA from './components/QA.svelte';
	import QuickLinks from './components/QuickLinks.svelte';

	$: l = $lg.support;
</script>

<Layout pageTitle={l.title}>
	<div slot="top-main">
		<Search />
	</div>

	<QuickLinks />

	<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-10">
		<FAQ />
		<QA />
	</div>

	<MoreTopics />
</Layout>
