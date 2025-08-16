<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import ProductDetailsModal from './ProductDetailsModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { supabase } from '$lib/client/supabase';
	import { order, orderApproveData, orderSelectedProducts } from '../../../stores/order.store';
	import FabricationProgressModal from './FabricationProgressModal.svelte';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';

	$: l = $lg.order.productsTable;

	$: ({ isPortal, id: orderId, status, editable, showFabrication, products, showRemoveProductModal } = $order);

	let productDetailsId: string | undefined = undefined;
	let fabricationProgressId: string | undefined = undefined;
</script>

<div class="border rounded-lg shadow p-4">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="ph:circuitry" width={20} />
			{l.products} ({products.length})
		</div>
		{#if editable}
			<a href="/instant-quote" class="btn btn-success btn-outline btn-sm">
				<Icon icon="mdi:add" />
				{l.addProduct}
			</a>
		{/if}
	</div>

	{#if products.length === 0}
		<div>
			<div class="text-center font-semibold my-10">{l.noProductFound}</div>
		</div>
	{:else}
		<div class="overflow-auto max-h-[30rem]">
			<table class="table table-pin-rows">
				<thead>
					<tr>
						{#if ['SAVED', 'CART'].includes(status) && !isPortal}
							<th
								class="w-1 hover:underline cursor-pointer {$orderSelectedProducts ? 'text-error' : 'text-primary'}"
								on:click={() => ($orderSelectedProducts = $orderSelectedProducts ? null : [])}
							>
								{#if $orderSelectedProducts}
									Cancel
								{:else}
									Select
								{/if}
							</th>
						{/if}
						<th class="w-14" />
						<th class="min-w-48">{l.product}</th>
						<th class="text-center">{l.quantity}</th>
						<th class="text-center">{l.file}</th>
						<th class="text-center">{l.quotePrice}</th>
						{#if products[0].finalPrice || (isPortal && status === 'REVIEW')}
							<th class="text-center">{l.finalPrice}</th>
						{/if}
						{#if editable}
							<th>
								<IconBtn icon="mdi:delete-forever" iconClasses="text-error" on:click={() => showRemoveProductModal()} />
							</th>
						{/if}
						{#if showFabrication}
							<th class="text-center min-w-32">{l.fabrication.title}</th>
						{/if}
					</tr>
				</thead>
				<tbody>
					{#each products as { id, type, name, files, quantity, initialPrice, finalPrice, fabricationStatuses }}
						{@const fabricationProgress = fabricationStatuses.length
							? (fabricationStatuses.filter((f) => f.completedAt).length / fabricationStatuses.length) * 100
							: status === 'FABRICATION'
								? 0
								: 100}
						<tr>
							{#if ['SAVED', 'CART'].includes(status) && !isPortal}
								<td>
									{#if $orderSelectedProducts}
										<input
											type="checkbox"
											class="checkbox checkbox-primary checkbox-sm"
											checked={$orderSelectedProducts.includes(id)}
											on:change={(e) => {
												if ($orderSelectedProducts)
													if (e.currentTarget.checked) $orderSelectedProducts = [...$orderSelectedProducts, id];
													else $orderSelectedProducts = $orderSelectedProducts.filter((p) => p !== id);
											}}
										/>
									{:else}
										<input type="checkbox" class="checkbox checkbox-primary checkbox-sm" checked disabled />
									{/if}
								</td>
							{/if}
							<td class="px-0">
								<div class="flex justify-center">
									{#await import(`$lib/assets/products/${type.img}.jpg`) then { default: src }}
										<img {src} alt="icon" width={45} />
									{/await}
								</div>
							</td>
							<td class="max-w-xs">
								<div class="flex items-center gap-4">
									<div>
										<div class="text-base font-semibold text-primary">{name}</div>
										<div class="italic opacity-75">{type.l.title}</div>
										<div class="flex mt-2">
											<button
												class="btn btn-xs btn-link text-sm px-0 text-accent"
												on:click={() => {
													productDetailsId = id;
													showModal('productDetailsModal');
												}}
											>
												{l.details}
											</button>
											{#if editable}
												<div class="divider divider-horizontal" />
												<a
													href="/instant-quote/edit?orderId={orderId}&id={id}"
													class="btn btn-xs btn-link text-sm px-0 text-warning"
												>
													{l.edit}
												</a>
											{/if}
										</div>
									</div>
								</div>
							</td>
							<td class="text-center">{quantity}</td>
							<td class="text-center">
								{#if files.length > 0}
									<div class="dropdown dropdown-hover dropdown-top">
										<div tabindex="0" role="button" class="text-info hover:underline cursor-pointer">
											{files.length}
											{files.length === 1 ? l.file : l.files}
											{l.uploaded}
										</div>
										<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
										<div tabindex="0" class="dropdown-content bg-base-200 border shadow rounded-lg w-96 z-[100] p-2">
											<ul class="menu max-h-32 overflow-auto flex-nowrap">
												{#each files as file}
													{@const fileUrl = supabase.storage
														.from('Product Files')
														.createSignedUrl(`${id}/${file.name}`, 300)}

													{#await fileUrl}
														<li><button>{file.name}</button></li>
													{:then { data, error }}
														{#if error}
															<li>
																<button class="justify-between text-error">
																	{file.name}
																	<Icon icon="mdi:alert-circle" width={20} />
																</button>
															</li>
														{:else}
															<li>
																<a href={data.signedUrl} class="justify-between">
																	{file.name}
																	<Icon icon="mdi:download" width={16} class="text-info" />
																</a>
															</li>
														{/if}
													{/await}
												{/each}
											</ul>
										</div>
									</div>
								{:else}
									<div class="text-error">{l.notUploaded}</div>
								{/if}
							</td>
							<td class="text-center font-mono !{finalPrice && 'font-semibold'}">
								{initialPrice ? parsePrice($i18n.currency, initialPrice) : 'RFQ'}
							</td>
							{#if isPortal && status === 'REVIEW'}
								{@const inputError = !finalPrice && !initialPrice && !$orderApproveData.products[id]}
								<td>
									<div class="flex justify-center">
										<input
											type="number"
											class="input input-bordered input-xs w-20 {inputError && 'input-error'} text-center"
											bind:value={$orderApproveData.products[id]}
										/>
									</div>
								</td>
							{:else if finalPrice}
								{@const textColor =
									finalPrice && initialPrice
										? finalPrice > initialPrice
											? 'text-error'
											: finalPrice < initialPrice
												? 'text-success'
												: ''
										: ''}
								<td class="text-center font-mono text-base font-semibold {textColor}">
									{parsePrice($i18n.currency, finalPrice)}
								</td>
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
											{l.viewProgress}
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

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input[type='number'] {
		appearance: textfield;
		-moz-appearance: textfield;
	}
</style>
