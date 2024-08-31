import { derived, get, writable } from 'svelte/store';
import type { StandardPcb } from '../zod/products/standardPcb.schema';
import type { AdvancedPcb } from '../zod/products/advancedPcb.schema';
import type { FlexiblePcb } from '../zod/products/flexiblePcb.schema';
import type { Assembly } from '../zod/products/assembly.schema';
import type { Stencil } from '../zod/products/stencil.schema';
import { defaultProducts } from '$lib/data/products/defaultProducts';
import cloneDeep from 'lodash.clonedeep';
import { ui } from './ui.store';
import { trpc } from '../trpc/client';
import { tce } from '../trpc/te';
import { page } from '$app/stores';
import { lg } from './i18n.store';
import { goto, invalidateAll } from '$app/navigation';
import { supabase } from '$lib/client/supabase';
import { nanoid } from 'nanoid';
import type { PageData } from '../routes/instant-quote/edit/$types';

export type ProductType = 'standardPcb' | 'advancedPcb' | 'flexiblePcb' | 'assembly' | 'stencil';

export interface Quote {
	init: boolean;
	isEdit: boolean;
	productType: ProductType;
	files: { [k in ProductType]?: File };
	standardPcb: StandardPcb;
	advancedPcb: AdvancedPcb;
	flexiblePcb: FlexiblePcb;
	assembly: Assembly;
	stencil: Stencil;
}

export const quote = (() => {
	const { subscribe, set, update } = writable<Quote>({
		init: false,
		isEdit: false,
		productType: 'standardPcb',
		files: {},
		...cloneDeep(defaultProducts)
	});

	const reset = () =>
		update((state) => ({
			...state,
			files: {},
			...cloneDeep(defaultProducts)
		}));

	const init = async () => {
		const { product, productType } = get(page).data as PageData;
		if (!product) {
			set({
				init: true,
				isEdit: false,
				productType: 'standardPcb',
				files: {},
				...cloneDeep(defaultProducts)
			});
		} else {
			set({
				init: true,
				isEdit: true,
				productType: productType as ProductType,
				files: {},
				...cloneDeep(defaultProducts),
				[productType as ProductType]: product
			});
		}
	};

	const upsertProduct = (orderId?: string) =>
		ui.loaderWrapper({}, async () => {
			const l = get(lg).instantQuote.upsertProduct;
			const $page = get(page);
			const isEdit = $page.url.searchParams.get('id') !== null;
			const id = $page.url.searchParams.get('id');
			const { productType, files, ...products } = get(quote);
			const selectedProduct = products[productType];
			const file = files[productType];

			selectedProduct.id = id ?? nanoid();
			if (isEdit && selectedProduct.fileName) {
				await supabase.storage.from('Gerber Files').remove([selectedProduct.fileName]);
			}
			if (file) {
				ui.setLoader({ title: l.uploadingFiles });
				selectedProduct.fileName = `${selectedProduct.id}__${file.name}`;
				const { error } = await supabase.storage.from('Gerber Files').upload(selectedProduct.fileName, file);
				if (error) return ui.setAlertModal({ title: l.uploadFileError, body: error.message });
			}

			ui.setLoader({ title: isEdit ? 'Updating Product Specifications' : orderId ? l.addingOrder : l.savingCart });
			await trpc()
				.order.upsertProduct.mutate({
					orderId: orderId ?? $page.data.cart.id,
					[productType]: selectedProduct
				})
				.catch((e) =>
					tce(e, {
						callback: async () => {
							if (selectedProduct.fileName)
								await supabase.storage.from('Gerber Files').remove([selectedProduct.fileName]);
						},
						showModal: {
							title: isEdit ? 'Failed to update product' : orderId ? l.addOrderError : l.saveCartError,
							retryFn: () => upsertProduct(orderId)
						}
					})
				);

			ui.setToast({
				title: isEdit ? 'Product updated successfully' : orderId ? l.addOrderSuccess : l.saveCartSuccess,
				alertClasses: 'alert-success'
			});
			reset();
			await invalidateAll();
			await goto(`/order?id=${orderId ?? $page.data.cart.id}`);
		})();

	return { subscribe, set, update, reset, init, upsertProduct };
})();

export const quoteError = derived(quote, ({ standardPcb, assembly, stencil }) => ({
	standardPcb: {
		name: standardPcb.name.length < 1,
		differentDesign: standardPcb.differentDesign < 1,
		length: standardPcb.length < 1,
		width: standardPcb.width < 1,
		quantity: standardPcb.quantity < 1
	},
	advancedPcb: {},
	flexiblePcb: {},
	assembly: {
		name: assembly.name.length < 1,
		quantity: assembly.quantity < 1,
		uniqueParts: assembly.uniqueParts < 0,
		smdParts: assembly.smdParts < 0,
		bgaParts: assembly.bgaParts < 0,
		throughHoleParts: assembly.throughHoleParts < 0,
		xrayTest: assembly.xrayTest < 0
	},
	stencil: {
		name: stencil.name.length < 1,
		quantity: stencil.quantity < 1
	}
}));
