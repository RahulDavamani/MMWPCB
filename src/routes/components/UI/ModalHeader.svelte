<script lang="ts">
	import { modal } from '../../../stores/modal.store';
	import IconBtn from '../IconBtn.svelte';

	export let title: string;
	export let showCloseBtn = true;
	export let showDivider = true;

	export let titleClasses = '';
	export let iconClasses = '';
	export let dividerClasses = '';
</script>

<div class="flex justify-between items-center">
	<div class="text-xl font-bold {titleClasses}">{title}</div>
	{#if showCloseBtn}
		<IconBtn icon="mdi:close" iconClasses="text-error {iconClasses}" on:click={() => ($modal = undefined)} />
	{/if}
</div>

{#if showDivider}
	<div class="divider mt-0 {dividerClasses}" />
{/if}
