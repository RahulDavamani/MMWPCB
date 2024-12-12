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
import { customAlphabet } from 'nanoid';
import type { PageData } from '../routes/instant-quote/edit/$types';
import { productDetails, productTypes, type ProductType } from './product.store';
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
	buildTime: { name: string; value: number; price: number };
}

export const quote = (() => {
	const { subscribe, set, update } = writable<Quote>({
		init: false,
		isEdit: false,
		productType: 'standardPcb',
		products: cloneDeep(defaultProducts),
		files: {},
		buildTime: { name: '24 Hours', value: 86400, price: 5 }
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
				files: {},
				buildTime: { name: '24 Hours', value: 86400, price: 5 }
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
				files: {},
				buildTime: { name: '24 Hours', value: 86400, price: 5 }
			});
		}
	};

	const upsertProduct = (orderId?: string) =>
		ui.loaderWrapper({}, async () => {
			const l = get(lg).instantQuote.upsertProduct;
			const $page = get(page);
			const isEdit = $page.url.searchParams.get('id') !== null;
			const id = $page.url.searchParams.get('id');
			const { productType, products, buildTime, files } = get(quote);
			const selectedProduct = products[productType];

			const { total } = get(quotePrice);
			selectedProduct.buildTime = buildTime.value;
			selectedProduct.initialPrice = total;

			const file = files[productType];
			selectedProduct.id = id ?? customAlphabet('1234567890', 10)();
			if (isEdit && selectedProduct.fileName)
				await supabase.storage.from('Product Files').remove([selectedProduct.fileName]);

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
								await supabase.storage.from('Product Files').remove([selectedProduct.fileName]);
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
			await goto(`/orders/${orderId ?? $page.data.cart.id}`);
		})();

	return { subscribe, set, update, reset, init, upsertProduct };
})();

export const quotePrice = derived(quote, ($quote) => {
	let chargeDetails: { name: string; price: number | null }[] = [];
	let total: number | null = null;
	if ($quote.productType === 'standardPcb') {
		const { length, width, quantity, material, layers, rogers, thickness, surfaceFinish } = $quote.products.standardPcb;
		if (material === 'FR_4') {
			if (layers === 2)
				chargeDetails = [
					{ name: 'Material Price', price: 270 },
					{ name: 'Engineering Price', price: 67.5 },
					{ name: 'Film Price', price: 135 }
				];
			if (layers === 4)
				chargeDetails = [
					{ name: 'Material Price', price: 405 },
					{ name: 'Engineering Price', price: 168.75 },
					{ name: 'Film Price', price: 180 }
				];
			if (layers === 6)
				chargeDetails = [
					{ name: 'Material Price', price: 540 },
					{ name: 'Engineering Price', price: 303.75 },
					{ name: 'Film Price', price: 225 }
				];
			if (layers === 8)
				chargeDetails = [
					{ name: 'Material Price', price: 652.5 },
					{ name: 'Engineering Price', price: 393.75 },
					{ name: 'Film Price', price: 2700 }
				];
		}

		if (material === 'ROGERS') {
			if (rogers === 'ROGERS_5880') {
				if (layers === 2)
					if (thickness < 0.127)
						chargeDetails = [
							{ name: 'Material Price', price: 9000 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.254)
						chargeDetails = [
							{ name: 'Material Price', price: 8550 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.508)
						chargeDetails = [
							{ name: 'Material Price', price: 8550 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.787)
						chargeDetails = [
							{ name: 'Material Price', price: 10125 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 1.524)
						chargeDetails = [
							{ name: 'Material Price', price: 19350 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];

				if (layers === 4)
					chargeDetails = [
						{ name: 'Material Price', price: 27000 },
						{ name: 'Engineering Price', price: 303.75 },
						{ name: 'Film Price', price: 180 }
					];

				if (layers === 6)
					chargeDetails = [
						{ name: 'Material Price', price: 45000 },
						{ name: 'Engineering Price', price: 393.75 },
						{ name: 'Film Price', price: 225 }
					];
			}

			if (rogers === 'ROGERS_4350') {
				if (layers === 2)
					if (thickness < 0.1)
						chargeDetails = [
							{ name: 'Material Price', price: 1350 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.254)
						chargeDetails = [
							{ name: 'Material Price', price: 1125 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.508)
						chargeDetails = [
							{ name: 'Material Price', price: 1125 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.762)
						chargeDetails = [
							{ name: 'Material Price', price: 1125 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 1)
						chargeDetails = [
							{ name: 'Material Price', price: 1800 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 1.524)
						chargeDetails = [
							{ name: 'Material Price', price: 3375 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];

				if (layers === 4)
					chargeDetails = [
						{ name: 'Material Price', price: 4950 },
						{ name: 'Engineering Price', price: 303.75 },
						{ name: 'Film Price', price: 180 }
					];

				if (layers === 6)
					chargeDetails = [
						{ name: 'Material Price', price: 7875 },
						{ name: 'Engineering Price', price: 393.75 },
						{ name: 'Film Price', price: 225 }
					];
			}

			if (rogers === 'ROGERS_4003') {
				if (layers === 2)
					if (thickness < 0.2)
						chargeDetails = [
							{ name: 'Material Price', price: 1350 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.508)
						chargeDetails = [
							{ name: 'Material Price', price: 1125 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 0.813)
						chargeDetails = [
							{ name: 'Material Price', price: 1462.5 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];
					else if (thickness < 1.524)
						chargeDetails = [
							{ name: 'Material Price', price: 3375 },
							{ name: 'Engineering Price', price: 67.5 },
							{ name: 'Film Price', price: 135 }
						];

				if (layers === 4)
					chargeDetails = [
						{ name: 'Material Price', price: 4950 },
						{ name: 'Engineering Price', price: 303.75 },
						{ name: 'Film Price', price: 180 }
					];

				if (layers === 6)
					chargeDetails = [
						{ name: 'Material Price', price: 7875 },
						{ name: 'Engineering Price', price: 393.75 },
						{ name: 'Film Price', price: 225 }
					];
			}
		}

		if (chargeDetails.length === 0) {
			chargeDetails = [{ name: 'PCB Price', price: null }];
			total = null;
		} else {
			const area = ((length / 10) * (width / 10) * quantity) / 10000;
			chargeDetails = chargeDetails.map((charge) => ({ ...charge, price: (charge.price ?? 0) * area }));
			total = chargeDetails.reduce((acc, charge) => acc + (charge.price ?? 0), 0);
		}

		if (surfaceFinish === 'IMMERSION_GOLD') {
			chargeDetails.push({ name: 'Surface Finish', price: 405 });
			if (total !== null) total += 405;
		}
		if (surfaceFinish === 'IMMERSION_TIN') {
			chargeDetails.push({ name: 'Surface Finish', price: 45 });
			if (total !== null) total += 45;
		}
		if (surfaceFinish === 'OSP') {
			chargeDetails.push({ name: 'Surface Finish', price: 22.5 });
			if (total !== null) total += 22.5;
		}
		if (surfaceFinish === 'ENEPIG') {
			chargeDetails.push({ name: 'Surface Finish', price: 585 });
			if (total !== null) total += 585;
		}
	}

	if ($quote.productType === 'assembly') {
		const { quantity, uniqueParts, smdParts, bgaParts, throughHoleParts } = $quote.products.assembly;
		const totalParts = uniqueParts + smdParts + bgaParts + throughHoleParts;

		let price: number;
		if (totalParts < 100) price = 162;
		else if (totalParts < 499) price = 214;
		else if (totalParts < 999) price = 337.5;
		else if (totalParts < 1999) price = 427.5;
		else if (totalParts < 2999) price = 697.5;
		else if (totalParts < 3999) price = 967.5;
		else price = 1238;

		chargeDetails = [{ name: 'PCBA Price', price: price * quantity }];
		total = price * quantity;
	}

	if ($quote.productType === 'stencil') {
		const { quantity, length, width } = $quote.products.stencil;
		const area = length * width;

		let price: number | null;
		if (area < 173900) price = 162;
		else if (area < 218400) price = 214;
		else if (area < 357500) price = 337.5;
		else if (area < 341056) price = 427.5;
		else if (area < 541696) price = 697.5;
		else price = null;

		chargeDetails = [{ name: 'Stencil Price', price: price !== null ? price * quantity : null }];
		total = price !== null ? price * quantity : null;
	}

	return { chargeDetails, total: total !== null ? total + $quote.buildTime.price : null };
});

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
