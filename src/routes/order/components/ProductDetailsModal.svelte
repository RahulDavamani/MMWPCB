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
	import { order } from '../../../stores/order.store';

	let modalId = 'productDetailsModal';

	$: ({ id } = $order);

	export let productDetailsId: string | undefined = undefined;
	let productDetails: RouterOutput['order']['getProduct'] | undefined;

	const fetchProductDetails = async () => {
		if (!productDetailsId) return;
		productDetails = undefined;
		productDetails = await trpc()
			.order.getProduct.query({ orderId: id, id: productDetailsId })
			.catch((e) =>
				tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to fetch product details' } })
			);
	};

	onMount(async () => onShowModal(modalId, fetchProductDetails));

	const formatEntries = (entries: [string, unknown]): { key?: string; value?: any } => {
		if (!productDetails) return {};
		const l = $lg.instantQuote[productDetails.productType as keyof Lang['instantQuote']];
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
			{#each Object.entries(productDetails.product) as entries}
				{@const { key, value } = formatEntries(entries)}
				{#if key && value}
					<div class="p-2 border font-semibold bg-primary bg-opacity-5">
						{key}
					</div>
					<div class="p-2 border">{value}</div>
				{/if}
			{/each}
		</div>
	{/if}
</Modal>
