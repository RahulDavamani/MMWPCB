<script lang="ts">
	import { showModal } from '$lib/client/modal';
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import Layout from '../../components/layout/Layout.svelte';
	import RequestQuoteModel from './RequestQuoteModel.svelte';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';

	$: ({ user } = $page.data as PageData);

	export let section: { l: { title: string }; href: string };
	export let service: { l: { title: string; subtitle: string }; img: string; category: string };
	export let specs: { title: string; value: string }[];
</script>

<Layout pageTitle={service.l.title}>
	<div class="breadcrumbs mb-4">
		<ul>
			<li><a href="/services" class="text-primary">{$lg.common.home}</a></li>
			<li><a href="/services{section.href}" class="text-primary">{section.l.title}</a></li>
			<li>{service.l.title}</li>
		</ul>
	</div>

	<div class="flex gap-12">
		<img src={service.img} alt={service.l.title} class="w-2/5 object-contain" />
		<div class="w-3/5">
			<div class="font-semibold text-3xl mb-4">{service.l.title}</div>
			<div class="text-lg text-primary font-serif mb-4">{service.category}</div>
			<div class="font-light mb-4">{service.l.subtitle}</div>

			<div class="mb-8">
				<div class="font-semibold text-accent mb-2">Specifications:</div>
				<ul class="list-disc pl-6">
					{#each specs as { title, value }}
						<li>{title}: {value}</li>
					{/each}
				</ul>
			</div>

			{#if user}
				<button class="btn btn-secondary btn-wide" on:click={() => showModal('requestQuoteModal')}>
					{$lg.services.getQuote}
				</button>
			{:else}
				<a href="/login" class="btn btn-info btn-outline btn-wide">
					<Icon icon="mdi:login" width={22} />
					{$lg.services.loginToGetQuote}
				</a>
			{/if}
		</div>
	</div>
	<div class="divider" />

	<div class="font-semibold text-2xl text-center mb-4">{$lg.services.features}</div>
	<div class="space-y-4">
		<slot />
	</div>
</Layout>

<RequestQuoteModel service={service.l.title} />
