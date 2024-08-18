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

export interface Quote {
	product: 'standardPcb' | 'advancedPcb' | 'flexiblePcb' | 'assembly' | 'stencil';
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

	const upsertProduct = (orderId?: string) => {
		ui.loaderWrapper({ title: orderId ? 'Adding to Order' : 'Saving to Cart' }, async () => {
			const $page = get(page);
			const { standardPcb } = get(quote);
			await trpc()
				.order.upsertProduct.query({ orderId: orderId ?? $page.data.cart.id, standardPcb })
				.catch(tce);

			ui.setToast({ title: 'Product added to cart', alertClasses: 'alert-success' });
			reset();
			goto('/submit-order');
		})();
	};

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
			const { name, differentDesign, length, width } = $quote.standardPcb;
			errors = {
				...errors,
				standardPcb: {
					name: name.length < 1 ? l.name.error : undefined,
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
