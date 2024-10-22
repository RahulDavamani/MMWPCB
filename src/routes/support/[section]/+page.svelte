<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { support, type Section } from '../../../stores/support.store';
	import Layout from '../../components/layout/Layout.svelte';
	import SupportSections from '../components/SupportSections.svelte';

	$: section = $page.params.section.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	$: ({ title, subsections } = $support.sections[section] as Section);
</script>

<Layout pageTitle={title}>
	<div class="flex mt-4">
		<SupportSections />
		<div class="divider divider-horizontal" />
		<div>
			<div class="breadcrumbs text-sm mb-2">
				<ul>
					<li><a href="/support">Support</a></li>
					<li><a href="/support/{section}">{title}</a></li>
				</ul>
			</div>

			<div class="text-lg font-bold border-b-2 border-primary w-fit mb-6 px-0.5">
				{title}
			</div>

			<div class="grid grid-cols-3 gap-4">
				{#each Object.entries(subsections) as [subsection, { title, questions }]}
					<div class="max-w-96 px-3 py-2 border shadow rounded-box">
						<div class="divider">
							<a href="/support/{section}/{subsection}" class="btn btn-link text-base p-0">{title}</a>
						</div>
						<ul class="list-disc pl-6 text-sm">
							{#each questions.slice(0, 3) as { title }, i}
								<li>
									<a href="/support/{section}/{subsection}/{i}" class="hover:underline">{title}</a>
								</li>
							{/each}
							<li>
								<a href="/support/{section}/{subsection}" class="btn btn-link btn-sm p-0">
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
