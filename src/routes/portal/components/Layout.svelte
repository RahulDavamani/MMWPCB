<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Sidebar from './Sidebar.svelte';

	export let pageTitle: string = '';
	export let navbar = true;
	export let sidebar = true;
</script>

<svelte:head>
	<title>Portal {pageTitle ? `- ${pageTitle}` : ''}</title>
</svelte:head>

<div class="flex">
	{#if sidebar}
		<Sidebar />
	{/if}

	<div class="h-screen w-full flex flex-col px-3">
		{#if navbar}
			<Navbar {pageTitle} />
		{/if}

		<main class="flex-grow p-5 pb-20">
			<slot />
		</main>
	</div>
</div>
