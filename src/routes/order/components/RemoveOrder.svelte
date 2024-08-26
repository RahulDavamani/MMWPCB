<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import Icon from '@iconify/svelte';
	import { ui } from '../../../stores/ui.store';
	import { supabase } from '$lib/client/supabase';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { goto, invalidateAll } from '$app/navigation';

	$: ({
		order: { id, status, standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils }
	} = $page.data as PageData);
	$: products = { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils };

	const removeOrder = ui.loaderWrapper({ title: 'Removing Order' }, async () => {
		ui.closeAlertModal();
		const fileNames = Object.values(products)
			.flatMap((products) => products.map((product) => product.fileName))
			.filter(Boolean) as string[];
		await supabase.storage.from('Gerber Files').remove(fileNames);
		await trpc()
			.order.remove.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: 'Failed to remove order', retryFn: removeOrder } }));

		ui.setToast({ title: 'Order removed successfully' });
		goto('/orders');
	});

	const showRemoveOrderModal = () =>
		ui.setAlertModal({
			title: 'Are you sure to remove this order?',
			body: 'This action cannot be undone.',
			actions: [
				{
					name: 'Cancel',
					classes: 'btn-warning',
					onClick: ui.closeAlertModal
				},
				{
					name: 'Remove',
					classes: 'btn-error',
					onClick: removeOrder
				}
			]
		});
</script>

{#if status === 'SAVED' || status === 'REJECTED'}
	<div class="divider" />
	<div class="flex justify-between items-center">
		<div class="max-w-2xl">
			<span class="font-bold">Warning: </span>
			This action will permanently delete the order and all its related information. This cannot be undone, so please proceed
			with caution.
		</div>
		<button class="btn btn-error" on:click={showRemoveOrderModal}>
			<Icon icon="mdi:delete-forever" width={20} />
			Delete Order
		</button>
	</div>
{/if}
