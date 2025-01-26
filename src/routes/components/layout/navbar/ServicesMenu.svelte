<script lang="ts">
	import { services } from '../../../../stores/service.store';

	$: menu = Array.from({ length: Math.ceil(Object.values($services).length / 5) }, (_, i) =>
		Object.values($services).slice(i * 5, i * 5 + 5)
	);
</script>

<ul class="menu menu-horizontal bg-base-100 min-w-max shadow mt-2 space-x-8">
	{#each menu as subMenu}
		<li>
			{#each subMenu as { title, href }}
				<a href="/services{href}" class="font-semibold">{title}</a>
			{/each}
		</li>
	{/each}
</ul>
