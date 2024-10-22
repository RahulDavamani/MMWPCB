<script lang="ts">
	import { page } from '$app/stores';
	import { support } from '../../../stores/support.store';

	$: pageSection = $page.params.section.replace(/-([a-z])/g, (_, l) => l.toUpperCase());
	$: pageSubsection = $page.params.subsection?.replace(/-([a-z])/g, (_, l) => l.toUpperCase()) as string | undefined;
</script>

<ul class="menu rounded-box min-w-52 pb-2">
	{#each Object.entries($support.sections) as [section, { title, subsections }]}
		<li>
			<details open={section === pageSection}>
				<summary class="font-semibold text-base">
					<a href="/support/{section}" class="hover:underline hover:text-primary">{title}</a>
				</summary>
				{#each Object.entries(subsections) as [subsection, { title }]}
					<li>
						<a
							href="/support/{section}/{subsection}"
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
