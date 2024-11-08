<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../../$types';
	import { lg } from '../../../stores/i18n.store';

	export let isPortal = false;

	$: l = $lg.navbar.user;
	$: ({ user, session } = $page.data as PageData);

	$: menuItems = [
		isPortal
			? {
					name: 'Go to Web App',
					icon: 'mdi:application-outline',
					href: '/'
				}
			: {
					name: l.orders,
					icon: 'mdi:clipboard-text-outline',
					href: '/orders'
				},
		{
			name: l.profile,
			icon: 'mdi:account-outline',
			href: '/profile'
		},
		{
			name: l.settings,
			icon: 'mdi:settings-outline',
			href: '/settings'
		},
		{
			name: l.logout,
			icon: 'mdi:logout',
			href: '/logout'
		}
	];
</script>

{#if user}
	{@const { firstName, lastName, email } = user}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="dropdown dropdown-end">
		<div tabindex={0}>
			{#if session?.profilePic}
				<div class="btn btn-ghost btn-circle avatar p-1">
					<img src={session.profilePic} alt="DP" class="rounded-full" />
				</div>
			{:else}
				<div class="avatar placeholder btn btn-ghost btn-circle">
					<div class="bg-accent text-neutral-content w-10 rounded-full">
						<span class="font-semibold text-lg">{firstName.charAt(0)}{lastName.charAt(0)}</span>
					</div>
				</div>
			{/if}
		</div>
		<div tabindex={0} class="dropdown-content mt-4 z-[50] bg-base-100 border shadow rounded-box w-64">
			<div class="p-5 pb-2 text-sm">
				<div class="font-semibold">{firstName} {lastName}</div>
				<div class="italic">{email}</div>
			</div>
			<div class="divider px-4 m-0" />
			<ul class="menu">
				{#each menuItems as { name, icon, href }}
					<li>
						<a {href} class="gap-3">
							<Icon {icon} width={20} />
							{name}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{:else}
	<a href="/login" class="btn btn-primary btn-link">
		<Icon icon="mdi:login" width={20} />
		{$lg.navbar.login}
	</a>
{/if}
