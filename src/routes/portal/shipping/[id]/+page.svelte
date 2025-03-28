<script lang="ts">
	import Icon from '@iconify/svelte';
	import Layout from '../../components/Layout.svelte';
	import IconBtn from '../../../components/IconBtn.svelte';
	import { ui } from '../../../../stores/ui.store';
	import { trpc } from '../../../../trpc/client';
	import { tce } from '../../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import { showModal } from '$lib/client/modal';
	import UpsertMethodModal from '../components/UpsertMethodModal.svelte';

	export let data;
	$: ({ countryName, methods } = data);

	let id: string | undefined;

	const removeMethod = async (id: string) =>
		ui.loaderWrapper({ title: 'Removing Method' }, async () => {
			await trpc()
				.shipping.removeMethod.mutate({ id })
				.catch((e) =>
					tce(e, {
						showModal: {
							title: 'Failed to remove method',
							retryFn: () => removeMethod(id)
						}
					})
				);

			await invalidateAll();
			ui.setToast({
				title: 'Method removed successfully',
				alertClasses: 'alert-success'
			});
		})();

	const showRemoveMethodModal = (id: string) => {
		ui.setAlertModal({
			title: 'Remove Method',
			body: 'Are you sure you want to remove this Method? This action cannot be undone.',
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
						removeMethod(id);
					}
				}
			]
		});
	};
</script>

<Layout pageTitle="Shipping - {countryName}">
	<div class="flex items-center gap-2">
		<a href="/portal/shipping" class="btn btn-ghost btn-sm mb-2">
			<Icon icon="mdi:arrow-left" width={20} />
		</a>
		<div class="text-xl font-bold mb-4 mt-2">
			<span>{countryName}:</span>
			<span class="font-mono">({methods.length})</span>
		</div>
	</div>

	<div class="overflow-x-auto">
		<table class="table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Created At</th>
					<th>Updated At</th>
					<th>Method</th>
					<th>Price</th>
					<th>Delivery Time</th>
					<th>Restriction</th>
					<th class="w-40">
						<button
							class="btn btn-xs btn-success"
							on:click={() => {
								id = undefined;
								showModal('upsertMethodModal');
							}}
						>
							<Icon icon="mdi:plus" width={20} />
							<span class="font-semibold">Add Method</span>
						</button>
					</th>
				</tr>
			</thead>

			<tbody>
				{#each methods as { id: methodId, createdAt, updatedAt, name, price, deliveryTime, restriction }}
					<tr class="hover cursor-pointer">
						<td>{methodId}</td>
						<td>{createdAt.toLocaleString()}</td>
						<td>{updatedAt.toLocaleString()}</td>
						<td>{name}</td>
						<td>${price}</td>
						<td>{deliveryTime}</td>
						<td>{restriction}</td>
						<td>
							<div class="flex gap-2 justify-center">
								<IconBtn
									icon="mdi:edit"
									buttonClasses="text-warning"
									on:click={() => {
										id = methodId;
										showModal('upsertMethodModal');
									}}
								/>
								<IconBtn
									icon="mdi:delete"
									buttonClasses="text-error"
									on:click={() => showRemoveMethodModal(methodId)}
								/>
							</div>
						</td>
					</tr>
				{:else}
					<tr>
						<td colspan="8" class="text-center">No Shipping Methods Available</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Layout>

<UpsertMethodModal bind:id />
