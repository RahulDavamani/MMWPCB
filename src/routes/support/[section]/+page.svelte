<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { support, type Section } from '../../../stores/support.store';
	import Layout from '../../components/layout/Layout.svelte';
	import SupportSections from '../components/SupportSections.svelte';
	import { generateSpData } from '../utils/generateSpData';

	$: section = $page.params.section.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	// @ts-ignore
	$: ({ subsections } = $support.sections[section] as Section);
	$: ({ title, href } = generateSpData(section));
</script>

<Layout pageTitle={title}>
	<div class="flex mt-4">
		<SupportSections />
		<div class="divider divider-horizontal" />
		<div>
			<div class="breadcrumbs text-sm mb-2">
				<ul>
					<li><a href="/support">Support</a></li>
					<li><a {href}>{title}</a></li>
				</ul>
			</div>

			<div class="text-lg font-bold border-b-2 border-primary w-fit mb-6 px-0.5">
				{title}
			</div>

			<div class="grid grid-cols-3 gap-4">
				{#each Object.entries(subsections) as [subsection, { questions }]}
					{@const { title, href } = generateSpData(section, subsection)}
					<div class="max-w-96 px-3 py-2 border shadow rounded-box">
						<div class="divider">
							<a {href} class="btn btn-link text-base p-0">{title}</a>
						</div>
						<ul class="list-disc pl-6 text-sm space-y-1">
							{#each questions.slice(0, 3) as { }, i}
								{@const { title, href } = generateSpData(section, subsection, i)}
								<li><a {href} class="hover:underline">{title}</a></li>
							{/each}
							<li>
								<a {href} class="btn btn-link btn-sm p-0">
									View More
									<Icon icon="mdi:chevron-right" width={20} />
								</a>
							</li>
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Layout>
