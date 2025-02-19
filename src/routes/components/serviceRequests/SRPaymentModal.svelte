<script lang="ts">
	import type { Dropin } from 'braintree-web-drop-in';
	import dropin from 'braintree-web-drop-in';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { closeModal, showModal } from '$lib/client/modal';
	import { onMount } from 'svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';
	import Modal from '../UI/Modal.svelte';
	import Icon from '@iconify/svelte';
	import Loader from '../UI/Loader.svelte';

	$: l = $lg.serviceRequests.payment;

	let modalId = 'srPaymentModal';
	export let serviceRequest: RouterOutput['service']['getAll']['serviceRequests'][number] | null;
	export let fetchServiceRequests: () => Promise<void>;
	$: price = serviceRequest?.price ?? 0;

	let isLoading = false;
	let instance: Dropin | undefined;
	let paymentDetails: RouterOutput['service']['submitPayment'] | undefined;

	const close = async () => {
		isLoading = true;
		if (paymentDetails) fetchServiceRequests();
		closeModal(modalId);
		isLoading = false;
	};

	onMount(async () => {
		isLoading = true;
		const token = await trpc()
			.payment.getClientToken.query()
			.catch((e) =>
				tce(e, {
					callback: close,
					showModal: {
						title: l.failedToGenerateToken,
						retryFn: () => showModal(modalId)
					}
				})
			);
		instance = await dropin.create({
			authorization: token,
			container: '#braintree-dropin-container',
			paypal: { flow: 'checkout', amount: price, currency: 'USD' }
		});
		isLoading = false;
	});

	const submitPayment = async () => {
		if (!instance) return;
		isLoading = true;
		try {
			const { nonce } = await instance.requestPaymentMethod();
			paymentDetails = await trpc()
				.service.submitPayment.mutate({ id: serviceRequest?.id ?? '', nonce })
				.catch((e) =>
					tce(e, {
						callback: close,
						showModal: { title: l.failedToSubmit }
					})
				);
		} catch (error) {}
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
		<div id="braintree-dropin-container" class:hidden={isLoading || paymentDetails} class="mt-4" />

		{#if isLoading}
			<Loader fixed={false} overlay={false} size={80} classes="pt-10 pb-4" />
		{:else if paymentDetails}
			<div class="divider mt-0" />
			<div class="text-center">{l.paymentTotal}</div>
			<div class="text-xl text-center font-semibold font-mono mb-3">
				{parsePrice($i18n.currency, price)}x
			</div>

			<div class="space-y-2 px-2">
				<div class="flex justify-between">
					<div>{l.transactionId}</div>
					<div class="font-semibold">{paymentDetails.transactionId.toUpperCase()}</div>
				</div>
				<div class="flex justify-between">
					<div>{l.paymentTime}</div>
					<div class="font-semibold">{new Date(paymentDetails.transactionCreatedAt).toLocaleString()}</div>
				</div>
				<div class="flex justify-between">
					<div>{l.paymentMethod}</div>
					<div class="font-semibold">
						{paymentDetails.paymentInstrumentType.replace('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
					</div>
				</div>
			</div>

			<div class="divider" />
			<div class="flex justify-center gap-10 mt-6 mb-4">
				<button class="btn btn-primary w-32">
					<Icon icon="mdi:printer" width={20} />
					{l.print}
				</button>
				<button class="btn btn-error w-32" on:click={close}>
					<Icon icon="mdi:close" width={20} />
					{$lg.common.close}
				</button>
			</div>
		{:else}
			<button class="btn btn-primary w-full mt-8" on:click={submitPayment}>{l.payNow}</button>
			<button class="btn btn-link text-sm text-error w-full mb-2" on:click={close}>{l.cancelPayment}</button>
		{/if}
	</div>
</Modal>
