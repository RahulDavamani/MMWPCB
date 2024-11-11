<script lang="ts">
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import Ui from './components/UI/UI.svelte';
	import { lg } from '../stores/i18n.store';
	import Loader from './components/UI/Loader.svelte';
	import '../app.css';
	import '../../node_modules/.pnpm/flatpickr@4.6.13/node_modules/flatpickr/dist/flatpickr.min.css';

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
