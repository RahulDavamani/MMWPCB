<script lang="ts">
	import { onMount } from 'svelte';
	import Modal from '../../components/UI/Modal.svelte';
	import { closeModal, onShowModal, showModal } from '$lib/client/modal';
	import type { Schema as UpsertAddress } from '../../../trpc/routers/address/procedures/upsert.procedure';
	import { page } from '$app/stores';
	import type { PageData } from '../$types';
	import FormControl from '../../components/FormControl.svelte';
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import { trpc } from '../../../trpc/client';
	import { ui } from '../../../stores/ui.store';
	import { tce } from '../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import cloneDeep from 'lodash.clonedeep';

	$: l = $lg.profile.upsertAddress;

	let modalId = 'upsertAddressModal';
	export let id: string | undefined;
	$: ({
		profile: { addresses }
	} = $page.data as PageData);
	let address: UpsertAddress | undefined;

	const emptyAddress: UpsertAddress = {
		name: '',
		phone: '',
		addressLine1: '',
		addressLine2: '',
		city: '',
		state: '',
		country: '',
		postalCode: ''
	};

	onMount(() =>
		onShowModal(modalId, async () => (address = cloneDeep(addresses.find((a) => a.id === id) ?? emptyAddress)))
	);

	$: error = address
		? {
				name: !address.name.length ? l.nameError : undefined,
				phone: !address.phone.length ? l.phoneError : undefined,
				addressLine1: !address.addressLine1.length ? l.addressLine1Error : undefined,
				city: !address.city.length ? l.cityError : undefined,
				state: !address.state.length ? l.stateError : undefined,
				country: !address.country.length ? l.countryError : undefined,
				postalCode: !address.postalCode.length ? l.postalCodeError : undefined
			}
		: {};

	$: isError = Object.values(error).filter(Boolean).length;

	const upsertAddress = async () =>
		ui.loaderWrapper({ title: id ? l.savingAddress : l.addingAddress }, async () => {
			if (!address) return;
			closeModal(modalId);
			await trpc()
				.address.upsert.mutate(address)
				.catch((e) =>
					tce(e, {
						callback: () => showModal(modalId),
						showModal: {
							title: id ? l.saveAddressError : l.addAddressError,
							retryFn: upsertAddress
						}
					})
				);

			await invalidateAll();
			ui.setToast({
				title: id ? l.saveAddressSuccess : l.addAddressSuccess,
				alertClasses: 'alert-success'
			});
		})();
</script>

<Modal
	{modalId}
	modalBackdrop={false}
	boxClasses="max-w-2xl w-full"
	title={id ? l.updateAddress : l.addAddress}
	dividerClasses="m-0"
>
	{#if address}
		<div class="">
			<FormControl label={$lg.user.name} error={error.name}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={address.name}
					class="input input-bordered {error.name && 'input-error'}"
				/>
			</FormControl>
			<FormControl label={$lg.user.phone} error={error.phone}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={address.phone}
					class="input input-bordered {error.phone && 'input-error'}"
				/>
			</FormControl>
			<FormControl label={l.addressLine1} error={error.addressLine1}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={address.addressLine1}
					class="input input-bordered {error.addressLine1 && 'input-error'}"
				/>
			</FormControl>
			<FormControl label={l.addressLine2}>
				<input
					type="text"
					placeholder={$lg.common.typeHere}
					bind:value={address.addressLine2}
					class="input input-bordered"
				/>
			</FormControl>

			<div class="flex gap-4">
				<FormControl label={l.city} error={error.city} classes="w-full">
					<input
						type="text"
						placeholder={$lg.common.typeHere}
						bind:value={address.city}
						class="input input-bordered {error.city && 'input-error'}"
					/>
				</FormControl>
				<FormControl label={l.state} error={error.state} classes="w-full">
					<input
						type="text"
						placeholder={$lg.common.typeHere}
						bind:value={address.state}
						class="input input-bordered {error.state && 'input-error'}"
					/>
				</FormControl>
			</div>

			<div class="flex gap-4">
				<FormControl label={l.country} error={error.country} classes="w-full">
					<input
						type="text"
						placeholder={$lg.common.typeHere}
						bind:value={address.country}
						class="input input-bordered {error.country && 'input-error'}"
					/>
				</FormControl>
				<FormControl label={l.postalCode} error={error.postalCode} classes="w-full">
					<input
						type="text"
						placeholder={$lg.common.typeHere}
						bind:value={address.postalCode}
						class="input input-bordered {error.postalCode && 'input-error'}"
					/>
				</FormControl>
			</div>
		</div>
	{/if}

	<button class="btn btn-success w-full mt-6 text-lg {isError && 'btn-disabled'}" on:click={upsertAddress}>
		{#if id}
			<Icon icon="mdi:content-save" width={20} />
			Save
		{:else}
			<Icon icon="mdi:add" width={20} />
			Add
		{/if}
	</button>
</Modal>
