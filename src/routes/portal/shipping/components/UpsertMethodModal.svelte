<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { PageData } from '../[id]/$types';
	import { closeModal, onShowModal, showModal } from '$lib/client/modal';
	import { ui } from '../../../../stores/ui.store';
	import { trpc } from '../../../../trpc/client';
	import type { UpsertMethod } from '../../../../trpc/routers/shipping/shipping.router';
	import { tce } from '../../../../trpc/te';
	import { invalidateAll } from '$app/navigation';
	import Modal from '../../../components/UI/Modal.svelte';
	import Icon from '@iconify/svelte';
	import FormControl from '../../../components/FormControl.svelte';
	import cloneDeep from 'lodash.clonedeep';

	let modalId = 'upsertMethodModal';
	export let id: string | undefined;
	let method: UpsertMethod | undefined;

	$: ({ methods } = $page.data as PageData);

	const emptyMethod: UpsertMethod = {
		countryId: $page.params.id,
		name: '',
		price: 0,
		deliveryTime: '',
		restriction: ''
	};

	onMount(() =>
		onShowModal(modalId, async () => (method = cloneDeep(methods.find((c) => c.id === id) ?? emptyMethod)))
	);

	$: error = method
		? {
				name: !method.name.length ? 'Method name is required' : undefined,
				price: method.price < 0 ? 'Price must be greater than or equal to 0' : undefined
			}
		: {};

	$: isError = Object.values(error).filter(Boolean).length;

	const upsertMethod = ui.loaderWrapper({ title: id ? 'Updating Method' : 'Adding Method' }, async () => {
		if (!method) return;
		closeModal(modalId);
		await trpc()
			.shipping.upsertMethod.mutate(method)
			.catch((e) =>
				tce(e, {
					callback: () => showModal(modalId),
					showModal: {
						title: id ? 'Failed to Update Method' : 'Failed to Add Method',
						retryFn: upsertMethod
					}
				})
			);

		await invalidateAll();
		ui.setToast({
			title: id ? 'Method Updated Successfully' : 'Method Added Successfully',
			alertClasses: 'alert-success'
		});
	});
</script>

<Modal
	{modalId}
	modalBackdrop={false}
	boxClasses="max-w-2xl w-full"
	title={id ? 'Update Method' : 'Add Method'}
	dividerClasses="m-0"
>
	{#if method}
		<FormControl label="Method Name" error={error.name}>
			<input
				type="text"
				placeholder="Type here..."
				bind:value={method.name}
				class="input input-bordered {error.name && 'input-error'}"
			/>
		</FormControl>

		<FormControl label="Price" error={error.price}>
			<input
				type="number"
				placeholder="Type here..."
				bind:value={method.price}
				class="input input-bordered {error.price && 'input-error'}"
			/>
		</FormControl>

		<FormControl label="Delivery Time">
			<input type="text" placeholder="Type here..." bind:value={method.deliveryTime} class="input input-bordered" />
		</FormControl>

		<FormControl label="Restriction">
			<input type="text" placeholder="Type here..." bind:value={method.restriction} class="input input-bordered" />
		</FormControl>
	{/if}

	<button class="btn btn-success w-full mt-6 text-lg {isError && 'btn-disabled'}" on:click={upsertMethod}>
		{#if id}
			<Icon icon="mdi:content-save" width={20} />
			Save
		{:else}
			<Icon icon="mdi:add" width={20} />
			Add
		{/if}
	</button>
</Modal>
