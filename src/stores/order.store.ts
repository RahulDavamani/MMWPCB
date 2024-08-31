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

export const order = derived([page, productTypes], ([$page, $productTypes]) => {
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
			? 'No Products Found'
			: !shippingInfo
				? 'Shipping info is not provided'
				: !deliveryAddress
					? 'Delivery address is not provided'
					: fileNames.length !== products.length
						? 'Product files are not uploaded'
						: undefined;

	const saveOrderError = products.length === 0 ? 'No Products Found' : undefined;

	// Methods
	const selectAddress = async (address: RouterOutput['address']['get'][number]) =>
		ui.loaderWrapper({ title: 'Updating address' }, async () => {
			closeModal('selectAddressModal');
			await trpc()
				.order.selectDeliveryAddress.mutate({ ...address, addressId: address.id, id })
				.catch((e) =>
					tce(e, { showModal: { title: 'Failed to select address', retryFn: () => selectAddress(address) } })
				);

			await invalidateAll();
			ui.setToast({ title: 'Delivery address updated successfully', alertClasses: 'alert-success' });
		})();

	const selectShipping = (shippingMethod: RouterOutput['shipping']['getMethods'][number]) =>
		ui.loaderWrapper({ title: 'Updating shipping method' }, async () => {
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
						showModal: { title: 'Failed to update shipping info', retryFn: () => selectShipping(shippingMethod) }
					})
				);

			await invalidateAll();
			ui.setToast({ title: 'Shipping info updated successfully', alertClasses: 'alert-success' });
		})();

	const submitReview = ui.loaderWrapper({ title: 'Submitting Order' }, async () => {
		await trpc()
			.order.submitReview.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: 'Failed to submit order', retryFn: submitReview } }));

		await invalidateAll();
		await goto(`/order?id=${id}`);
		ui.setToast({ title: 'Order submitted for review', alertClasses: 'alert-success' });
	});

	const saveOrder = ui.loaderWrapper({ title: 'Saving Order' }, async () => {
		await trpc()
			.order.save.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: 'Failed to save order', retryFn: saveOrder } }));

		await invalidateAll();
		await goto(`/order?id=${id}`);
		ui.setToast({ title: 'Order saved', alertClasses: 'alert-success' });
	});

	const cancelReview = ui.loaderWrapper({ title: 'Cancelling Review' }, async () => {
		await trpc()
			.order.cancelReview.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: 'Failed to cancel review', retryFn: cancelReview } }));

		await invalidateAll();
		ui.setToast({ title: 'Order review cancelled', alertClasses: 'alert-success' });
	});

	const showRemoveProductModal = (id?: string) =>
		ui.setAlertModal({
			title: id ? 'Are you sure to remove this product?' : 'Are you sure to remove all products?',
			body: 'This action cannot be undone.',
			actions: [
				{
					name: 'Cancel',
					classes: 'btn-warning',
					onClick: ui.closeAlertModal
				},
				{
					name: 'Remove',
					classes: 'btn-error',
					onClick: () => removeProduct(id)
				}
			]
		});

	const removeProduct = (id?: string) =>
		ui.loaderWrapper({ title: id ? 'Removing Product' : 'Removing all products' }, async () => {
			ui.closeAlertModal();
			if (id) {
				const fileName = products.find((p) => p.id == id)?.fileName;
				if (fileName) await supabase.storage.from('Gerber Files').remove([fileName]);
			} else await supabase.storage.from('Gerber Files').remove(fileNames);

			await trpc()
				.order.removeProduct.mutate({ orderId, ids: id ? [id] : products.map((p) => p.id) })
				.catch((e) => tce(e, { showModal: { title: 'Failed to remove product', retryFn: () => removeProduct(id) } }));

			await invalidateAll();
			ui.setToast({ title: id ? 'Product removed successfully' : 'All products removed successfully' });
		})();

	const showRemoveOrderModal = () =>
		ui.setAlertModal({
			title: 'Are you sure to remove this order?',
			body: 'This action cannot be undone.',
			actions: [
				{
					name: 'Cancel',
					classes: 'btn-warning',
					onClick: ui.closeAlertModal
				},
				{
					name: 'Remove',
					classes: 'btn-error',
					onClick: removeOrder
				}
			]
		});

	const removeOrder = ui.loaderWrapper({ title: 'Removing Order' }, async () => {
		ui.closeAlertModal();
		await supabase.storage.from('Gerber Files').remove(fileNames);
		await trpc()
			.order.remove.mutate({ id })
			.catch((e) => tce(e, { showModal: { title: 'Failed to remove order', retryFn: removeOrder } }));

		ui.setToast({ title: 'Order removed successfully' });
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
