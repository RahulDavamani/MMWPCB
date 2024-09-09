import { page } from '$app/stores';
import { derived } from 'svelte/store';
import type { PageData } from '../routes/order/$types';
import { ui } from './ui.store';
import { trpc } from '../trpc/client';
import { tce } from '../trpc/te';
import { goto, invalidateAll } from '$app/navigation';
import { closeModal } from '$lib/client/modal';
import type { RouterOutput } from '../trpc/routers/app.router';
import { supabase } from '$lib/client/supabase';
import { productTypes } from './product.store';
import { lg } from './i18n.store';

export const order = derived([lg, page, productTypes], ([$lg, $page, $productTypes]) => {
	const l = $lg.order;
	// Data
	const {
		id,
		createdAt,
		updatedAt,
		status,
		standardPcbs,
		advancedPcbs,
		flexiblePcbs,
		assemblies,
		stencils,
		timeline,
		deliveryAddress,
		shippingInfo,
		reviewMessages,
		paymentInfo,
		deliveryStatuses
	} = ($page.data as PageData).order;

	// Derived Data
	const editable = ['CART', 'SAVED', 'REJECTED'].includes(status);
	const showFinalPrice = !['CART', 'SAVED', 'REVIEW', 'REJECTED'].includes(status);
	const showFabrication = ['FABRICATION', 'DELIVERY', 'COMPLETED'].includes(status);

	const products = [
		...standardPcbs.map((p) => ({ ...p, type: $productTypes.standardPcb })),
		...advancedPcbs.map((p) => ({ ...p, type: $productTypes.advancedPcb })),
		...flexiblePcbs.map((p) => ({ ...p, type: $productTypes.flexiblePcb })),
		...assemblies.map((p) => ({ ...p, type: $productTypes.assembly })),
		...stencils.map((p) => ({ ...p, type: $productTypes.stencil }))
	];

	const fileNames = products.map((p) => p.fileName).filter(Boolean) as string[];

	const totalInitialPrice = products.reduce((acc, cur) => acc + cur.initialPrice, 0);
	const totalFinalPrice = products.reduce((acc, cur) => acc + (cur.finalPrice ?? 0), 0);

	const totalItemsPrice = showFinalPrice ? totalFinalPrice : totalInitialPrice;
	const shippingPrice = shippingInfo?.price ?? 0;
	const discount = totalItemsPrice * 0.1;
	const taxes = (totalItemsPrice + shippingPrice - discount) * 0.25;
	const orderTotal = totalItemsPrice + shippingPrice - discount + taxes;

	const estDeliveryDate = new Date().toDateString();
	const weight = products.reduce((acc, cur) => acc + cur.weight, 0);

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

	const saveOrderError = products.length === 0 ? l.submitReview.noProducts : undefined;

	// Methods
	const selectAddress = async (address: RouterOutput['address']['get'][number]) =>
		ui.loaderWrapper({ title: l.deliveryAddress.updatingAddress }, async () => {
			closeModal('selectAddressModal');
			await trpc()
				.order.selectDeliveryAddress.mutate({ ...address, addressId: address.id, id })
				.catch((e) =>
					tce(e, { showModal: { title: l.deliveryAddress.selectAddressError, retryFn: () => selectAddress(address) } })
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

	const submitReview = ui.loaderWrapper({ title: l.submitReview.submittingOrder }, async () => {
		await trpc()
			.order.submitReview.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: l.submitReview.submitOrderSuccess, retryFn: submitReview } }));

		await invalidateAll();
		await goto(`/order?id=${id}`);
		ui.setToast({ title: l.submitReview.submitOrderSuccess, alertClasses: 'alert-success' });
	});

	const saveOrder = ui.loaderWrapper({ title: l.saveOrder.savingOrder }, async () => {
		await trpc()
			.order.save.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: l.saveOrder.saveOrderError, retryFn: saveOrder } }));

		await invalidateAll();
		await goto(`/order?id=${id}`);
		ui.setToast({ title: l.saveOrder.saveOrderSuccess, alertClasses: 'alert-success' });
	});

	const cancelReview = ui.loaderWrapper({ title: l.cancelReview.cancellingReview }, async () => {
		await trpc()
			.order.cancelReview.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: l.cancelReview.cancelReviewError, retryFn: cancelReview } }));

		await invalidateAll();
		ui.setToast({ title: l.cancelReview.cancelReviewSuccess, alertClasses: 'alert-success' });
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
					if (fileName) await supabase.storage.from('Gerber Files').remove([fileName]);
				} else await supabase.storage.from('Gerber Files').remove(fileNames);

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
		await supabase.storage.from('Gerber Files').remove(fileNames);
		await trpc()
			.order.remove.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: l.removeOrder.removeOrderError, retryFn: removeOrder } }));

		ui.setToast({ title: l.removeOrder.removeOrderSuccess });
		goto('/orders');
	});

	return {
		id,
		createdAt,
		updatedAt,
		status,

		standardPcbs,
		advancedPcbs,
		flexiblePcbs,
		assemblies,
		stencils,
		timeline,

		deliveryAddress,
		shippingInfo,
		reviewMessages,
		paymentInfo,
		deliveryStatuses,

		editable,
		showFinalPrice,
		showFabrication,

		products,

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

		submitReviewError,
		saveOrderError,

		selectAddress,
		selectShipping,

		submitReview,
		saveOrder,
		cancelReview,

		showRemoveProductModal,
		showRemoveOrderModal
	};
});
