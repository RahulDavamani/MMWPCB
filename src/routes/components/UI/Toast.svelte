<script lang="ts">
	import { onMount } from 'svelte';
	import { ui } from '../../../stores/ui.store';
	import IconBtn from '../IconBtn.svelte';

	export let title: string | undefined = undefined;
	export let toastDuration = 5000;

	export let toastClasses = '';
	export let alertClasses = '';
	export let titleClasses = '';

	const closeToast = () => ($ui.toast = undefined);
	onMount(() => setTimeout(closeToast, toastDuration));
</script>

<div class="toast toast-bottom toast-start z-50 {toastClasses}">
	<div class="gap-2 alert {alertClasses}">
		<slot name="icon">
			<IconBtn icon="mdi:close" on:click={closeToast} />
		</slot>

		<slot name="title">
			<div class={titleClasses}>
				{title}
			</div>
		</slot>
	</div>
</div>
