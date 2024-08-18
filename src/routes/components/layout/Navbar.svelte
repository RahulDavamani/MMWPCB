<script lang="ts">
	import { page } from '$app/stores';
	import NavUser from './NavUser.svelte';
	import { lg } from '../../../stores/i18n.store';
	import I18N from './I18N.svelte';
	import Cart from './Cart.svelte';

	$: l = $lg.navbar;

	$: route = $page.url.pathname;
	$: navItems = [
		{ name: l.instantQuote, href: '/instant-quote' },
		{ name: l.products, href: '/products' },
		{ name: l.whyUs, href: '/why-us' },
		{ name: l.support, href: '/support' }
	];
</script>

<div id="navbar" class="navbar bg-primary shadow-xl">
	<div class="container mx-auto flex justify-between items-center">
		<div class="flex items-baseline">
			<div>
				<a href="/" class="btn btn-link text-white text-2xl no-underline hover:no-underline">Velenova</a>
			</div>
			{#each navItems as { name, href }}
				<div>
					<a
						{href}
						class="btn btn-link text-white text-base underline-offset-8 decoration-secondary decoration-2
                   {route !== href ? 'no-underline hover:no-underline' : ''}"
					>
						{name}
					</a>
				</div>
			{/each}
		</div>
		<div class="flex items-center gap-6">
			<I18N />

			<Cart />

			<NavUser />
		</div>
	</div>
</div>
