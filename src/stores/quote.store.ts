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
import { goto } from '$app/navigation';
import { supabase } from '$lib/client/supabase';
import { nanoid } from 'nanoid';

export interface Quote {
	product: 'standardPcb' | 'advancedPcb' | 'flexiblePcb' | 'assembly' | 'stencil';
	file?: File;
	standardPcb: StandardPcb;
	advancedPcb: AdvancedPcb;
	flexiblePcb: FlexiblePcb;
	assembly: Assembly;
	stencil: Stencil;
}

export const quote = (() => {
	const { subscribe, set, update } = writable<Quote>({
		product: 'standardPcb',
		...cloneDeep(defaultProducts)
	});

	const reset = () =>
		update((state) => ({
			...state,
			...cloneDeep(defaultProducts)
		}));

	const upsertProduct = (orderId?: string) =>
		ui.loaderWrapper({}, async () => {
			const l = get(lg).instantQuote.upsertProduct;
			const $page = get(page);
			const { product, file, ...products } = get(quote);
			const selectedProduct = products[product];

			selectedProduct.id = nanoid();
			if (file) {
				ui.setLoader({ title: l.uploadingFiles });
				selectedProduct.fileName = `${selectedProduct.id}-${file.name}`;
				const { error } = await supabase.storage.from('Gerber Files').upload(selectedProduct.fileName, file);
				if (error) return ui.setAlertModal({ title: l.uploadFileError, body: error.message });
			}

			ui.setLoader({ title: orderId ? l.addingOrder : l.savingCart });
			await trpc()
				.order.upsertProduct.mutate({
					orderId: orderId ?? $page.data.cart.id,
					[product]: selectedProduct
				})
				.catch((e) =>
					tce(e, {
						callback: async () => {
							if (selectedProduct.fileName)
								await supabase.storage.from('Gerber Files').remove([selectedProduct.fileName]);
						},
						showModal: { title: orderId ? l.addOrderError : l.saveCartError, retryFn: () => upsertProduct(orderId) }
					})
				);

			ui.setToast({ title: orderId ? l.addOrderSuccess : l.saveCartSuccess, alertClasses: 'alert-success' });
			reset();
			await goto('/submit-order');
		})();

	return { subscribe, set, update, reset, upsertProduct };
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
		quantity: assembly.quantity < 1,
		uniqueParts: assembly.uniqueParts < 0,
		smdParts: assembly.smdParts < 0,
		bgaParts: assembly.bgaParts < 0,
		throughHoleParts: assembly.throughHoleParts < 0,
		xrayTest: assembly.xrayTest < 0
	},
	stencil: {
		quantity: stencil.quantity < 1
	}
}));
