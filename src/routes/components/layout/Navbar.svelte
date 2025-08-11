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
	import { ui } from '../../../stores/ui.store';

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
			<a href="/" class="mr-2">
				<img src={MMWPCBLogo} alt="MMWPCB Logo" width="100" />
			</a>

			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<div class="dropdown md:hidden">
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<Icon icon="mdi:menu" width="24" />
				</label>
				<ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					{#each navItems as { title, href, menu }}
						<li><NavItem {title} {href} {menu} /></li>
					{/each}
				</ul>
			</div>

			<div class="hidden md:flex">
				{#each navItems as { title, href, menu }}
					<NavItem {title} {href} {menu} />
				{/each}
			</div>
		</div>

		<div class="flex items-center gap-4">
			<I18N />
			<SmallCart />
			<NavUser />
		</div>
	</div>
</div>
