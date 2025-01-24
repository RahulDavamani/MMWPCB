<script lang="ts">
	import { pc } from '../../../stores/pc.store';

	$: menus = [
		[$pc.printedCircuitBoards, $pc.smdStencils],
		[$pc.pcbAssembly, $pc.pcbDesignAid],
		[$pc.surface, $pc.drillsThroughplating]
	];
</script>

<ul class="menu menu-horizontal bg-base-100 min-w-max shadow mt-2">
	{#each menus as submenus}
		<div>
			{#each submenus as { title, subsections }}
				<li>
					<a href="/pc{Object.values(subsections)[0].href}" class="font-semibold">{title}</a>
					<ul>
						{#each Object.values(subsections) as { title, href }}
							<li><a href="/pc{href}">{title}</a></li>
						{/each}
					</ul>
				</li>
			{/each}
		</div>
	{/each}
</ul>
