<script lang="ts">
	import { page } from '$app/stores';
	import NavUser from './NavUser.svelte';
	import { lg } from '../../../stores/i18n.store';
	import I18N from './I18N.svelte';
	import SmallCart from './SmallCart.svelte';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../../$types';
	import NavItem from './navbar/NavItem.svelte';
	import MMWPCBLogo from '$lib/assets/mmwpcb-logo.png';

	$: l = $lg.navbar;
	$: ({ user } = $page.data as PageData);

	$: navItems = [
		{ title: l.instantQuote, href: '/instant-quote' },
		{ title: l.services, href: '/services', menu: 'services' },
		{ title: l.capabilities, href: '/capabilities', menu: 'capabilities' },
		{ title: l.whyUs, href: '/why-us' },
		{ title: l.support, href: '/support', menu: 'support' }
	];
</script>

<div id="navbar" class="navbar shadow-lg">
	<div class="container mx-auto flex justify-between items-center">
		<div class="flex items-center">
			<!-- <a href="/" class="text-xl font-bold font-serif text-primary">MMWPCB</a> -->
			<a href="/" class=" mr-2">
				<img src={MMWPCBLogo} alt="" width="100" />
			</a>

			{#each navItems as { title, href, menu }}
				<NavItem {title} {href} {menu} />
			{/each}
		</div>

		<div class="flex items-center gap-6">
			{#if user?.role === 'ADMIN'}
				<a href="/portal/dashboard" class="btn btn-sm btn-link underline-offset-4">
					<Icon icon="mdi:person" width="18" />
					{l.adminPortal}
				</a>
			{/if}

			<I18N />
			<SmallCart />
			<NavUser />
		</div>
	</div>
</div>
