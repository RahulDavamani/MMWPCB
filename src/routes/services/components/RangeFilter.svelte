<script lang="ts">
	import RangeSlider from 'svelte-range-slider-pips';

	export let title: string;
	export let max: number;
	export let values: number[];
	export let unit: string;
</script>

<details class="collapse collapse-arrow">
	<summary class="collapse-title text-xl font-medium border-b-2">{title}</summary>
	<div class="py-4 px-2">
		<RangeSlider pips min={0} {max} step={max / 20} pipstep={4} float bind:values />
		<div class="text-center">{values[0]} - {values[1]} {unit}</div>
	</div>
</details>
