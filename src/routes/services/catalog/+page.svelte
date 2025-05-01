<script lang="ts">
	import CapabilitiesBanner from '$lib/assets/capabilities-banner.png';
	import { lg } from '../../../stores/i18n.store';
	import { services } from '../../../stores/service.store';
	import Layout from '../../components/layout/Layout.svelte';

	$: l = $lg.services.catalog;
</script>

<Layout pageTitle={l.title}>
	<div slot="top-main">
		<div style="background-color: #17191e;">
			<div class="container mx-auto flex justify-start items-center">
				<div class="absolute text-accent">
					<div class="font-semibold text-2xl mb-1">{l.title}</div>
					<div class="w-96 mb-4">{l.subtitle}</div>
				</div>

				<img src={CapabilitiesBanner} alt="Banner" />
			</div>
		</div>
	</div>

	<div class="grid grid-cols-4 gap-10">
		{#each Object.values($services) as { code, l: { title }, services }}
			<div class="flex flex-col items-start">
				<a href="/services/{code}" class="btn btn-link btn-lg text-xl p-0">
					{title}
				</a>
				{#each Object.values(services) as { code: c, l: { title } }}
					<a href="/services/{code}/{c}" class="btn btn-link p-0 text-left text-black">
						{title}
					</a>
				{/each}
			</div>
		{/each}
	</div>
</Layout>
