<script lang="ts">
	import Modal from '../UI/Modal.svelte';
	import { onMount } from 'svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { closeModal } from '$lib/client/modal';
	import Loader from '../UI/Loader.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import Icon from '@iconify/svelte';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';

	$: l = $lg.serviceRequests.payment;
	let modalId = 'srPaymentModal';

	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number] | null;
	export let fetchServiceRequests: () => Promise<void>;
	$: id = serviceRequest?.id ?? '';
	$: price = serviceRequest?.price ?? 0;

	let isLoading = false;
	let currency = $i18n.currency;
	let paymentDetails: RouterOutput['service']['submitPayment'] | undefined;

	const loadPayPalSDK = () =>
		new Promise((resolve) => {
			const existingScript = document.querySelector('script[src*="paypal.com/sdk/js"]');
			if (existingScript) existingScript.remove();
			const script = Object.assign(document.createElement('script'), {
				src: `https://www.paypal.com/sdk/js?client-id=AbjZFBGRMpldJLqSfEQHY4eTInwfYysFo3mauPezn6GvOJ19jHtX8jkzbECWHDjnwMyGuLPhHG8JtBIg&currency=${$i18n.currency.toUpperCase()}`,
				onload: resolve
			});
			document.body.appendChild(script);
		});

	const renderPayPalButton = () =>
		// @ts-ignore
		window.paypal
			.Buttons({
				createOrder: async () =>
					await trpc()
						.service.createPayment.mutate({ id, currencyCode: $i18n.currency })
						.catch((e) => tce(e, { showToast: true, callback: close })),

				// @ts-ignore
				onApprove: async (data) => {
					paymentDetails = await trpc()
						.service.submitPayment.mutate({ id, paymentId: data.orderID })
						.catch((e) => tce(e, { showToast: true, callback: close }));
				}
			})
			.render('#paypal-button-container');

	const init = async () => {
		isLoading = true;
		currency = $i18n.currency;
		await loadPayPalSDK();
		renderPayPalButton();
		isLoading = false;
	};

	onMount(init);
	$: if (currency !== $i18n.currency) init();

	const close = async () => {
		isLoading = true;
		if (paymentDetails) await fetchServiceRequests();
		closeModal(modalId);
		paymentDetails = undefined;
		isLoading = false;
	};
</script>

<Modal {modalId} modalBackdrop={false} boxClasses="max-w-xl w-full p-0" showCloseBtn={false} showDivider={false}>
	<div slot="title" class="w-full">
		<div class="flex flex-col justify-center items-center py-4 {!paymentDetails && 'bg-primary text-primary-content '}">
			{#if paymentDetails}
				<Icon icon="mdi:check-decagram" class="text-success text-6xl mt-2" />
				<div class="text-lg font-semibold">{l.paymentSuccess}!</div>
			{:else}
				<div class="text-lg font-semibold mb-4">{l.checkout.toUpperCase()}</div>
				<div>{l.amountToBePaid}</div>
				<div class="text-xl font-mono font-bold">{parsePrice($i18n.currency, price)}</div>
			{/if}
		</div>
	</div>

	<div class="px-6">
		<div id="paypal-button-container" class:hidden={isLoading || paymentDetails} class="mt-8 mb-2" />

		{#if isLoading}
			<Loader fixed={false} overlay={false} size={80} classes="pt-10 pb-4" />
		{:else if paymentDetails}
			{@const { amount, currency, captureId, captureTime } = paymentDetails}
			<div class="divider mt-0" />
			<div class="text-center">{l.paymentTotal}</div>
			<div class="text-xl text-center font-semibold font-mono mb-3">{(currency === 'USD' ? '$' : '€') + amount}</div>

			<div class="space-y-2 px-2">
				<div class="flex justify-between">
					<div>{l.transactionId}</div>
					<div class="font-semibold">{captureId.toUpperCase()}</div>
				</div>
				<div class="flex justify-between">
					<div>{l.paymentTime}</div>
					<div class="font-semibold">{new Date(captureTime).toLocaleString()}</div>
				</div>
			</div>

			<div class="divider" />
			<div class="flex justify-center gap-10 mt-6 mb-4">
				<a href="/payment-receipt/service-request?id={id}" class="btn btn-primary w-32">
					<Icon icon="mdi:printer" width={20} />
					{l.print}
				</a>
				<button class="btn btn-error w-32" on:click={close}>
					<Icon icon="mdi:close" width={20} />
					{$lg.common.close}
				</button>
			</div>
		{:else}
			<button class="btn btn-link text-sm text-error w-full mb-2" on:click={close}>{l.cancelPayment}</button>
		{/if}
	</div>
</Modal>
