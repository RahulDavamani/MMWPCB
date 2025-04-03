<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterInput } from '../../../trpc/routers/app.router';
	import Modal from '../../components/UI/Modal.svelte';
	import { closeModal, onShowModal, showModal } from '$lib/client/modal';
	import FormControl from '../../components/FormControl.svelte';
	import cloneDeep from 'lodash.clonedeep';
	import { ui } from '../../../stores/ui.store';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';

	let modalId = 'generateDiscountModal';
	export let fetchDiscounts: () => Promise<void>;

	const emptyData: RouterInput['discount']['generate'] = {
		count: 1,
		type: 'PERCENTAGE',
		value: 0,
		usageLimit: 1,
		startDate: undefined,
		endDate: undefined
	};
	let data = cloneDeep(emptyData);

	onMount(() => onShowModal(modalId, () => (data = cloneDeep(emptyData))));

	$: error = {
		count: data.count < 1,
		value: data.value < 0,
		usageLimit: data.usageLimit < 1
	};

	$: isError = Object.values(error).filter(Boolean).length;

	const generateCodes = ui.loaderWrapper({ title: 'Generating Discount Codes' }, async () => {
		closeModal(modalId);
		await trpc()
			.discount.generate.mutate(data)
			.catch((e) =>
				tce(e, {
					callback: () => showModal(modalId),
					showModal: {
						title: 'Failed to generate codes',
						retryFn: generateCodes
					}
				})
			);

		await fetchDiscounts();
		ui.setToast({
			title: 'Discount Codes Generated Successfully',
			alertClasses: 'alert-success'
		});
	});
</script>

<Modal
	{modalId}
	modalBackdrop={false}
	boxClasses="max-w-2xl w-full"
	title="Generate Discount Codes"
	dividerClasses="m-0"
>
	<div class="grid grid-cols-2 gap-4">
		<FormControl label="Number of Codes" error={error.count ? 'Value should be greater than 1' : undefined}>
			<input type="number" class="input input-bordered w-full" min={1} bind:value={data.count} />
		</FormControl>

		<FormControl label="Usage Limit" error={error.usageLimit ? 'Value should be greater than 1' : undefined}>
			<input type="number" class="input input-bordered w-full" min={1} bind:value={data.usageLimit} />
		</FormControl>

		<FormControl label="Type">
			<select class="select select-bordered w-full" bind:value={data.type}>
				<option value="PERCENTAGE">Percentage</option>
				<option value="FIXED">Fixed</option>
			</select>
		</FormControl>

		<FormControl label="Value" error={error.value ? 'Value should be greater than 0' : undefined}>
			<input type="number" class="input input-bordered w-full" min={0} bind:value={data.value} />
		</FormControl>

		<div>
			<div class="flex justify-between items-center">
				<div class="my-2 ml-1 font-semibold">Start Date</div>
				<input
					type="checkbox"
					class="toggle toggle-xs toggle-primary"
					checked={data.startDate !== undefined}
					on:change={(e) => (data.startDate = e.currentTarget.checked ? new Date() : undefined)}
				/>
			</div>
			<input
				type="date"
				class="input input-bordered w-full"
				disabled={!data.startDate}
				value={data.startDate ? data.startDate.toISOString().split('T')[0] : ''}
				min={new Date().toISOString().split('T')[0]}
				on:change={(e) => (data.startDate = e.currentTarget.value ? new Date(e.currentTarget.value) : undefined)}
			/>
		</div>

		<div>
			<div class="flex justify-between items-center">
				<div class="my-2 ml-1 font-semibold">End Date</div>
				<input
					type="checkbox"
					class="toggle toggle-xs toggle-primary"
					checked={data.endDate !== undefined}
					on:change={(e) => (data.endDate = e.currentTarget.checked ? new Date() : undefined)}
				/>
			</div>
			<input
				type="date"
				class="input input-bordered w-full"
				disabled={!data.endDate}
				value={data.endDate ? data.endDate.toISOString().split('T')[0] : ''}
				min={data.startDate ? data.startDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
				on:change={(e) => (data.endDate = e.currentTarget.value ? new Date(e.currentTarget.value) : undefined)}
			/>
		</div>
	</div>

	<button class="btn btn-secondary w-full mt-8 {isError && 'btn-disabled'}" on:click={generateCodes}
		>Generate Codes</button
	>
</Modal>
