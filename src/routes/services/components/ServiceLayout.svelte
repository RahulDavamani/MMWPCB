<script lang="ts">
	import { showModal } from '$lib/client/modal';
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import Layout from '../../components/layout/Layout.svelte';
	import RequestQuoteModel from './RequestQuoteModel.svelte';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';

	$: ({ user } = $page.data as PageData);

	export let section: { code: string; l: { title: string } };
	export let service: { code: string; l: { title: string; subtitle?: string }; images: string[]; category: string };
	export let specs: { title: string; value: string }[];
</script>

<Layout pageTitle={service.l.title}>
	<div class="breadcrumbs mb-4">
		<ul>
			<li><a href="/services" class="text-primary">{$lg.common.home}</a></li>
			<li><a href="/services/{section.code}" class="text-primary">{section.l.title}</a></li>
			<li>{service.l.title}</li>
		</ul>
	</div>

	<div class="flex gap-12">
		<div class="w-2/5">
			<div class="carousel flex">
				{#each service.images as image, i}
					<div id="image{i}" class="carousel-item w-full justify-center">
						<img src={image} alt={service.l.title} class="object-contain h-96" />
					</div>
				{/each}
			</div>
			<div class="flex justify-center gap-2 py-2">
				{#each service.images as _, i}
					<a href="#image{i}" class="btn btn-xs">{i + 1}</a>
				{/each}
			</div>
		</div>
		<div class="w-3/5">
			<div class="font-semibold text-3xl mb-4">{service.l.title}</div>
			<div class="text-lg text-primary font-serif mb-4">{service.category}</div>
			{#if service.l.subtitle}
				<div class="font-light mb-4">{service.l.subtitle}</div>
			{/if}

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
	<slot />
</Layout>

<RequestQuoteModel serviceCode={service.code} />
