<script lang="ts">
	import Icon from '@iconify/svelte';
	import { support } from '../../../stores/support.store';
	import { generateSpData } from '../utils/generateSpData';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.support;
</script>

<div class="flex justify-center font-bold text-2xl mb-4">{l.moreTopics}</div>
<div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
	{#each Object.entries($support.sections) as [section, { subsections }]}
		{@const { title, href } = generateSpData(section)}
		<div class="border shadow rounded-lg px-3 py-2">
			<div class="divider">
				<a {href} class="btn btn-link text-lg p-0">{title}</a>
			</div>
			<ul class="list-disc pl-6">
				{#each Object.entries(subsections).slice(0, 3) as [subsection]}
					{@const { title, href } = generateSpData(section, subsection)}
					<li><a {href} class="hover:underline">{title}</a></li>
				{/each}
			</ul>
			<a {href} class="btn btn-sm btn-outline btn-info w-full mt-4">
				View More
				<Icon icon="mdi:chevron-right" width={20} />
			</a>
		</div>
	{/each}
</div>
