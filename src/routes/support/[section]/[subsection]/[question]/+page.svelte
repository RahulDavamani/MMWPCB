<script lang="ts">
	import { page } from '$app/stores';
	import { support, type Question } from '../../../../../stores/support.store';
	import Layout from '../../../../components/layout/Layout.svelte';
	import SupportSections from '../../../components/SupportSections.svelte';
	import ContentPart from './components/ContentPart.svelte';

	$: section = $page.params.section.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	$: subsection = $page.params.subsection.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	$: question = $page.params.question;
	// @ts-ignore
	$: sectionTitle = $support.sections[section].title as string;
	// @ts-ignore
	$: subsectionTitle = $support.sections[section].subsections[subsection].title as string;
	// @ts-ignore
	$: ({ title, contents } = $support.sections[section].subsections[subsection].questions[question] as Question);
</script>

<Layout pageTitle={title}>
	<div class="flex mt-4">
		<SupportSections />
		<div class="divider divider-horizontal" />
		<div>
			<div class="breadcrumbs text-sm mb-2">
				<ul class="flex flex-wrap">
					<li><a href="/support">Support</a></li>
					<li><a href="/support/{section}">{sectionTitle}</a></li>
					<li><a href="/support/{section}/{subsection}">{subsectionTitle}</a></li>
					<li><a href="/support/{section}/{subsection}/{question}">{title}</a></li>
				</ul>
			</div>
			<div class="text-lg font-bold border-b-2 border-primary w-fit mb-6 px-0.5">
				{title}
			</div>

			<div class="space-y-2">
				{#each contents as { type, tabSpace, parts }}
					{#if type === 'para'}
						<div style="padding-left: {tabSpace}px;" class="space-x-1">
							{#each parts as part}
								<ContentPart {part} />
							{/each}
						</div>
					{:else if type === 'list'}
						<ul style="padding-left: {tabSpace}px;" class="list-disc pl-5">
							{#each parts as part}
								<li>
									<ContentPart {part} />
								</li>
							{/each}
						</ul>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</Layout>
