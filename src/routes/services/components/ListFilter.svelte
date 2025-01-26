<script lang="ts">
	import FormControl from '../../components/FormControl.svelte';

	export let title: string;
	export let list: string[];
	export let values: string[];
</script>

<details class="collapse collapse-arrow">
	<summary class="collapse-title text-xl font-medium border-b-2">{title}</summary>
	<div class="py-4 px-2">
		{#each list as l}
			<FormControl inputType="In" label={l}>
				<input
					type="checkbox"
					class="checkbox checkbox-sm checkbox-primary"
					on:change={(e) => {
						if (e.currentTarget.checked) values = [...values, l];
						else values = values.filter((v) => v !== l);
					}}
				/>
			</FormControl>
		{/each}
	</div>
</details>
