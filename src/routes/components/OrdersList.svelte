<script lang="ts">
	import { lg } from '../../stores/i18n.store';
	import type { RouterOutput } from '../../trpc/routers/app.router';
	import { orderStatuses } from '../../stores/order.store';
	import { trpc } from '../../trpc/client';
	import { tce } from '../../trpc/te';
	import Icon from '@iconify/svelte';
	import { productTypes } from '../../stores/product.store';
	import { onMount } from 'svelte';
	import Loader from './UI/Loader.svelte';
	import UserDetailsModal from '../portal/components/UserDetailsModal.svelte';
	import { showModal } from '$lib/client/modal';

	$: l = $lg.orders;

	export let isPortal: boolean = false;
	export let userId: string | undefined = undefined;

	type Data = RouterOutput['order']['getAll'];
	let data: Data | undefined;

	let filters = {
		search: '',
		status: null,
		page: 1
	};

	const fetchOrders = async (page?: number) => {
		filters.page = page ?? 1;
		data = undefined;
		data = await trpc().order.getAll.query({ userId, filters }).catch(tce);
	};

	onMount(fetchOrders);

	let statuses = [
		'SAVED',
		'REVIEW',
		'REJECTED',
		'APPROVED',
		'CONFIRMED',
		'FABRICATION',
		'DELIVERY',
		'COMPLETED',
		'REFUNDED'
	] as (keyof typeof $orderStatuses)[];

	let userDetailsId: string | undefined = undefined;
</script>

<div class="flex gap-4">
	<input
		type="text"
		class="input input-sm input-bordered w-full"
		placeholder={$lg.common.typeHere}
		bind:value={filters.search}
	/>

	<select class="select select-sm select-bordered min-w-60" bind:value={filters.status}>
		<option value={null}>{l.allOrders}</option>
		{#each statuses as status}
			<option value={status}>{$orderStatuses[status]}</option>
		{/each}
	</select>

	<button class="btn btn-sm btn-primary" on:click={() => fetchOrders()}>{$lg.common.search}</button>

	<a href="/order" class="btn btn-secondary btn-outline btn-sm">
		<Icon icon="mdi:cart" />
		{l.viewCart}
	</a>
</div>

{#if !data}
	<Loader title={l.fetchingOrders} overlay={false} fixed={false} classes="mt-40" />
{:else}
	{@const { total, orders } = data}
	{#if total === 0}
		<div class="text-center mt-20">
			<div class="font-semibold text-xl">{l.noOrders}</div>
			<div>{l.checkFilters}</div>
			{#if !isPortal}
				<a href="/instant-quote" class="btn btn-sm btn-primary mt-4">{l.getInstantQuote}</a>
			{/if}
		</div>
	{:else}
		<div class="my-8 space-y-6">
			{#each orders as { id, createdAt, status, deliveryAddress, user, standardPcbs, advancedPcbs, flexiblePcbs, rigidFlexes, assemblies, stencils, cncs, sheetMetals, threePrintings, injectionMoldings, vacuumCastings }}
				{@const products = [
					...standardPcbs.map((p) => ({ ...p, type: 'standardPcb' })),
					...advancedPcbs.map((p) => ({ ...p, type: 'advancedPcb' })),
					...flexiblePcbs.map((p) => ({ ...p, type: 'flexiblePcb' })),
					...rigidFlexes.map((p) => ({ ...p, type: 'rigidFlex' })),
					...assemblies.map((p) => ({ ...p, type: 'assembly' })),
					...stencils.map((p) => ({ ...p, type: 'stencil' })),
					...cncs.map((p) => ({ ...p, type: 'cnc' })),
					...sheetMetals.map((p) => ({ ...p, type: 'sheetMetal' })),
					...threePrintings.map((p) => ({ ...p, type: 'threePrinting' })),
					...injectionMoldings.map((p) => ({ ...p, type: 'injectionMolding' })),
					...vacuumCastings.map((p) => ({ ...p, type: 'vacuumCasting' }))
				]}
				<div class="border rounded-lg shadow p-4 flex">
					<div class="w-60 flex flex-col justify-between gap-4">
						<div>
							<div class="font-semibold">
								<span>{l.orderNo} :</span>
								<span class="text-lg text-primary font-mono ml-1">#{id}</span>
							</div>

							<div class="font-semibold opacity-70 text-sm">
								{createdAt.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
							</div>

							{#if !userId}
								<div class="text-sm">
									<span class="font-semibold">{l.createdBy} :</span>
									<button
										class="btn btn-xs text-sm btn-link italic p-0 text-accent"
										on:click={() => {
											userDetailsId = user.id;
											showModal('userDetailsModal');
										}}
									>
										{user.firstName}
										{user.lastName}
									</button>
								</div>
							{/if}

							<div class="text-sm mt-2">
								<div class="font-semibold">{l.deliveryAddress}:</div>
								<div class="max-h-20 overflow-auto">
									{#if deliveryAddress}
										{@const { name, addressLine1, addressLine2, city, state, country, postalCode } = deliveryAddress}
										<span class="italic">{name}</span>
										, {addressLine1}, {addressLine2}, {city}, {state}, {country} - {postalCode}
									{:else}
										{$lg.common.notSelected}
									{/if}
								</div>
							</div>
						</div>

						<div class="badge badge-secondary shadow rounded-lg p-3 cursor-default font-bold">
							{$orderStatuses[status]}
						</div>
					</div>
					<div class="divider divider-horizontal" />

					<div class="grow">
						<div class="flex justify-between mb-2">
							<div>
								<span class="text-lg font-semibold">{l.products}</span>
								<span class="font-mono">({products.length})</span>
							</div>
							<a href="orders/{id}" class="btn btn-xs btn-ghost gap-1 font-bold text-info">
								{l.orderDetails}
								<Icon icon="mdi:chevron-right" width={16} />
							</a>
						</div>
						<div class="divide-y-2 max-h-40 overflow-auto">
							{#each products as { name, type, quantity, initialPrice, finalPrice }}
								{@const productType = $productTypes[type]}
								<div class="p-2 flex justify-between items-center">
									<div class="flex items-center">
										<div>
											<span class="text-xl font-semibold mr-1">{quantity}</span>
											<span>x</span>
										</div>

										{#await import(`$lib/assets/products/${productType.img}.png`) then { default: src }}
											<img {src} alt="icon" width={45} class="mx-5" />
										{/await}

										<div>
											<div class="font-semibold text-primary">{name}</div>
											<div class="italic opacity-75">{productType.title}</div>
										</div>
									</div>

									<div class="text-end">
										{#if finalPrice}
											<div class="font-mono text-xl font-semibold leading-5 mt-1">
												${finalPrice.toFixed(2)}
											</div>
											<div class="text-xs opacity-75 italic">{l.finalPrice}</div>
										{:else}
											<div class="font-mono text-xl font-semibold leading-5 mt-1">
												{initialPrice ? `$${initialPrice.toFixed(2)}` : 'RFQ'}
											</div>
											<div class="text-xs opacity-75 italic">{l.quotePrice}</div>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex justify-end gap-2">
			<button
				class="btn btn-sm btn-square btn-primary {filters.page === 1 && 'btn-disabled'}"
				on:click={() => fetchOrders(filters.page - 1)}
			>
				<Icon icon="mdi:chevron-left" width={20} />
			</button>
			<button class="btn btn-sm font-semibold no-animation cursor-default">
				{$lg.common.page}
				{filters.page}
			</button>
			<button
				class="btn btn-sm btn-square btn-primary {filters.page > total / 10 && 'btn-disabled'}"
				on:click={() => fetchOrders(filters.page + 1)}
			>
				<Icon icon="mdi:chevron-right" width={20} />
			</button>
		</div>
		<div class="flex justify-end mt-2 font-semibold opacity-60">
			{$lg.common.results}: {(filters.page - 1) * 10 + 1} - {(filters.page - 1) * 10 + orders.length} of {total}
		</div>
	{/if}
{/if}

<UserDetailsModal id={userDetailsId} />
