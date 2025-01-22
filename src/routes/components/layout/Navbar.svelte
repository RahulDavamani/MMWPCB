<script lang="ts">
	import { page } from '$app/stores';
	import NavUser from './NavUser.svelte';
	import { lg } from '../../../stores/i18n.store';
	import I18N from './I18N.svelte';
	import SmallCart from './SmallCart.svelte';
	import ProductsMenu from './ProductsMenu.svelte';
	import SupportMenu from './navbar/SupportMenu.svelte';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../../$types';

	$: l = $lg.navbar;

	$: route = $page.url.pathname;
	$: navItems = [
		{ name: l.instantQuote, href: '/instant-quote' },
		{ name: l.products, href: '/products' },
		{ name: l.whyUs, href: '/why-us' },
		{ name: l.support, href: '/support' }
	];
	$: ({ user } = $page.data as PageData);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="navbar" class="navbar shadow-lg">
	<div class="container mx-auto flex justify-between items-center">
		<div class="flex items-center">
			<!-- <div>
				<a href="/" class="btn btn-link">
					<img src={VelenovaLogo} alt="Velenova" width="140" />
				</a>
			</div> -->
			<a href="/" class="text-xl font-bold font-serif text-primary">MMWPCB</a>
			<!-- {#each navItems as { name, href }}
				<div>
					<a
						{href}
						class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
                  {route.startsWith(href) && '!underline'}"
					>
						{name}
					</a>
				</div>
			{/each} -->
			<div>
				<a
					href="/instant-quote"
					class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
                  {route.startsWith('/instant-quote') && '!underline'}"
				>
					{l.instantQuote}
				</a>
			</div>

			<div class="dropdown dropdown-hover">
				<a
					tabindex="0"
					href="/pc/printed-circuit-boards/pcb-capabilities"
					class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
               {route.startsWith('/pc') && '!underline'}"
				>
					{l.products}
				</a>
				<ul tabindex="0" class="dropdown-content z-[1]">
					<ProductsMenu />
				</ul>
			</div>
			<div>
				<a
					href="/why-us"
					class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
                  {route.startsWith('/why-us') && '!underline'}"
				>
					{l.whyUs}
				</a>
			</div>
			<div class="dropdown dropdown-hover">
				<a
					href="/support"
					class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
                  {route.startsWith('/support') && '!underline'}"
				>
					{l.support}
				</a>
				<ul tabindex="0" class="dropdown-content z-[1]">
					<SupportMenu />
				</ul>
			</div>
		</div>
		<div class="flex items-center gap-6">
			{#if user?.role === 'ADMIN'}
				<a href="/portal/dashboard" class="btn btn-sm btn-outline btn-info">
					<Icon icon="mdi:person" width="18" />
					Admin Portal
				</a>
			{/if}

			<I18N />

			<SmallCart />

			<NavUser />
		</div>
	</div>
</div>
