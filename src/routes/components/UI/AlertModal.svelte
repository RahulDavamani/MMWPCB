<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import type { AlertModalAction } from '../../../stores/ui.store';
	import IconBtn from '../IconBtn.svelte';

	export let modalBackdrop = true;

	export let boxClasses: string | undefined = undefined;

	export let title: string | undefined = undefined;
	export let titleClasses: string | undefined = undefined;

	export let showCloseBtn = true;
	export let iconClasses: string | undefined = undefined;

	export let showDivider = true;
	export let dividerClasses: string | undefined = undefined;

	export let body: string | undefined = undefined;
	export let bodyClasses: string | undefined = undefined;

	export let details: string | undefined = undefined;
	export let detailsClasses: string | undefined = undefined;

	export let actions: AlertModalAction[] | undefined = undefined;
</script>

<dialog id="alertModal" class="modal">
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

		<slot name="body">
			{#if body}
				<p class="break-words max-h-96 overflow-auto {bodyClasses}">{body}</p>
			{/if}
		</slot>

		<slot name="details">
			{#if details}
				<div class="collapse collapse-arrow">
					<input type="checkbox" class="peer" />
					<div class="collapse-title px-0 text-info underline">{$lg.common.moreDetails}:</div>
					<div class="collapse-content max-h-40 overflow-auto text-sm break-all bg-opacity-30 {detailsClasses}">
						{details}
					</div>
				</div>
			{/if}
		</slot>

		<slot name="actions">
			{#if actions}
				<div class="modal-action">
					{#each actions as { name, classes, onClick }}
						<button class="btn btn-sm w-24 {classes}" on:click={onClick}>
							{name}
						</button>
					{/each}
				</div>
			{/if}
		</slot>
	</div>
</dialog>
