<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import { generateSpData } from '../utils/generateSpData';
	let search = '';

	$: questions = Object.entries($lg.support.sections)
		.flatMap(([section, { subsections }]) =>
			Object.entries(subsections).flatMap(([subsection, { questions }]) =>
				questions.flatMap((_, i) => generateSpData(section, subsection, i))
			)
		)
		.filter(({ title }) => title.toLowerCase().replaceAll(' ', '').includes(search.toLowerCase().replaceAll(' ', '')))
		.slice(0, 10);
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="w-full bg-info py-14 bg-opacity-40">
	<div class="w-[30rem] mx-auto text-center">
		<div class="text-2xl font-semibold mb-3">{$lg.support.subtitle}</div>
		<label class="input input-bordered flex items-center gap-2 {search && 'rounded-b-none'}">
			<input type="text" class="grow" placeholder={$lg.common.search} bind:value={search} />
			{#if search}
				<button on:click={() => (search = '')}>
					<Icon icon="mdi:clear" width={20} class="mr-2 text-error" />
				</button>
			{/if}
			<Icon icon="mdi:search" width={20} />
		</label>

		{#if search}
			<ul tabindex="0" class="dropdown-content absolute w-[30rem] bg-base-100 z-[1] p-2 shadow rounded-b-lg menu">
				{#each questions as { href, title }}
					<li><a {href}>{title}</a></li>
				{:else}
					<div class="py-2">{$lg.common.noResultsFound}</div>
				{/each}
			</ul>
		{/if}
	</div>
</div>
