<script lang="ts">
	import { page } from '$app/stores';
	import { support } from '../../../stores/support.store';
	import { generateSpData } from '../utils/generateSpData';

	$: pageSection = $page.params.section.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	$: pageSubsection = $page.params.subsection?.replace(/-([a-z])/g, (_, l) => l.toUpperCase()) as string | undefined;
</script>

<ul class="menu rounded-box min-w-52 pb-2">
	{#each Object.entries($support.sections) as [section, { subsections }]}
		{@const { title, href } = generateSpData(section)}
		<li>
			<details open={section === pageSection}>
				<summary class="font-semibold text-base">
					<a {href} class="hover:underline hover:text-primary">{title}</a>
				</summary>
				{#each Object.entries(subsections) as [subsection]}
					{@const { title, href } = generateSpData(section, subsection)}
					<li>
						<a
							{href}
							class="rounded-none pl-6 {subsection === pageSubsection &&
								'bg-primary bg-opacity-10 border-l-2 border-primary text-primary'}"
						>
							{title}
						</a>
					</li>
				{/each}
			</details>
		</li>
	{/each}
</ul>
