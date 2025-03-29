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
	import { supabase } from '$lib/client/supabase';
	import { onMount } from 'svelte';

	$: l = $lg.profile.personalInformation;

	let profile: RouterOutput['user']['getProfile'] = cloneDeep($page.data.profile);
	let isEdit = false;

	let fileInput: HTMLInputElement;
	let ppFile: File | undefined;
	let ppUrl: string | undefined = undefined;

	onMount(async () => {
		if (profile.profilePic) {
			const { data } = await supabase.storage.from('profile-pictures').createSignedUrl(profile.profilePic, 300);
			ppUrl = data?.signedUrl;
		}
	});

	const saveProfile = async () =>
		ui.loaderWrapper({ title: l.savingProfile }, async () => {
			let { firstName, lastName, phone, profilePic } = profile;

			if (ppFile || ppUrl === undefined) {
				if (profilePic) {
					await supabase.storage.from('profile-pictures').remove([profilePic]);
					profilePic = '';
				}
				if (ppFile) {
					await supabase.storage.from('profile-pictures').upload($page.data.user.id, ppFile);
					profilePic = $page.data.user.id;
				}
			}

			await trpc()
				.user.updateProfile.mutate({ firstName, lastName, phone, profilePic })
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
					on:click={async () => {
						isEdit = false;
						profile = $page.data.profile;
						ppFile = undefined;
						fileInput.value = '';
						if (profile.profilePic) {
							const { data } = await supabase.storage.from('profile-pictures').createSignedUrl(profile.profilePic, 300);
							ppUrl = data?.signedUrl;
						} else ppUrl = undefined;
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
			<button class="btn btn-sm btn-warning" on:click={() => (isEdit = true)}>
				<Icon icon="mdi:edit" />
				{l.editProfile}
			</button>
		{/if}
	</div>
	<div class="divider mt-1" />

	<div class="flex p-4 gap-20">
		<div class="flex flex-col justify-center items-center">
			{#if ppUrl}
				<img src={ppUrl} alt="Profile Pic" class="w-40 rounded-full border-2" />
			{:else}
				<div class="avatar placeholder">
					<div class="bg-neutral text-neutral-content w-40 rounded-full">
						<Icon icon="mdi:person" width={80} />
					</div>
				</div>
			{/if}

			{#if isEdit}
				<input
					bind:this={fileInput}
					type="file"
					class="file-input file-input-bordered file-input-sm mt-4 w-60"
					on:change={(e) => {
						ppFile = e.currentTarget.files?.[0];
						if (ppFile) ppUrl = URL.createObjectURL(ppFile);
					}}
				/>

				<button
					class="btn btn-link no-underline text-error mt-1
                  {profile.profilePic === '' && ppUrl === undefined && 'pointer-events-none text-gray-400'}"
					on:click={() => {
						ppFile = undefined;
						ppUrl = undefined;
						fileInput.value = '';
					}}
				>
					<Icon icon="mdi:delete-forever" />
					{$lg.common.remove}
				</button>
			{/if}
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
