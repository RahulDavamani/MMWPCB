<script lang="ts">
	import Icon from '@iconify/svelte';

	export let icon: string;
	export let width = 20;

	export let buttonClasses = '';
	export let iconClasses = '';
</script>

<button class="btn btn-xs btn-square btn-ghost {buttonClasses}" on:click>
	<slot name="icon">
		<Icon {icon} class={iconClasses} {width} />
	</slot>
</button>
