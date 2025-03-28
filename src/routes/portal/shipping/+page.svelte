<script lang="ts">
	import Icon from '@iconify/svelte';
	import Layout from '../components/Layout.svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import UpsertCountryModal from './components/UpsertCountryModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { goto, invalidateAll } from '$app/navigation';

	export let data;
	$: ({ countries } = data);

	let id: string | undefined;

	const removeCountry = async (id: string) =>
		ui.loaderWrapper({ title: 'Removing Country' }, async () => {
			await trpc()
				.shipping.removeCountry.mutate({ id })
				.catch((e) =>
					tce(e, {
						showModal: {
							title: 'Failed to remove country',
							retryFn: () => removeCountry(id)
						}
					})
				);

			await invalidateAll();
			ui.setToast({
				title: 'Country removed successfully',
				alertClasses: 'alert-success'
			});
		})();

	const showRemoveCountryModal = (id: string) => {
		ui.setAlertModal({
			title: 'Remove country and its methods',
			body: 'Are you sure you want to remove this country? This action will also remove all methods associated with it.',
			actions: [
				{
					name: 'Cancel',
					classes: '',
					onClick: ui.closeAlertModal
				},
				{
					name: 'Remove',
					classes: 'btn-error',
					onClick: () => {
						ui.closeAlertModal();
						removeCountry(id);
					}
				}
			]
		});
	};
</script>

<Layout pageTitle="Shipping">
	<div class="text-xl font-bold mb-4 mt-2">
		<span>Countries:</span>
		<span class="font-mono">({countries.length})</span>
	</div>

	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Created At</th>
					<th>Updated At</th>
					<th>Country Name</th>
					<th class="text-center">Methods</th>
					<th class="w-40">
						<button
							class="btn btn-xs btn-success"
							on:click={() => {
								id = undefined;
								showModal('upsertCountryModal');
							}}
						>
							<Icon icon="mdi:plus" width={20} />
							<span class="font-semibold">Add Country</span>
						</button>
					</th>
				</tr>
			</thead>

			<tbody>
				{#each countries as { id: countryId, createdAt, updatedAt, name, _count: { methods } }}
					<tr class="hover cursor-pointer" on:click={() => goto(`/portal/shipping/${countryId}`)}>
						<td>{countryId}</td>
						<td>{createdAt.toLocaleString()}</td>
						<td>{updatedAt.toLocaleString()}</td>
						<td>{name}</td>
						<td class="text-center">{methods}</td>
						<td>
							<div class="flex gap-2 justify-center">
								<IconBtn
									icon="mdi:edit"
									buttonClasses="text-warning"
									on:click={(e) => {
										e.stopPropagation();
										id = countryId;
										showModal('upsertCountryModal');
									}}
								/>
								<IconBtn
									icon="mdi:delete"
									buttonClasses="text-error"
									on:click={(e) => {
										e.stopPropagation();
										showRemoveCountryModal(countryId);
									}}
								/>
							</div>
						</td>
					</tr>
				{:else}
					<tr>
						<td colspan="6" class="text-center">No Shipping Countries Available</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Layout>

<UpsertCountryModal bind:id />
