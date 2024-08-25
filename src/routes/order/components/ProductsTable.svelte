<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../$types';
	import { productTypes } from '../../../stores/product.store';
	import IconBtn from '../../components/IconBtn.svelte';
	import type { ProductType } from '../../../stores/quote.store';
	import ProductDetailsModal from './ProductDetailsModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { invalidateAll } from '$app/navigation';
	import { tce } from '../../../trpc/te';

	$: ({
		order: { id: orderId, standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils }
	} = $page.data as PageData);
	$: products = { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils };
	$: productCount = Object.values(products).reduce((acc, cur) => acc + cur.length, 0);

	let productDetailsId: string | undefined = undefined;

	const removeProduct = (id?: string) =>
		ui.loaderWrapper({ title: id ? 'Removing Product' : 'Removing all products' }, async () => {
			ui.closeAlertModal();
			await trpc()
				.order.removeProduct.mutate({
					orderId,
					ids: id ? [id] : Object.keys(products).flatMap((k) => products[k as keyof typeof products].map((p) => p.id))
				})
				.catch((e) =>
					tce(e, {
						showModal: { title: 'Failed to remove product', retryFn: () => removeProduct(id) }
					})
				);

			await invalidateAll();
			ui.setToast({ title: id ? 'Product removed successfully' : 'All products removed successfully' });
		})();

	const showRemoveProductModal = (id?: string) => {
		ui.setAlertModal({
			title: id ? 'Are you sure to remove this product?' : 'Are you sure to remove all products?',
			body: 'This action cannot be undone.',
			actions: [
				{
					name: 'Cancel',
					classes: 'btn-warning',
					onClick: () => ui.closeAlertModal()
				},
				{
					name: 'Remove',
					classes: 'btn-error',
					onClick: () => removeProduct(id)
				}
			]
		});
	};
</script>

<div class="border rounded-lg shadow p-4">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="ph:circuitry" width={20} />
			Products ({productCount})
		</div>
		<a href="/instant-quote" class="btn btn-success btn-outline btn-sm">
			<Icon icon="mdi:add" />
			Add Product
		</a>
	</div>

	{#if productCount === 0}
		<div>
			<div class="text-center font-semibold my-10">No Product Found</div>
		</div>
	{:else}
		<div class="overflow-x-auto max-h-[30rem]">
			<table class="table table-pin-rows">
				<thead>
					<tr>
						<th></th>
						<th>Product</th>
						<th class="text-center">Build Time</th>
						<th class="text-center">Quantity</th>
						<th class="text-center">Gerber File</th>
						<th class="text-center">Quote Price</th>
						<th>
							<IconBtn icon="mdi:delete-forever" iconClasses="text-error" on:click={() => showRemoveProductModal()} />
						</th>
					</tr>
				</thead>
				<tbody>
					{#each Object.entries(products) as [key, items]}
						{#each items as { id, name, quantity, buildTime, fileName, initialPrice }}
							{@const product = Object.values($productTypes).find((p) => p.keys === key)}
							<tr>
								<td class="w-20 min-w-20">
									{#await import(`$lib/assets/products/${product?.img}.png`) then { default: src }}
										<img {src} alt="icon" width={50} />
									{/await}
								</td>
								<td class="max-w-xs">
									<div class="text-base font-semibold text-primary">{name}</div>
									<div class="italic opacity-75">{product?.name}</div>
									<div class="flex mt-2">
										<button
											class="btn btn-xs btn-link text-sm px-0 text-info"
											on:click={() => {
												productDetailsId = id;
												showModal('productDetailsModal');
											}}
										>
											Details
										</button>
										<div class="divider divider-horizontal" />
										<a
											href="/instant-quote?orderId={orderId}&id={id}"
											class="btn btn-xs btn-link text-sm px-0 text-warning">Edit</a
										>
									</div>
								</td>
								<td class="text-center">{buildTime}</td>
								<td class="text-center">{quantity}</td>
								<td class="text-center {!fileName && 'text-error'}">
									{fileName ? fileName.split('__')[1] : 'Not Uploaded'}
								</td>
								<td class="text-center font-mono">${initialPrice.toFixed(2)}</td>
								<td>
									<IconBtn icon="mdi:delete" iconClasses="text-error" on:click={() => showRemoveProductModal(id)} />
								</td>
							</tr>
						{/each}
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<ProductDetailsModal {productDetailsId} />
