<script lang="ts">
	import CapabilitiesBanner from '$lib/assets/capabilities-banner.png';
	import { lg } from '../../../stores/i18n.store';
	import { services } from '../../../stores/services.store';
	import Layout from '../../components/layout/Layout.svelte';

	$: l = $lg.services.catalog;
</script>

<Layout pageTitle={l.title}>
	<div slot="top-main">
		<div style="background-color: #17191e;">
			<div class="container mx-auto flex justify-start items-center">
				<div class="absolute text-accent">
					<div class="font-semibold text-2xl mb-1">{l.title}</div>
					<div class="w-96 mb-4">{l.subTitle}</div>
				</div>

				<img src={CapabilitiesBanner} alt="Banner" />
			</div>
		</div>
	</div>

	<div class="grid grid-cols-4 gap-10">
		<div>
			<a href="/services{$services.oscilloscopes.href}" class="btn btn-link btn-lg text-xl p-0">
				{$services.oscilloscopes.title}
			</a>
			{#each Object.values($services.oscilloscopes.services) as { title, href }}
				<a href="/services{$services.oscilloscopes.href}{href}" class="btn btn-link p-0 text-left text-black">
					{title}
				</a>
			{/each}
		</div>

		<div>
			<a href="/services{$services.networkAnalyzers.href}" class="btn btn-link btn-lg text-xl p-0">
				{$services.networkAnalyzers.title}
			</a>
			{#each Object.values($services.networkAnalyzers.services) as { title, href }}
				<a href="/services{$services.networkAnalyzers.href}{href}" class="btn btn-link p-0 text-left text-black">
					{title}
				</a>
			{/each}
		</div>
	</div>
</Layout>
