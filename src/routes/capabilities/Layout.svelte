<script lang="ts">
	import { page } from '$app/stores';
	import { capabilities } from '../../stores/capabilities.store';
	import Layout from '../components/layout/Layout.svelte';
	import Icon from '@iconify/svelte';
	import CapabilitiesBanner from '$lib/assets/capabilities-banner.png';

	export let section: keyof typeof $capabilities;
	export let title: string;
	export let description: string | null = null;
	export let button: { title: string; onClick: () => void } | null = null;

	$: ({ title: sectionTitle, subsections } = $capabilities[section]);
</script>

<Layout pageTitle={title}>
	<div slot="top-main">
		<div style="background-color: #17191e;">
			<div class="container mx-auto flex justify-start items-center">
				<div class="absolute text-accent">
					<div class="font-semibold text-2xl mb-1">{title}</div>
					{#if description}
						<div class="mb-2">{description}</div>
					{/if}
					{#if button}
						<button class="btn btn-sm btn-outline btn-accent" on:click={button.onClick}>{button.title}</button>
					{/if}
				</div>

				<img src={CapabilitiesBanner} alt="{title} Banner" />
			</div>
		</div>
	</div>

	<div class="flex flex-col md:flex-row gap-10">
		<div class="join join-vertical rounded-none w-full md:w-[24rem]">
			<button class="btn join-item justify-between flex-nowrap text-left">
				{sectionTitle}
				<Icon icon="mdi:menu" width={24} />
			</button>
			{#each Object.values(subsections) as { title, href }}
				<a
					href="/capabilities{href}"
					class="btn join-item justify-between flex-nowrap text-left
               {$page.url.pathname.endsWith(href) && 'btn-primary'}"
				>
					{title}
					<Icon icon="mdi:chevron-right" width={24} />
				</a>
			{/each}
		</div>

		<slot />
	</div>
</Layout>
