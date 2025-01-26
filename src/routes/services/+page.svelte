<script lang="ts">
	import { lg } from '../../stores/i18n.store';
	import Layout from '../components/layout/Layout.svelte';
	import CapabilitiesBanner from '$lib/assets/capabilities-banner.png';
	import { services } from '../../stores/service.store';
	import Probing from '$lib/assets/services/probing.png';
	import Icon from '@iconify/svelte';

	$: l = $lg.services;
</script>

<Layout pageTitle={l.title}>
	<div slot="top-main">
		<div style="background-color: #17191e;">
			<div class="container mx-auto flex justify-start items-center">
				<div class="absolute text-accent">
					<div class="font-semibold text-2xl mb-1">{l.title}</div>
					<div class="w-96 mb-4">{l.subTitle}</div>
					<a href="/services/catalog" class="btn btn-sm btn-outline btn-accent">{l.browseCatalog}</a>
				</div>

				<img src={CapabilitiesBanner} alt="Banner" />
			</div>
		</div>
	</div>

	<div class="text-lg mb-10">
		<div class="mb-6">{l.description}</div>

		<div class="flex items-center gap-10">
			<div>
				<div class="text-2xl font-semibold mb-4">{l.subHeading1}</div>
				<div>{l.para1}</div>

				<div class="text-2xl font-semibold mt-4 mb-4">{l.subHeading2}</div>
				<div>{l.para2}</div>
			</div>
			<img src={Probing} alt="Higher Quality" class="w-1/3" />
		</div>
	</div>

	<div class="font-bold text-3xl text-primary text-center">{l.explorePS}</div>
	<div class="flex flex-wrap gap-10 my-10">
		{#each Object.values($services) as { title, subTitle, href, img }}
			<div
				class="card bg-base-100 image-full cursor-default w-96 shadow-xl hover:shadow-2xl hover:outline hover:outline-accent"
			>
				<figure>
					<img src={img} alt="Shoes" />
				</figure>

				<div class="card-body py-6">
					<div class="flex flex-col justify-between items-center h-full text-center">
						<h2 class="text-2xl font-bold">{title}</h2>
						<div class="text-sm mb-4">{subTitle}</div>
						<a href="/services{href}" class="btn btn-accent btn-sm">{l.browseSolutions}</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex justify-center mb-10">
		<a href="/services/catalog" class="btn btn-outline btn-secondary">
			{l.viewAllPS}
			<Icon icon="mdi:arrow-right" width={20} />
		</a>
	</div>
</Layout>
