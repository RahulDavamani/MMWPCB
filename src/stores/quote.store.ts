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
			console.log(file?.name);
			if (file) {
				ui.setLoader({ title: l.uploadingFiles });
				selectedProduct.fileName = `${selectedProduct.id}-${file.name}`;
				const { error } = await supabase.storage.from('Gerber Files').upload(selectedProduct.fileName, file);
				if (error) return ui.setAlertModal({ title: l.uploadFileError, body: error.message });
			}

			ui.setLoader({ title: orderId ? l.addingOrder : l.savingCart });
			await trpc()
				.order.upsertProduct.query({
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

export const quoteError = derived(quote, ($quote) => {
	let errors = {} as {
		standardPcb: { [k in keyof StandardPcb]?: string };
		advancedPcb: { [k in keyof AdvancedPcb]?: string };
		flexiblePcb: { [k in keyof FlexiblePcb]?: string };
		assembly: { [k in keyof Assembly]?: string };
		stencil: { [k in keyof Stencil]?: string };
	};
	switch ($quote.product) {
		case 'standardPcb': {
			const l = get(lg).instantQuote.standardPcb;
			const { name, fileName, differentDesign, length, width } = $quote.standardPcb;
			errors = {
				...errors,
				standardPcb: {
					name: name.length < 1 ? l.name.error : undefined,
					fileName: fileName === 'error' ? l.file.error : undefined,
					differentDesign: differentDesign < 1 ? l.differentDesign.error : undefined,
					length: length < 1 ? l.size.error : undefined,
					width: width < 1 ? l.size.error : undefined
				}
			};
			break;
		}

		default:
			break;
	}
	return errors;
});
