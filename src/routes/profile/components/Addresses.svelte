<script lang="ts">
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import UpsertAddressModal from './UpsertAddressModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { ui } from '../../../stores/ui.store';
	import { invalidateAll } from '$app/navigation';
	import { lg } from '../../../stores/i18n.store';
	import Address from '../../components/Address.svelte';

	$: l = $lg.profile.addresses;

	$: ({
		profile: { addresses }
	} = $page.data as PageData);

	let id: string | undefined;

	const removeAddress = async (id: string) =>
		ui.loaderWrapper({ title: l.removingAddress }, async () => {
			await trpc()
				.address.remove.mutate({ id })
				.catch((e) =>
					tce(e, {
						showModal: {
							title: l.removeAddressError,
							retryFn: () => removeAddress(id)
						}
					})
				);

			await invalidateAll();
			ui.setToast({
				title: l.removeAddressSuccess,
				alertClasses: 'alert-success'
			});
		})();
</script>

<div class="border rounded-lg shadow mt-6 p-4">
	<div class="flex justify-between items-center">
		<div class="flex gap-2 items-center text-lg font-semibold">
			<Icon icon="mdi:address-marker" />
			{l.title}:
		</div>
		<button
			class="btn btn-sm btn-success"
			on:click={() => {
				id = undefined;
				showModal('upsertAddressModal');
			}}
		>
			<Icon icon="mdi:add" />
			{l.newAddress}
		</button>
	</div>
	<div class="divider mt-1" />

	<div class="flex flex-wrap gap-x-8 gap-y-4 mb-2">
		{#each addresses as address}
			<div class="border rounded-box shadow p-4 w-80">
				<Address {address} />

				<div class="divider m-0 mt-2" />
				<div class="flex">
					<button
						class="btn btn-xs btn-link text-warning text-base grow"
						on:click={() => {
							id = address.id;
							showModal('upsertAddressModal');
						}}
					>
						<Icon icon="mdi:edit-outline" width={18} />
						{$lg.common.edit}
					</button>
					<div class="divider divider-horizontal" />
					<button class="btn btn-xs btn-link text-error text-base grow" on:click={() => removeAddress(address.id)}>
						<Icon icon="mdi:delete-forever-outline" width={18} />
						{$lg.common.remove}
					</button>
				</div>
			</div>
		{:else}
			<div class="text-center w-full my-4">{l.noAddressFound}</div>
		{/each}
	</div>
</div>

<UpsertAddressModal bind:id />
