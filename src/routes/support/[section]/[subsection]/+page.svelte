<script lang="ts">
	import { page } from '$app/stores';
	import { support, type SubSection } from '../../../../stores/support.store';
	import Layout from '../../../components/layout/Layout.svelte';
	import SupportSections from '../../components/SupportSections.svelte';

	$: section = $page.params.section.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	$: subsection = $page.params.subsection.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	// @ts-ignore
	$: sectionTitle = $support.sections[section].title as string;
	// @ts-ignore
	$: ({ title, questions } = $support.sections[section].subsections[subsection] as SubSection);
</script>

<Layout pageTitle={title}>
	<div class="flex mt-4">
		<SupportSections />
		<div class="divider divider-horizontal" />
		<div>
			<div class="breadcrumbs text-sm mb-2">
				<ul>
					<li><a href="/support">Support</a></li>
					<li><a href="/support/{section}">{sectionTitle}</a></li>
					<li><a href="/support/{section}/{subsection}">{title}</a></li>
				</ul>
			</div>
			<div class="text-lg font-bold border-b-2 border-primary w-fit mb-6 px-0.5">
				{title}
			</div>

			<ul class="list-disc pl-4 space-y-2">
				{#each questions as { title }, i}
					<li>
						<a href="/support/{section}/{subsection}/{i}" class="btn btn-sm btn-link text-base h-auto text-left"
							>{title}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</Layout>
