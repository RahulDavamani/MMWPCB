<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { ui } from '../../../stores/ui.store';
	import { tce } from '../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import cloneDeep from 'lodash.clonedeep';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.profile.personalInformation;

	let profile: RouterOutput['profile']['get'] = cloneDeep($page.data.profile);
	let isEdit = false;

	const saveProfile = async () =>
		ui.loaderWrapper({ title: l.savingProfile }, async () => {
			const { firstName, lastName, phone } = profile;
			await trpc()
				.profile.update.mutate({ firstName, lastName, phone })
				.catch((e) => tce(e, { showModal: { title: l.saveProfileError, retryFn: saveProfile } }));

			await invalidateAll();
			isEdit = false;
			ui.setToast({ title: l.saveProfileSuccess, alertClasses: 'alert-success' });
		})();
</script>

<div class="border rounded-lg shadow mt-4 p-4">
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center text-lg font-semibold">
			<Icon icon="mdi:person" />
			{l.title}:
		</div>
		{#if isEdit}
			<div class="flex gap-4">
				<button
					class="btn btn-sm btn-error"
					on:click={() => {
						isEdit = false;
						profile = $page.data.profile;
					}}
				>
					<Icon icon="mdi:remove" />
					{$lg.common.cancel}
				</button>
				<button class="btn btn-sm btn-success" on:click={saveProfile}>
					<Icon icon="mdi:content-save" />
					{$lg.common.save}
				</button>
			</div>
		{:else}
			<button class="btn btn-sm btn-secondary" on:click={() => (isEdit = true)}>
				<Icon icon="mdi:edit" />
				{l.editProfile}
			</button>
		{/if}
	</div>
	<div class="divider mt-1" />

	<div class="flex p-4 gap-20">
		<div class="flex flex-col justify-center items-center">
			<div class="avatar placeholder">
				<div class="bg-neutral text-neutral-content w-40 rounded-full">
					<Icon icon="mdi:person" width={80} />
				</div>
			</div>
			<div class="flex mt-2">
				<div class="btn btn-link no-underline">
					<Icon icon="mdi:cloud-upload" />
					{$lg.common.upload}
				</div>
				<div class="btn btn-link no-underline text-error">
					<Icon icon="mdi:delete-forever" />
					{$lg.common.remove}
				</div>
			</div>
		</div>

		<div class="grid grid-cols-2 h-fit gap-y-4">
			<div class="w-40 font-semibold">{$lg.user.firstName}:</div>
			{#if isEdit}
				<input
					type="text"
					class="input input-bordered input-sm"
					placeholder={$lg.user.firstName}
					bind:value={profile.firstName}
				/>
			{:else}
				<div>{profile.firstName}</div>
			{/if}

			<div class="w-40 font-semibold">{$lg.user.lastName}:</div>
			{#if isEdit}
				<input
					type="text"
					class="input input-bordered input-sm"
					placeholder={$lg.user.lastName}
					bind:value={profile.lastName}
				/>
			{:else}
				<div>{profile.lastName}</div>
			{/if}

			<div class="w-40 font-semibold">{$lg.user.email}:</div>
			<div>{profile.email}</div>

			<div class="w-40 font-semibold">{$lg.user.phone}:</div>
			{#if isEdit}
				<input
					type="text"
					class="input input-bordered input-sm"
					placeholder={$lg.user.phone}
					bind:value={profile.phone}
				/>
			{:else}
				<div>{profile.phone}</div>
			{/if}
		</div>
	</div>
</div>
