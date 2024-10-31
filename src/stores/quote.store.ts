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
import { productDetails, type ProductType } from './product.store';
import type { RigidFlex } from '../zod/products/rigidFlex.schema';
import type { CNC } from '../zod/products/cnc.schema';
import type { VacuumCasting } from '../zod/products/vacuumCasting.schema';
import type { InjectionMolding } from '../zod/products/injectionMolding.schema';
import type { ThreePrinting } from '../zod/products/threePrinting.schema';
import type { SheetMetal } from '../zod/products/sheetMetal.schema';

export interface Quote {
	init: boolean;
	isEdit: boolean;
	productType: ProductType;
	products: {
		standardPcb: StandardPcb;
		advancedPcb: AdvancedPcb;
		flexiblePcb: FlexiblePcb;
		rigidFlex: RigidFlex;
		assembly: Assembly;
		stencil: Stencil;
		cnc: CNC;
		sheetMetal: SheetMetal;
		threePrinting: ThreePrinting;
		injectionMolding: InjectionMolding;
		vacuumCasting: VacuumCasting;
	};
	files: { [k in ProductType]?: File };
}

export const quote = (() => {
	const { subscribe, set, update } = writable<Quote>({
		init: false,
		isEdit: false,
		productType: 'standardPcb',
		products: cloneDeep(defaultProducts),
		files: {}
	});

	const reset = () =>
		update((state) => ({
			...state,
			products: cloneDeep(defaultProducts),
			files: {}
		}));

	const init = async () => {
		const { product, productType } = get(page).data as PageData;
		if (!product) {
			set({
				init: true,
				isEdit: false,
				productType: 'standardPcb',
				products: cloneDeep(defaultProducts),
				files: {}
			});
		} else {
			set({
				init: true,
				isEdit: true,
				productType: productType as ProductType,
				products: {
					...cloneDeep(defaultProducts),
					[productType as ProductType]: product
				},
				files: {}
			});
		}
	};

	const upsertProduct = (orderId?: string) =>
		ui.loaderWrapper({}, async () => {
			const l = get(lg).instantQuote.upsertProduct;
			const $page = get(page);
			const isEdit = $page.url.searchParams.get('id') !== null;
			const id = $page.url.searchParams.get('id');
			const { productType, files, products } = get(quote);
			const selectedProduct = products[productType];
			const file = files[productType];

			selectedProduct.id = id ?? nanoid();
			if (isEdit && selectedProduct.fileName) {
				await supabase.storage.from('Product Files').remove([selectedProduct.fileName]);
			}
			if (file) {
				ui.setLoader({ title: l.uploadingFiles });
				selectedProduct.fileName = `${selectedProduct.id}__${file.name}`;
				const { error } = await supabase.storage.from('Product Files').upload(selectedProduct.fileName, file);
				if (error) return ui.setAlertModal({ title: l.uploadFileError, body: error.message });
			}

			ui.setLoader({ title: isEdit ? l.updatingProduct : orderId ? l.addingOrder : l.savingCart });
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
							title: isEdit ? l.updateProductError : orderId ? l.addOrderError : l.saveCartError,
							retryFn: () => upsertProduct(orderId)
						}
					})
				);

			ui.setToast({
				title: isEdit ? l.updateProductSuccess : orderId ? l.addOrderSuccess : l.saveCartSuccess,
				alertClasses: 'alert-success'
			});
			reset();
			await invalidateAll();
			await goto(`/order?id=${orderId ?? $page.data.cart.id}`);
		})();

	return { subscribe, set, update, reset, init, upsertProduct };
})();

export const quoteError = derived([quote, productDetails], ([$quote, $productDetails]) => {
	const standardPcb = (() =>
		Object.fromEntries(
			Object.entries($quote.products.standardPcb).map(([key, value]) => {
				const validate = (
					$productDetails.standardPcb[key as keyof typeof $productDetails.standardPcb] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof StandardPcb]: boolean })();

	const advancedPcb = (() =>
		Object.fromEntries(
			Object.entries($quote.products.advancedPcb).map(([key, value]) => {
				const validate = (
					$productDetails.advancedPcb[key as keyof typeof $productDetails.advancedPcb] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof AdvancedPcb]: boolean })();

	const flexiblePcb = (() =>
		Object.fromEntries(
			Object.entries($quote.products.flexiblePcb).map(([key, value]) => {
				const validate = (
					$productDetails.flexiblePcb[key as keyof typeof $productDetails.flexiblePcb] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof FlexiblePcb]: boolean })();

	const rigidFlex = (() =>
		Object.fromEntries(
			Object.entries($quote.products.rigidFlex).map(([key, value]) => {
				const validate = (
					$productDetails.rigidFlex[key as keyof typeof $productDetails.rigidFlex] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof RigidFlex]: boolean })();

	const assembly = (() =>
		Object.fromEntries(
			Object.entries($quote.products.assembly).map(([key, value]) => {
				const validate = (
					$productDetails.assembly[key as keyof typeof $productDetails.assembly] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof Assembly]: boolean })();

	const stencil = (() =>
		Object.fromEntries(
			Object.entries($quote.products.stencil).map(([key, value]) => {
				const validate = (
					$productDetails.stencil[key as keyof typeof $productDetails.stencil] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof Stencil]: boolean })();

	const cnc = (() =>
		Object.fromEntries(
			Object.entries($quote.products.cnc).map(([key, value]) => {
				const validate = (
					$productDetails.cnc[key as keyof typeof $productDetails.cnc] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof CNC]: boolean })();

	const sheetMetal = (() =>
		Object.fromEntries(
			Object.entries($quote.products.sheetMetal).map(([key, value]) => {
				const validate = (
					$productDetails.sheetMetal[key as keyof typeof $productDetails.sheetMetal] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof SheetMetal]: boolean })();

	const threePrinting = (() =>
		Object.fromEntries(
			Object.entries($quote.products.threePrinting).map(([key, value]) => {
				const validate = (
					$productDetails.threePrinting[key as keyof typeof $productDetails.threePrinting] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof ThreePrinting]: boolean })();

	const injectionMolding = (() =>
		Object.fromEntries(
			Object.entries($quote.products.injectionMolding).map(([key, value]) => {
				const validate = (
					$productDetails.injectionMolding[key as keyof typeof $productDetails.injectionMolding] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof InjectionMolding]: boolean })();

	const vacuumCasting = (() =>
		Object.fromEntries(
			Object.entries($quote.products.vacuumCasting).map(([key, value]) => {
				const validate = (
					$productDetails.vacuumCasting[key as keyof typeof $productDetails.vacuumCasting] as {
						validate?: (val: unknown) => boolean;
					}
				)?.validate;
				return validate ? [key, validate(value)] : [key, false];
			})
		) as { [k in keyof VacuumCasting]: boolean })();

	return {
		standardPcb,
		advancedPcb,
		flexiblePcb,
		rigidFlex,
		assembly,
		stencil,
		cnc,
		sheetMetal,
		threePrinting,
		injectionMolding,
		vacuumCasting
	};
});
