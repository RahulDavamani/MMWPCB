<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import ProductDetailsModal from './ProductDetailsModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { supabase } from '$lib/client/supabase';
	import { order } from '../../../stores/order.store';
	import { timeToText } from '$lib/DateTime';
	import FabricationProgressModal from './FabricationProgressModal.svelte';

	$: ({ id: orderId, status, editable, showFinalPrice, showFabrication, products, showRemoveProductModal } = $order);

	let productDetailsId: string | undefined = undefined;
	let fabricationProgressId: string | undefined = undefined;
</script>

<div class="border rounded-lg shadow p-4">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="ph:circuitry" width={20} />
			Products ({products.length})
		</div>
		{#if editable}
			<a href="/instant-quote" class="btn btn-success btn-outline btn-sm">
				<Icon icon="mdi:add" />
				Add Product
			</a>
		{/if}
	</div>

	{#if products.length === 0}
		<div>
			<div class="text-center font-semibold my-10">No Product Found</div>
		</div>
	{:else}
		<div class="overflow-x-auto max-h-[30rem]">
			<table class="table table-pin-rows">
				<thead>
					<tr>
						<!-- <th></th> -->
						<th class="min-w-48">Product</th>
						<th class="text-center">Build Time</th>
						<th class="text-center">Quantity</th>
						<th class="text-center">Gerber File</th>
						<th class="text-center">Quote Price</th>
						{#if showFinalPrice}
							<th class="text-center">Final Price</th>
						{/if}
						{#if editable}
							<th>
								<IconBtn icon="mdi:delete-forever" iconClasses="text-error" on:click={() => showRemoveProductModal()} />
							</th>
						{/if}
						{#if showFabrication}
							<th class="text-center min-w-32">Fabrication</th>
						{/if}
					</tr>
				</thead>
				<tbody>
					{#each products as { id, type, name, quantity, buildTime, fileName, initialPrice, finalPrice, fabricationStatuses }}
						{@const fileUrl = fileName
							? supabase.storage.from('Gerber Files').createSignedUrl(fileName, 300)
							: undefined}

						{@const fabricationProgress = fabricationStatuses.length
							? (fabricationStatuses.filter((f) => f.completed).length / fabricationStatuses.length) * 100
							: status === 'FABRICATION'
								? 0
								: 100}
						<tr>
							<!-- <td class="w-20 min-w-20">
								{#await import(`$lib/assets/products/${type.img}.png`) then { default: src }}
									<img {src} alt="icon" width={50} />
								{/await}
							</td> -->
							<td class="max-w-xs">
								<div class="text-base font-semibold text-primary">{name}</div>
								<div class="italic opacity-75">{type.name}</div>
								<div class="flex mt-2">
									<button
										class="btn btn-xs btn-link text-sm px-0 text-accent"
										on:click={() => {
											productDetailsId = id;
											showModal('productDetailsModal');
										}}
									>
										Details
									</button>
									{#if editable}
										<div class="divider divider-horizontal" />
										<a
											href="/instant-quote/edit?orderId={orderId}&id={id}"
											class="btn btn-xs btn-link text-sm px-0 text-warning">Edit</a
										>
									{/if}
								</div>
							</td>
							<td class="text-center">{timeToText(buildTime)}</td>
							<td class="text-center">{quantity}</td>
							<td class="text-center">
								{#if fileName && fileUrl}
									{#await fileUrl}
										<button class="btn btn-sm btn-link pointer-events-none text-info">
											<Icon icon="mdi:download" />
											{fileName.split('__')[1]}
										</button>
									{:then { data }}
										<a href={data?.signedUrl} target="_blank" class="btn btn-sm btn-link text-info">
											<Icon icon="mdi:download" />
											{fileName.split('__')[1]}
										</a>
									{/await}
								{:else}
									<div class="text-error">Not Uploaded</div>
								{/if}
							</td>
							<td class="text-center font-mono !{showFinalPrice && 'font-semibold'}">${initialPrice.toFixed(2)}</td>
							{#if showFinalPrice && finalPrice}
								{@const textColor =
									finalPrice > initialPrice
										? 'text-error'
										: finalPrice < initialPrice
											? 'text-success'
											: 'text-primary'}
								<td class="text-center font-mono font-semibold {textColor}">${finalPrice.toFixed(2)}</td>
							{/if}
							{#if editable}
								<td>
									<IconBtn icon="mdi:delete" iconClasses="text-error" on:click={() => showRemoveProductModal(id)} />
								</td>
							{/if}
							{#if showFabrication}
								<td>
									<div class="flex flex-col justify-center items-center">
										<div class="w-full bg-gray-200 rounded-full">
											<div
												class="bg-success text-success-content text-xs font-medium text-center rounded-full px-1"
												style="width: {fabricationProgress}%"
											>
												{fabricationProgress.toFixed(2)}%
											</div>
										</div>
										<button
											class="btn btn-xs btn-link text-secondary"
											on:click={() => {
												fabricationProgressId = id;
												showModal('fabricationProgressModal');
											}}
										>
											View Progress
										</button>
									</div>
								</td>
							{/if}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<ProductDetailsModal {productDetailsId} />
<FabricationProgressModal {fabricationProgressId} />
