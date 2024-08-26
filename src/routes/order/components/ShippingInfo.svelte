<script lang="ts">
	import Icon from '@iconify/svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import type { PageData } from '../$types';
	import { page } from '$app/stores';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { closeModal, showModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import SelectShippingModal from './SelectShippingModal.svelte';

	$: ({
		order: { id, status, shippingInfo }
	} = $page.data as PageData);

	let modalId = 'selectShippingModal';

	const selectShipping = (shippingMethod: RouterOutput['shipping']['getMethods'][number] | undefined) =>
		ui.loaderWrapper({ title: 'Updating shipping method' }, async () => {
			closeModal(modalId);
			if (!shippingMethod) return;
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
</script>

<div class="grow border rounded-lg shadow p-4 flex flex-col">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="mdi:truck-fast-outline" width={20} />
			Shipping Info
		</div>
		{#if shippingInfo && (status === 'CART' || status === 'SAVED' || status === 'REJECTED')}
			<IconBtn icon="mdi:exchange" iconClasses="text-secondary" on:click={() => showModal(modalId)} />
		{/if}
	</div>
	<div class="divider mt-0 mb-1" />

	<div class="grow flex flex-col justify-center">
		{#if !shippingInfo}
			<button
				class="btn btn-link border-primary border-dashed hover:border-primary hover:border-dashed hover:no-underline h-32"
				on:click={() => showModal(modalId)}
			>
				Select Shipping Method
			</button>
		{:else}
			{@const { countryName, methodName, price, deliveryTime, restriction } = shippingInfo}
			<div class="space-y-1">
				<div class="flex justify-between">
					<div>Country</div>
					<div>{countryName}</div>
				</div>
				<div class="flex justify-between">
					<div>Method</div>
					<div>{methodName}</div>
				</div>
				<div class="flex justify-between">
					<div>Delivery Time</div>
					<div>{deliveryTime}</div>
				</div>
				<div class="flex justify-between">
					<div>Restriction</div>
					<div>{restriction}</div>
				</div>
			</div>

			<div class="divider mt-auto m-0" />
			<div class="flex justify-between font-bold mt-2 pr-2">
				<div>Shipping Cost</div>
				<div class="font-mono">${price.toFixed(2)}</div>
			</div>
		{/if}
	</div>
</div>

<SelectShippingModal selectedShipping={shippingInfo} {selectShipping} />
