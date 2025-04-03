<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import { closeModal, onShowModal, showModal } from '$lib/client/modal';
	import { ui } from '../../../../stores/ui.store';
	import { trpc } from '../../../../trpc/client';
	import type { UpsertCountry } from '../../../../trpc/routers/shipping/shipping.router';
	import { tce } from '../../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import Modal from '../../../components/UI/Modal.svelte';
	import Icon from '@iconify/svelte';
	import FormControl from '../../../components/FormControl.svelte';
	import cloneDeep from 'lodash.clonedeep';

	let modalId = 'upsertCountryModal';
	export let id: string | undefined;
	let country: UpsertCountry | undefined;

	const emptyCountry: UpsertCountry = { name: '' };

	$: ({ countries } = $page.data as PageData);

	onMount(() =>
		onShowModal(modalId, async () => (country = cloneDeep(countries.find((c) => c.id === id) ?? emptyCountry)))
	);

	$: error = country
		? {
				name: !country.name.length ? 'Country name is required' : undefined
			}
		: {};

	$: isError = Object.values(error).filter(Boolean).length;

	const upsertCountry = ui.loaderWrapper({ title: id ? 'Updating Country' : 'Adding Country' }, async () => {
		if (!country) return;
		closeModal(modalId);
		await trpc()
			.shipping.upsertCountry.mutate(country)
			.catch((e) =>
				tce(e, {
					callback: () => showModal(modalId),
					showModal: {
						title: id ? 'Failed to Update Country' : 'Failed to Add Country',
						retryFn: upsertCountry
					}
				})
			);

		await invalidateAll();
		ui.setToast({
			title: id ? 'Country Updated Successfully' : 'Country Added Successfully',
			alertClasses: 'alert-success'
		});
	});
</script>

<Modal
	{modalId}
	modalBackdrop={false}
	boxClasses="max-w-2xl w-full"
	title={id ? 'Update Country' : 'Add Country'}
	dividerClasses="m-0"
>
	{#if country}
		<FormControl label="Country Name" error={error.name}>
			<input
				type="text"
				placeholder="Type here..."
				bind:value={country.name}
				class="input input-bordered {error.name && 'input-error'}"
			/>
		</FormControl>
	{/if}

	<button class="btn btn-success w-full mt-6 text-lg {isError && 'btn-disabled'}" on:click={upsertCountry}>
		{#if id}
			<Icon icon="mdi:content-save" width={20} />
			Save
		{:else}
			<Icon icon="mdi:add" width={20} />
			Add
		{/if}
	</button>
</Modal>
