<script lang="ts">
	import { page } from '$app/stores';
	import CapabilitiesMenu from './CapabilitiesMenu.svelte';
	import ServicesMenu from './ServicesMenu.svelte';
	import SupportMenu from './SupportMenu.svelte';

	export let title: string;
	export let href: string;
	export let menu: string | null = null;
	$: selected = $page.url.pathname.startsWith(href);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class={menu && 'dropdown dropdown-hover'}>
	<a
		tabindex="0"
		{href}
		class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
      {selected && '!underline'}"
	>
		{title}
	</a>

	{#if menu}
		<ul tabindex="0" class="dropdown-content z-[1]">
			{#if menu === 'services'}
				<ServicesMenu />
			{:else if menu === 'capabilities'}
				<CapabilitiesMenu />
			{:else}
				<SupportMenu />
			{/if}
		</ul>
	{/if}
</div>
