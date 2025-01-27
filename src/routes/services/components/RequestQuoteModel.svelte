<script lang="ts">
	import { lg } from '../../../stores/i18n.store';
	import FormControl from '../../components/FormControl.svelte';
	import Modal from '../../components/UI/Modal.svelte';
	import { onMount } from 'svelte';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { customAlphabet } from 'nanoid';
	import Loader from '../../components/UI/Loader.svelte';
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';

	$: l = $lg.services.requestQuote;

	let modalId = 'requestQuoteModal';
	export let service: string;

	let quote = {
		company: '',
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		testingRequirements: ''
	};

	onMount(() =>
		onShowModal(modalId, () => {
			const user = ($page.data as PageData).user!;
			quote = {
				company: '',
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				phone: user.phone,
				testingRequirements: ''
			};
			serviceId = null;
			loading = false;
		})
	);

	let loading = false;
	let serviceId: string | null = null;

	$: error = {
		company: !quote.company.length ? l.companyError : undefined,
		firstName: !quote.firstName.length ? l.firstNameError : undefined,
		lastName: !quote.lastName.length ? l.lastNameError : undefined,
		email:
			!quote.email.length || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(quote.email)
				? l.emailError
				: undefined,
		phone: !quote.phone.length ? l.phoneError : undefined
	};
	$: btnDisabled = Object.values(error).filter(Boolean).length !== 0;

	const requestQuote = async () => {
		loading = true;
		const id = customAlphabet('1234567890', 10)();
		const data = await trpc()
			.service.create.mutate({ id, service, ...quote })
			.catch((e) =>
				tce(e, {
					showModal: { title: l.requestError, retryFn: requestQuote },
					callback: () => (loading = false)
				})
			);

		serviceId = data.id;
		loading = false;
	};
</script>

<Modal {modalId} title={l.title} boxClasses="max-w-3xl w-full" dividerClasses="mb-2" modalBackdrop={false}>
	{#if loading}
		<Loader title={l.submittingRequest} fixed={false} overlay={false} size={80} classes="mt-10" />
	{:else if serviceId}
		<div class="flex flex-col items-center mt-8 mb-6">
			<Icon icon="mdi:check-decagram" width={80} class="text-success mb-4" />
			<div>{l.serviceRequestNo}: <span class="font-semibold font-mono">#{serviceId}</span></div>
			<div>{l.requestSuccess}</div>
			<div class="flex justify-center gap-4 mt-6">
				<button on:click={() => closeModal(modalId)} class="btn btn-error w-60">{$lg.common.close}</button>
				<a href="/service-requests" class="btn btn-primary w-60">{l.viewServiceRequests}</a>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-2 gap-x-10">
			<FormControl label={l.company} classes="col-span-2" error={error.company}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.company && 'input-error'}"
					bind:value={quote.company}
				/>
			</FormControl>
			<FormControl label={$lg.user.firstName} error={error.firstName}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.firstName && 'input-error'}"
					bind:value={quote.firstName}
				/>
			</FormControl>
			<FormControl label={$lg.user.lastName} error={error.lastName}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.lastName && 'input-error'}"
					bind:value={quote.lastName}
				/>
			</FormControl>
			<FormControl label={$lg.user.email} error={error.email}>
				<input
					type="email"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.email && 'input-error'}"
					bind:value={quote.email}
				/>
			</FormControl>
			<FormControl label={$lg.user.phone} error={error.phone}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					class="input input-bordered {error.phone && 'input-error'}"
					bind:value={quote.phone}
				/>
			</FormControl>
			<FormControl label={l.testingRequirements} classes="col-span-2">
				<textarea
					class="textarea textarea-bordered"
					placeholder={$lg.common.typeHere}
					rows="3"
					bind:value={quote.testingRequirements}
				/>
			</FormControl>
		</div>
		<button class="btn btn-secondary w-full mt-8 {btnDisabled && 'btn-disabled'}" on:click={requestQuote}>
			{l.title}
		</button>
	{/if}
</Modal>
