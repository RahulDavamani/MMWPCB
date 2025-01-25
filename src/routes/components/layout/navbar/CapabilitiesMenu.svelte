<script lang="ts">
	import { capabilities } from '../../../../stores/capabilities.store';

	$: menus = [
		[$capabilities.printedCircuitBoards, $capabilities.smdStencils],
		[$capabilities.pcbAssembly, $capabilities.pcbDesignAid],
		[$capabilities.surface, $capabilities.drillsThroughplating]
	];
</script>

<ul class="menu menu-horizontal bg-base-100 min-w-max shadow mt-2">
	{#each menus as submenus}
		<div>
			{#each submenus as { title, subsections }}
				<li>
					<a href="/capabilities{Object.values(subsections)[0].href}" class="font-semibold">{title}</a>
					<ul>
						{#each Object.values(subsections) as { title, href }}
							<li><a href="/capabilities{href}">{title}</a></li>
						{/each}
					</ul>
				</li>
			{/each}
		</div>
	{/each}
</ul>
