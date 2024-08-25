<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { goto, invalidateAll } from '$app/navigation';

	$: ({
		order: { id: orderId, status, standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils, shippingInfo }
	} = $page.data as PageData);
	$: products = { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils };

	$: productCount = Object.values(products).reduce((acc, cur) => acc + cur.length, 0);

	$: itemsCost = Object.values(products).reduce(
		(acc, cur) => acc + cur.reduce((acc, cur) => acc + cur.initialPrice, 0),
		0
	);
	$: shippingCost = shippingInfo?.price ?? 0;
	$: discount = 10;
	$: taxes = 8.5;
	$: orderTotal = itemsCost + shippingCost - discount + taxes;
	$: estDeliveryDate = new Date().toDateString();
	$: weight = Object.values(products).reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + cur.weight, 0), 0);

	$: disabled =
		productCount === 0 ||
		Object.values(products)
			.flatMap((p) => p.flatMap((p) => p.fileName))
			.filter(Boolean).length !== productCount;

	const submitReview = ui.loaderWrapper({ title: 'Submitting Order' }, async () => {
		await trpc()
			.order.submitReview.mutate({ id: orderId })
			.catch((e) => tce(e, { showModal: { title: 'Failed to submit order', retryFn: submitReview } }));

		ui.setToast({ title: 'Order submitted for review', alertClasses: 'alert-success' });
		await invalidateAll();
		goto(`/order?id=${orderId}`);
	});

	const saveOrder = ui.loaderWrapper({ title: 'Saving Order' }, async () => {
		await trpc()
			.order.save.mutate({ id: orderId })
			.catch((e) => tce(e, { showModal: { title: 'Failed to save order', retryFn: saveOrder } }));

		ui.setToast({ title: 'Order saved', alertClasses: 'alert-success' });
		await invalidateAll();
		goto(`/order?id=${orderId}`);
	});
</script>

<div class="min-w-96 h-fit border rounded-lg shadow p-4">
	<div class="text-lg font-bold flex items-center gap-2">
		<Icon icon="mdi:receipt-text-outline" width={20} />
		Order Summary
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="space-y-2 mt-4 px-2">
		<div class="flex justify-between">
			<div>Items Cost</div>
			<div class="font-mono">${itemsCost.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>Shipping Cost</div>
			<div class="font-mono">${shippingCost.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>Discount</div>
			<div class="font-mono text-success">-${discount.toFixed(2)}</div>
		</div>
		<div class="flex justify-between">
			<div>Taxes</div>
			<div class="font-mono">${taxes.toFixed(2)}</div>
		</div>
		<div class="divider" />
		<div class="flex justify-between">
			<div class="text-lg font-bold">Order Total</div>
			<div class="text-lg font-bold font-mono">${orderTotal.toFixed(2)}</div>
		</div>
		<div class="divider" />
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div
				class="tooltip tooltip-left tooltip-info"
				data-tip="The estimated shipping date is calculated based on the item with the longest build time in your order. Please note that this date is for reference only. If your order requires confirmation, the shipping date may be subject to extension."
			>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			Est Delivery Date
		</div>
		<div class="font-mono">{estDeliveryDate}</div>
	</div>

	<div class="flex justify-between mt-4 px-2">
		<div class="flex items-center gap-2 font-semibold tooltip">
			<div
				class="tooltip tooltip-left tooltip-info"
				data-tip="The weight here is calculated based on the larger value of gross weight and volume weight, which is estimated for reference. If the actual weight differs from the estimate, shipping cost may be adjusted accordingly."
			>
				<Icon icon="mdi:info" width={20} class="text-info" />
			</div>
			Weight
		</div>
		<div class="font-mono">{weight.toFixed(2)} kg</div>
	</div>

	<div
		class="tooltip tooltip-error mt-8 w-full"
		data-tip={disabled ? (productCount === 0 ? 'No Products Found' : 'Product files are not uploaded') : undefined}
	>
		<button class="btn btn-primary rounded-box w-full {disabled && 'btn-disabled'}" on:click={submitReview}>
			Submit Order For Review
		</button>
	</div>
	<div class="divider">OR</div>
	<div class="tooltip tooltip-error w-full" data-tip={productCount === 0 ? 'No Products Found' : undefined}>
		<button
			class="btn btn-secondary btn-outline rounded-box w-full {productCount === 0 && 'btn-disabled'}"
			on:click={saveOrder}
		>
			<Icon icon="mdi:content-save-outline" width={22} />
			Save Order
		</button>
	</div>
</div>
