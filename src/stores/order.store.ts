import { page } from '$app/stores';
import { derived, get, writable } from 'svelte/store';
import type { PageData } from '../routes/orders/[id]/$types';
import { ui } from './ui.store';
import { trpc } from '../trpc/client';
import { tce } from '../trpc/te';
import { goto, invalidateAll } from '$app/navigation';
import { closeModal } from '$lib/client/modal';
import type { RouterOutput } from '../trpc/routers/app.router';
import { supabase } from '$lib/client/supabase';
import { productTypes } from './product.store';
import { lg } from './i18n.store';

export const orderStatuses = derived(lg, ($lg) => ({
	CART: $lg.orderStatus.CART,
	SAVED: $lg.orderStatus.SAVED,
	REVIEW: $lg.orderStatus.REVIEW,
	REJECTED: $lg.orderStatus.REJECTED,
	APPROVED: $lg.orderStatus.APPROVED,
	CONFIRMED: $lg.orderStatus.CONFIRMED,
	FABRICATION: $lg.orderStatus.FABRICATION,
	DELIVERY: $lg.orderStatus.DELIVERY,
	COMPLETED: $lg.orderStatus.COMPLETED,
	CANCELLED: $lg.orderStatus.CANCELLED,
	REFUNDED: $lg.orderStatus.REFUNDED
}));

export const orderProductPrices = writable<{ [k in string]: number }>({});

export const order = derived(
	[lg, page, productTypes, orderProductPrices],
	([$lg, $page, $productTypes, $orderProductPrices]) => {
		const l = $lg.order;

		const isPortal = $page.url.pathname.includes('portal');

		const {
			id,
			createdAt,
			completedAt,
			status,
			standardPcbs,
			advancedPcbs,
			flexiblePcbs,
			rigidFlexes,
			assemblies,
			stencils,
			cncs,
			sheetMetals,
			threePrintings,
			injectionMoldings,
			vacuumCastings,
			deliveryAddress,
			shippingInfo,
			reviewMessages,
			paymentInfo,
			deliveryStatuses,
			timeline
		} = ($page.data as PageData).order;

		const products = [
			...standardPcbs.map((p) => ({ ...p, type: $productTypes.standardPcb })),
			...advancedPcbs.map((p) => ({ ...p, type: $productTypes.advancedPcb })),
			...flexiblePcbs.map((p) => ({ ...p, type: $productTypes.flexiblePcb })),
			...rigidFlexes.map((p) => ({ ...p, type: $productTypes.rigidFlex })),
			...assemblies.map((p) => ({ ...p, type: $productTypes.assembly })),
			...stencils.map((p) => ({ ...p, type: $productTypes.stencil })),
			...cncs.map((p) => ({ ...p, type: $productTypes.cnc })),
			...sheetMetals.map((p) => ({ ...p, type: $productTypes.sheetMetal })),
			...threePrintings.map((p) => ({ ...p, type: $productTypes.threePrinting })),
			...injectionMoldings.map((p) => ({ ...p, type: $productTypes.injectionMolding })),
			...vacuumCastings.map((p) => ({ ...p, type: $productTypes.vacuumCasting }))
		];

		const editable = !isPortal && ['CART', 'SAVED', 'REJECTED'].includes(status);
		const showFabrication = ['FABRICATION', 'DELIVERY', 'COMPLETED'].includes(status);

		const fileNames = products.map((p) => p.fileName).filter(Boolean) as string[];

		const totalInitialPrice = products.reduce((acc, cur) => acc + (cur.initialPrice ?? 0), 0);
		const totalFinalPrice = products.reduce((acc, cur) => acc + (cur.finalPrice ?? 0), 0);

		const totalItemsPrice = products[0]?.finalPrice ? totalFinalPrice : totalInitialPrice;
		const shippingPrice = shippingInfo?.price ?? 0;
		const discount = totalItemsPrice * 0.1;
		const taxes = (totalItemsPrice + shippingPrice - discount) * 0.25;
		const orderTotal = totalItemsPrice + shippingPrice - discount + taxes;

		const estDeliveryDate = new Date().toDateString();
		const weight = products.reduce((acc, cur) => acc + cur.weight, 0);

		// Methods
		const selectAddress = async (address: RouterOutput['address']['get'][number]) =>
			ui.loaderWrapper({ title: l.deliveryAddress.updatingAddress }, async () => {
				closeModal('selectAddressModal');
				await trpc()
					.order.selectDeliveryAddress.mutate({ ...address, addressId: address.id, id })
					.catch((e) =>
						tce(e, {
							showModal: { title: l.deliveryAddress.selectAddressError, retryFn: () => selectAddress(address) }
						})
					);

				await invalidateAll();
				ui.setToast({ title: l.deliveryAddress.selectAddressSuccess, alertClasses: 'alert-success' });
			})();

		const selectShipping = (shippingMethod: RouterOutput['shipping']['getMethods'][number]) =>
			ui.loaderWrapper({ title: $lg.shipping.updatingShipping }, async () => {
				closeModal('selectShippingModal');
				await trpc()
					.order.selectShipping.mutate({
						id,
						countryId: shippingMethod.countryId,
						countryName: shippingMethod.country.name,
						methodId: shippingMethod.id,
						methodName: shippingMethod.name,
						price: shippingMethod.price,
						deliveryTime: shippingMethod.deliveryTime,
						restriction: shippingMethod.restriction
					})
					.catch((e) =>
						tce(e, {
							showModal: { title: $lg.shipping.updateShippingError, retryFn: () => selectShipping(shippingMethod) }
						})
					);

				await invalidateAll();
				ui.setToast({ title: $lg.shipping.updateShippingSuccess, alertClasses: 'alert-success' });
			})();

		const submitReviewError =
			products.length === 0
				? l.submitReview.noProducts
				: !shippingInfo
					? l.submitReview.shippingError
					: !deliveryAddress
						? l.submitReview.deliveryError
						: fileNames.length !== products.length
							? l.submitReview.filesNotUploaded
							: undefined;

		const submitReview = ui.loaderWrapper({ title: l.submitReview.submittingOrder }, async () => {
			await trpc()
				.order.submitReview.mutate({ id })
				.catch((e) => tce(e, { showModal: { title: l.submitReview.submitOrderSuccess, retryFn: submitReview } }));

			await invalidateAll();
			await goto(`/orders/${id}`);
			ui.setToast({ title: l.submitReview.submitOrderSuccess, alertClasses: 'alert-success' });
		});

		const saveOrderError = products.length === 0 ? l.submitReview.noProducts : undefined;

		const saveOrder = ui.loaderWrapper({ title: l.saveOrder.savingOrder }, async () => {
			await trpc()
				.order.save.mutate({ id })
				.catch((e) => tce(e, { showModal: { title: l.saveOrder.saveOrderError, retryFn: saveOrder } }));

			await invalidateAll();
			await goto(`/orders/${id}`);
			ui.setToast({ title: l.saveOrder.saveOrderSuccess, alertClasses: 'alert-success' });
		});

		const cancelReview = ui.loaderWrapper({ title: l.cancelReview.cancellingReview }, async () => {
			await trpc()
				.order.cancelReview.mutate({ id })
				.catch((e) => tce(e, { showModal: { title: l.cancelReview.cancelReviewError, retryFn: cancelReview } }));

			await invalidateAll();
			ui.setToast({ title: l.cancelReview.cancelReviewSuccess, alertClasses: 'alert-success' });
		});

		const approveReviewError = (
			products.map((p) => p.finalPrice ?? p.initialPrice ?? $orderProductPrices[p.id] ?? null) as (number | null)[]
		).includes(null)
			? l.approveReview.noPriceError
			: undefined;

		const approveReview = ui.loaderWrapper({ title: l.approveReview.approvingReview }, async () => {
			await trpc()
				.order.approveReview.mutate({
					id,
					products: Object.entries(get(orderProductPrices)).map(([id, finalPrice]) => ({ id, finalPrice }))
				})
				.catch((e) => tce(e, { showModal: { title: l.approveReview.approveReviewError, retryFn: approveReview } }));

			await invalidateAll();
			ui.setToast({ title: l.approveReview.approveReviewSuccess, alertClasses: 'alert-success' });
		});

		const rejectReview = ui.loaderWrapper({ title: l.rejectReview.rejectingReview }, async () => {
			await trpc()
				.order.rejectReview.mutate({ id })
				.catch((e) => tce(e, { showModal: { title: l.rejectReview.rejectReviewError, retryFn: rejectReview } }));

			await invalidateAll();
			ui.setToast({ title: l.rejectReview.rejectReviewSuccess, alertClasses: 'alert-success' });
		});

		const startFabrication = ui.loaderWrapper({ title: l.startFabrication.startingFabrication }, async () => {
			await trpc()
				.order.startFabrication.mutate({ id })
				.catch((e) =>
					tce(e, { showModal: { title: l.startFabrication.startFabricationError, retryFn: startFabrication } })
				);

			await invalidateAll();
			ui.setToast({ title: l.startFabrication.startFabricationSuccess, alertClasses: 'alert-success' });
		});

		const updateFabrication = (id: string, completed: boolean) =>
			ui.loaderWrapper({ title: l.updateFabrication.completingFabrication }, async () => {
				await trpc()
					.order.updateFabrication.mutate({ id, completed })
					.catch((e) =>
						tce(e, {
							showModal: {
								title: l.updateFabrication.updateFabricationError,
								retryFn: () => updateFabrication(id, completed)
							}
						})
					);

				await invalidateAll();
				ui.setToast({ title: l.updateFabrication.updateFabricationSuccess, alertClasses: 'alert-success' });
			})();

		const completeFabrication = ui.loaderWrapper({ title: l.completeFabrication.completingFabrication }, async () => {
			await trpc()
				.order.completeFabrication.mutate({ id })
				.catch((e) =>
					tce(e, { showModal: { title: l.completeFabrication.completeFabricationError, retryFn: completeFabrication } })
				);

			await invalidateAll();
			ui.setToast({ title: l.completeFabrication.completeFabricationSuccess, alertClasses: 'alert-success' });
		});

		const updateDelivery = (id: string, completed: boolean) =>
			ui.loaderWrapper({ title: l.updateDelivery.updatingDelivery }, async () => {
				await trpc()
					.order.updateDelivery.mutate({ id, completed })
					.catch((e) =>
						tce(e, {
							showModal: {
								title: l.updateDelivery.updateDeliveryError,
								retryFn: () => updateDelivery(id, completed)
							}
						})
					);

				await invalidateAll();
				ui.setToast({ title: l.updateDelivery.updateDeliverySuccess, alertClasses: 'alert-success' });
			})();

		const completeOrder = ui.loaderWrapper({ title: l.completeOrder.completingOrder }, async () => {
			await trpc()
				.order.complete.mutate({ id })
				.catch((e) =>
					tce(e, {
						showModal: {
							title: l.completeOrder.completeOrderError,
							retryFn: completeOrder
						}
					})
				);

			await invalidateAll();
			ui.setToast({ title: l.completeOrder.completeOrderSuccess, alertClasses: 'alert-success' });
		});

		const showRemoveProductModal = (id?: string) =>
			ui.setAlertModal({
				title: id ? l.removeProduct.modalTitle : l.removeProduct.modalTitleAll,
				body: l.removeProduct.modalBody,
				actions: [
					{
						name: $lg.common.cancel,
						classes: 'btn-warning',
						onClick: ui.closeAlertModal
					},
					{
						name: $lg.common.remove,
						classes: 'btn-error',
						onClick: () => removeProduct(id)
					}
				]
			});

		const removeProduct = (productId?: string) =>
			ui.loaderWrapper(
				{ title: productId ? l.removeProduct.removingProduct : l.removeProduct.removingProductAll },
				async () => {
					ui.closeAlertModal();
					if (productId) {
						const fileName = products.find((p) => p.id == productId)?.fileName;
						if (fileName) await supabase.storage.from('Product Files').remove([fileName]);
					} else await supabase.storage.from('Product Files').remove(fileNames);

					await trpc()
						.order.removeProduct.mutate({ orderId: id, ids: productId ? [productId] : products.map((p) => p.id) })
						.catch((e) =>
							tce(e, {
								showModal: {
									title: productId ? l.removeProduct.removeProductError : l.removeProduct.removeProductAllError,
									retryFn: () => removeProduct(productId)
								}
							})
						);

					await invalidateAll();
					ui.setToast({
						title: productId ? l.removeProduct.removeProductSuccess : l.removeProduct.removeProductAllSuccess
					});
				}
			)();

		const showRemoveOrderModal = () =>
			ui.setAlertModal({
				title: l.removeOrder.modalTitle,
				body: l.removeOrder.modalBody,
				actions: [
					{
						name: $lg.common.cancel,
						classes: 'btn-warning',
						onClick: ui.closeAlertModal
					},
					{
						name: $lg.common.remove,
						classes: 'btn-error',
						onClick: removeOrder
					}
				]
			});

		const removeOrder = ui.loaderWrapper({ title: l.removeOrder.removingOrder }, async () => {
			ui.closeAlertModal();
			await supabase.storage.from('Product Files').remove(fileNames);
			await trpc()
				.order.remove.mutate({ id })
				.catch((e) => tce(e, { showModal: { title: l.removeOrder.removeOrderError, retryFn: removeOrder } }));

			ui.setToast({ title: l.removeOrder.removeOrderSuccess });
			goto('/orders');
		});

		return {
			isPortal,

			id,
			createdAt,
			completedAt,
			status,

			standardPcbs,
			advancedPcbs,
			flexiblePcbs,
			rigidFlexes,
			assemblies,
			stencils,
			cncs,
			sheetMetals,
			threePrintings,
			injectionMoldings,
			vacuumCastings,

			deliveryAddress,
			shippingInfo,
			reviewMessages,
			paymentInfo,
			deliveryStatuses,
			timeline,

			products,

			editable,
			showFabrication,

			fileNames,
			totalInitialPrice,
			totalFinalPrice,
			totalItemsPrice,
			shippingPrice,
			discount,
			taxes,
			orderTotal,

			estDeliveryDate,
			weight,

			selectAddress,
			selectShipping,

			submitReviewError,
			submitReview,
			saveOrderError,
			saveOrder,
			cancelReview,
			approveReviewError,
			approveReview,
			rejectReview,

			startFabrication,
			updateFabrication,
			completeFabrication,
			updateDelivery,

			completeOrder,

			showRemoveProductModal,
			showRemoveOrderModal
		};
	}
);
