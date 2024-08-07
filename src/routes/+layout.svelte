<script>
	import Footer from './components/layout/Footer.svelte';
	import Navbar from './components/layout/Navbar.svelte';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '../app.css';
	import Ui from './components/UI/UI.svelte';

	NProgress.configure({ minimum: 0.16 });
	$: if ($navigating) NProgress.start();
	else NProgress.done();
</script>

<div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="flex-grow container mx-auto p-5">
		<slot />
	</main>
	<Footer />
</div>

<Ui />
