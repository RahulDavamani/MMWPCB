<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	let open = localStorage.getItem('sidebarOpen') === 'true';

	let menu = [
		{
			title: 'Dashboard',
			icon: 'mdi:view-dashboard',
			href: '/portal/dashboard'
		},
		{
			title: 'Users',
			icon: 'mdi:person-multiple',
			href: '/portal/users'
		},
		{
			title: 'Orders',
			icon: 'mdi:package-variant-closed',
			href: '/portal/orders'
		},
		{
			title: 'Service Requests',
			icon: 'mdi:clipboard-text',
			href: '/portal/service-requests'
		},
		{
			title: 'Discounts',
			icon: 'mdi:discount',
			href: '/portal/discounts'
		},
		{
			title: 'Email Notifications',
			icon: 'mdi:email',
			href: '/portal/email-notifications'
		}
	];
	$: ({ pathname } = $page.url);
</script>

<div class="z-40 lg:block duration-300 {open ? 'min-w-60 w-60' : 'w-20'}">
	<div
		class="fixed flex flex-col justify-between p-3 bg-primary bg-opacity-60 rounded-r-box shadow-2xl min-h-screen
      {open ? 'w-60 px-4' : 'w-20'} duration-300"
	>
		<div>
			<div
				class="flex justify-center items-center shadow rounded-box bg-primary bg-opacity-60 text-xl font-bold font-serif text-white mb-4 h-14"
			>
				<a href="/">
					{#if open}
						MMWPCB
					{:else}
						<Icon icon="mdi:home" width={22} />
					{/if}
				</a>
			</div>

			<ul class="menu bg-primary bg-opacity-60 text-primary-content rounded-box shadow mb-4 gap-1">
				{#each menu as { title, icon, href }}
					{#if open}
						<li class=" {pathname.includes(href) && 'rounded-lg border-l-8 border-primary text-white'}">
							<a {href} class="font-semibold text-base">
								{#if open}
									<Icon {icon} width={22} />
									{title}
								{/if}
							</a>
						</li>
					{:else}
						<li>
							<a
								{href}
								class={pathname.includes(href) ? 'rounded-lg border-l-4 border-primary text-white px-1.5' : ' px-2'}
							>
								<Icon {icon} width={22} />
							</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>

		<div class="flex {open ? 'justify-between' : 'justify-center'} gap-2">
			{#if open}
				<a href="/" class="btn btn-primary grow">
					<Icon icon="mdi:application-outline" width={20} />
					Go to Web App
				</a>
			{/if}
			<button
				class="btn btn-square btn-ghost"
				on:click={() => {
					open = !open;
					localStorage.setItem('sidebarOpen', open.toString());
				}}
			>
				<Icon icon={open ? 'mdi:arrow-expand-left' : 'mdi:arrow-expand-right'} class="text-primary" width={22} />
			</button>
		</div>
	</div>
</div>
