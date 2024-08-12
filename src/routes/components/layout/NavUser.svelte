<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../../$types';
	import { l } from '../../../stores/i18n.store';

	$: ({ user, session } = $page.data as PageData);
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
				<li>
					<a href="/orders" class="gap-3">
						<Icon icon="mdi:clipboard-text-outline" width={20} />
						{$l.navbar.user.orders}
					</a>
				</li>
				<li>
					<a href="/profile" class="gap-3">
						<Icon icon="mdi:account-outline" width={20} />
						{$l.navbar.user.profile}
					</a>
				</li>
				<li>
					<a href="/settings" class="gap-3">
						<Icon icon="mdi:settings-outline" width={20} />
						{$l.navbar.user.settings}
					</a>
				</li>
				<li>
					<a href="/logout" class="gap-3">
						<Icon icon="mdi:logout" width={20} />
						{$l.navbar.user.logout}
					</a>
				</li>
			</ul>
		</div>
	</div>
{:else}
	<a href="/login" class="btn btn-primary">
		<Icon icon="mdi:login" width={20} />
		{$l.navbar.login}
	</a>
{/if}
