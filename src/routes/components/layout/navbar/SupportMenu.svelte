<script lang="ts">
	import { support } from '../../../../stores/support.store';
</script>

<ul class="menu menu-horizontal bg-base-100 min-w-max shadow mt-2">
	{#each Object.entries($support.sections) as [section, { title, subsections }]}
		<div>
			<li>
				<a href="/support/{section}" class="font-semibold">{title}</a>
				<ul>
					{#each Object.entries(subsections) as [subsection, { title }]}
						<li><a href="/support/{section}/{subsection}">{title}</a></li>
					{/each}
				</ul>
			</li>
		</div>
	{/each}
</ul>
