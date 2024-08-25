<script lang="ts">
	import { onMount } from 'svelte';
	import type { ProductType } from '../../../stores/quote.store';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Modal from '../../components/UI/Modal.svelte';
	import { lg } from '../../../stores/i18n.store';
	import type { Lang } from '$lib/locales/en';
	import Loader from '../../components/UI/Loader.svelte';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import { productTypes } from '../../../stores/product.store';

	let modalId = 'productDetailsModal';

	$: ({
		order: { id: orderId }
	} = $page.data as PageData);

	export let productDetailsId: string | undefined = undefined;
	let productDetails: RouterOutput['order']['getProduct'] | undefined;

	const fetchProductDetails = async () => {
		if (!productDetailsId) return;
		productDetails = undefined;
		productDetails = await trpc()
			.order.getProduct.query({ orderId, id: productDetailsId })
			.catch((e) =>
				tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to fetch product details' } })
			);
	};

	onMount(async () => onShowModal(modalId, fetchProductDetails));

	const formatEntries = (productType: string, entries: [string, unknown]) => {
		const l = $lg.instantQuote[productType as keyof Lang['instantQuote']];
		console.log(l);
		const key = l[entries[0]]?.title;
		const value = entries[1] ?? '-';

		return { key, value };
	};
</script>

<Modal {modalId} title="Product Details" boxClasses="max-w-5xl w-full">
	{#if !productDetails}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="border shadow rounded-lg grid grid-cols-4">
			{#each Object.entries(productDetails) as [productType, products]}
				{@const pType = Object.values($productTypes).find((p) => p.keys === productType)}
				{#if products.length > 0}
					{#each Object.entries(products[0]) as entries}
						{@const { key, value } = formatEntries(pType?.key ?? '', entries)}
						{#if key && value}
							<div class="p-2 border font-semibold bg-primary bg-opacity-5">
								{key}
							</div>
							<div class="p-2 border">{value}</div>
						{/if}
					{/each}
				{/if}
			{/each}
		</div>
	{/if}
</Modal>
