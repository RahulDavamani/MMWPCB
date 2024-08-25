<script lang="ts">
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '../app.css';
	import Ui from './components/UI/UI.svelte';
	import { lg } from '../stores/i18n.store';
	import Loader from './components/UI/Loader.svelte';

	NProgress.configure({ minimum: 0.16 });
	$: if ($navigating) NProgress.start();
	else NProgress.done();
</script>

<Ui />
{#if !$lg}
	<Loader title="Initializing" />
{:else}
	<slot />
{/if}
