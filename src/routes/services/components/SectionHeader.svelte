<script lang="ts">
	import Icon from '@iconify/svelte';

	export let title: string;
	export let count: number;
</script>

<div class="flex items-center gap-2">
	<a href="/services" class="btn btn-ghost">
		<Icon icon="mdi:arrow-left" width={28} />
	</a>
	<div class="font-semibold text-4xl">{title} <span class="font-normal text-3xl font-mono">({count})</span></div>
</div>
<div class="divider mb-0" />
