<script lang="ts">
	import IconBtn from '../IconBtn.svelte';

	export let modalId: string;
	export let modalBackdrop = true;

	export let modalClasses: string | undefined = undefined;
	export let boxClasses: string | undefined = undefined;

	export let title: string | undefined = undefined;
	export let titleClasses: string | undefined = undefined;

	export let showCloseBtn = true;
	export let iconClasses: string | undefined = undefined;

	export let showDivider = true;
	export let dividerClasses: string | undefined = undefined;
</script>

<dialog id={modalId} class="modal {modalClasses}">
	{#if modalBackdrop}
		<form method="dialog" class="modal-backdrop">
			<button />
		</form>
	{/if}
	<div class="modal-box {boxClasses}">
		<div class="flex justify-between items-center">
			<slot name="title">
				{#if title}
					<div class="text-xl font-bold {titleClasses}">{title}</div>
				{/if}
			</slot>

			<slot name="closeBtn">
				{#if showCloseBtn}
					<form method="dialog">
						<IconBtn icon="mdi:close" iconClasses="text-error {iconClasses}" />
					</form>
				{/if}
			</slot>
		</div>

		<slot name="divider">
			{#if showDivider}
				<div class="divider mt-0 {dividerClasses}" />
			{/if}
		</slot>

		<slot />
	</div>
</dialog>
