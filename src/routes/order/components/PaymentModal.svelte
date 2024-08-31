<script lang="ts">
	import Modal from '../../components/UI/Modal.svelte';
	import dropin from 'braintree-web-drop-in';
	import type { Dropin } from 'braintree-web-drop-in';
	import { onMount } from 'svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { showModal, closeModal } from '$lib/client/modal';
	import Loader from '../../components/UI/Loader.svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import Icon from '@iconify/svelte';
	import { invalidateAll } from '$app/navigation';
	import { order } from '../../../stores/order.store';

	let modalId = 'paymentModal';

	let isLoading = false;
	let instance: Dropin | undefined;
	let paymentDetails: RouterOutput['payment']['createTransaction'] | undefined;

	$: ({ id, orderTotal } = $order);

	const close = async () => {
		isLoading = true;
		if (paymentDetails) await invalidateAll();
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
						title: 'Failed to generate payment token',
						retryFn: () => showModal(modalId)
					}
				})
			);
		instance = await dropin.create({
			authorization: token,
			container: '#braintree-dropin-container',
			paypal: { flow: 'vault' }
		});
		isLoading = false;
	});

	const submitPayment = async () => {
		if (!instance) return;
		isLoading = true;
		try {
			const { nonce } = await instance.requestPaymentMethod();
			paymentDetails = await trpc()
				.payment.createTransaction.mutate({ orderId: id, nonce })
				.catch((e) =>
					tce(e, {
						callback: close,
						showModal: { title: 'Failed to submit payment' }
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
				<div class="text-lg font-semibold">Payment Success!</div>
			{:else}
				<div class="text-lg font-semibold mb-4">CHECKOUT</div>
				<div>Amount to be Paid</div>
				<div class="text-xl font-mono font-bold">${orderTotal.toFixed(2)}</div>
			{/if}
		</div>
	</div>

	<div class="px-6">
		<div id="braintree-dropin-container" class:hidden={isLoading || paymentDetails} class="mt-4" />

		{#if isLoading}
			<Loader fixed={false} overlay={false} size={80} classes="pt-10 pb-4" />
		{:else if paymentDetails}
			<div class="divider mt-0" />
			<div class="text-center">Payment Total</div>
			<div class="text-xl text-center font-semibold font-mono mb-3">${orderTotal.toFixed(2)}</div>

			<div class="space-y-2 px-2">
				<div class="flex justify-between">
					<div>Transaction ID</div>
					<div class="font-semibold">{paymentDetails.transactionId.toUpperCase()}</div>
				</div>
				<div class="flex justify-between">
					<div>Payment Time</div>
					<div class="font-semibold">{new Date(paymentDetails.createdAt).toLocaleString()}</div>
				</div>
				<div class="flex justify-between">
					<div>Payment Method</div>
					<div class="font-semibold">
						{paymentDetails.paymentInstrumentType.replace('_', ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
					</div>
				</div>
			</div>

			<div class="divider" />
			<div class="flex justify-center gap-10 mt-6 mb-4">
				<button class="btn btn-primary w-32">
					<Icon icon="mdi:printer" width={20} />
					Print
				</button>
				<button class="btn btn-error w-32" on:click={close}>
					<Icon icon="mdi:close" width={20} />
					Close
				</button>
			</div>
		{:else}
			<button class="btn btn-primary w-full mt-8" on:click={submitPayment}>Pay Now</button>
			<button class="btn btn-link text-sm text-error w-full mb-2" on:click={close}> Cancel Payment </button>
		{/if}
	</div>
</Modal>
