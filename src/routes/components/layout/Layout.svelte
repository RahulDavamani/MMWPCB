<script lang="ts">
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';

	export let pageTitle: string | undefined = undefined;
	export let navbar = true;
	export let footer = true;
</script>

<svelte:head>
	<title>MMWPCB {pageTitle ? `- ${pageTitle}` : ''}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
	{#if navbar}
		<Navbar />
	{/if}

	<main class="flex-grow container mx-auto p-5 pt-7 pb-10">
		<slot />
	</main>

	{#if footer}
		<Footer />
	{/if}
</div>
