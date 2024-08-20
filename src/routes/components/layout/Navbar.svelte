<script lang="ts">
	import { page } from '$app/stores';
	import NavUser from './NavUser.svelte';
	import { lg } from '../../../stores/i18n.store';
	import I18N from './I18N.svelte';
	import Cart from './Cart.svelte';
	import VelenovaLogo from '$lib/assets/velenovaLogo.png';

	$: l = $lg.navbar;

	$: route = $page.url.pathname;
	$: navItems = [
		{ name: l.instantQuote, href: '/instant-quote' },
		{ name: l.products, href: '/products' },
		{ name: l.whyUs, href: '/why-us' },
		{ name: l.support, href: '/support' }
	];
</script>

<div id="navbar" class="navbar shadow-lg">
	<div class="container mx-auto flex justify-between items-center">
		<div class="flex items-end">
			<div>
				<a href="/" class="btn btn-link">
					<img src={VelenovaLogo} alt="Velenova" width="140" />
				</a>
			</div>
			{#each navItems as { name, href }}
				<div>
					<a
						{href}
						class="btn btn-link text-black text-base underline-offset-8 decoration-secondary decoration-2
                  {route === href && '!underline'}"
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
