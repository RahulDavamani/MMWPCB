<script lang="ts">
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';

	export let filters: { search: string; sortBy: string; sortOrder: boolean };
	export let sortBys: { title: string; value: string }[];
</script>

<div class="flex gap-10">
	<input
		type="text"
		class="input input-sm input-bordered flex-grow"
		placeholder="{$lg.common.search}..."
		bind:value={filters.search}
	/>
	<div class="flex items-center gap-2 text-sm">
		{$lg.common.sortBy}:
		<select class="select select-sm w-48" bind:value={filters.sortBy}>
			{#each sortBys as { title, value }}
				<option {value}>{title}</option>
			{/each}
		</select>
		<label class="swap">
			<input type="checkbox" bind:checked={filters.sortOrder} />
			<div class="swap-on"><Icon icon="mdi:sort-ascending" width={20} /></div>
			<div class="swap-off"><Icon icon="mdi:sort-descending" width={20} /></div>
		</label>
	</div>
</div>
