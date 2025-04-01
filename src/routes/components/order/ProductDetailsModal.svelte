<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Modal from '../../components/UI/Modal.svelte';
	import { lg } from '../../../stores/i18n.store';
	import Loader from '../../components/UI/Loader.svelte';
	import { order } from '../../../stores/order.store';
	import { productDetails as pd, type ProductType } from '../../../stores/product.store';

	$: l = $lg.order.productsTable.productDetails;

	let modalId = 'productDetailsModal';

	$: ({ id } = $order);

	export let productDetailsId: string | undefined = undefined;
	let productDetails: RouterOutput['order']['getProduct'] | undefined;

	const fetchProductDetails = async () => {
		if (!productDetailsId) return;
		productDetails = undefined;
		productDetails = await trpc()
			.order.getProduct.query({ orderId: id, id: productDetailsId })
			.catch((e) => tce(e, { callback: () => closeModal(modalId), showModal: { title: l.failedToFetch } }));
	};

	onMount(async () => onShowModal(modalId, fetchProductDetails));

	const formatEntries = (entries: [string, unknown]): { key?: string; value?: any } => {
		if (!productDetails) return {};
		// @ts-ignore
		const pd = $pd[productDetails.productType as ProductType][entries[0]];
		const key = pd?.l?.title ?? entries[0];
		const value = (pd?.parseValue ? pd.parseValue(entries[1]) : entries[1]) ?? '-';

		return { key, value };
	};
</script>

<Modal {modalId} title={l.title} boxClasses="max-w-5xl w-full">
	{#if !productDetails}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="border shadow rounded-lg grid grid-cols-4">
			{#each Object.entries(productDetails.product) as entries}
				{@const { key, value } = formatEntries(entries)}
				<div class="p-2 border font-semibold bg-primary bg-opacity-5">
					{key}
				</div>
				<div class="p-2 border">{value}</div>
			{/each}
		</div>
	{/if}
</Modal>
