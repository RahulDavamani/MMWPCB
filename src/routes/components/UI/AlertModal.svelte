<script lang="ts">
	import { ui, type AlertModalAction } from '../../../stores/ui.store';
	import IconBtn from '../IconBtn.svelte';

	export let title: string;
	export let body = '';
	export let details: string | undefined = undefined;
	export let actions: AlertModalAction[] | undefined = undefined;
	export let closeBtn = true;

	const closeModal = () => ($ui.alertModal = undefined);
</script>

<div class="modal modal-open z-40">
	<div class="modal-box">
		<div class="flex items-center justify-between">
			<!-- Title -->
			<slot name="title">
				<div class="font-bold text-lg">{title}</div>
			</slot>

			<!-- Close Button -->
			{#if closeBtn}
				<IconBtn icon="mdi:close" iconClasses="text-error" on:click={closeModal} />
			{/if}
		</div>
		<div class="divider mt-0 mb-2" />

		<!-- Body -->
		{#if body}
			<slot name="body">
				<p class="break-words max-h-96 overflow-auto">{body}</p>
			</slot>
		{/if}

		{#if details}
			<div class="collapse">
				<input type="checkbox" class="peer" />
				<div class="collapse-title px-0 text-warning underline">More Details:</div>
				<div
					class="collapse-content peer-checked:pt-3 max-h-40 overflow-auto text-sm break-all bg-warning bg-opacity-30 rounded"
				>
					{details}
				</div>
			</div>
		{/if}

		<!-- Actions -->
		{#if actions}
			<slot name="actions">
				<div class="modal-action">
					{#each actions as { name, classes, onClick }}
						<button class="btn btn-sm w-24 {classes}" on:click={onClick ?? closeModal}>
							{name}
						</button>
					{/each}
				</div>
			</slot>
		{/if}
	</div>
</div>
