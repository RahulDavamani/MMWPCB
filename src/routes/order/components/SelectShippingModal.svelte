<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import Modal from '../../components/UI/Modal.svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import Loader from '../../components/UI/Loader.svelte';

	let modalId = 'selectShippingModal';

	export let selectedShipping: { countryId: string | null; methodId: string | null } | null;
	export let selectShipping: (shippingMethod: RouterOutput['shipping']['getMethods'][number] | undefined) => void;

	let countries: RouterOutput['shipping']['getCountries'] | undefined;
	let selectedCountryId: string | undefined;
	let methods: RouterOutput['shipping']['getMethods'] | undefined;
	let selectedMethodId: string | undefined;

	const fetchCountries = async () => {
		countries = undefined;
		countries = await trpc()
			.shipping.getCountries.query()
			.catch((e) =>
				tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to fetch shipping countries' } })
			);
	};

	const fetchMethods = async () => {
		if (!selectedCountryId) return;
		methods = undefined;
		methods = await trpc()
			.shipping.getMethods.query({ countryId: selectedCountryId })
			.catch((e) =>
				tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to fetch shipping methods' } })
			);
	};
	$: if (selectedCountryId) fetchMethods();

	onMount(async () => {
		await fetchCountries();
		onShowModal(modalId, async () => {
			selectedCountryId = selectedShipping?.countryId ?? undefined;
			selectedMethodId = selectedShipping?.methodId ?? undefined;
			await fetchMethods();
		});
	});
</script>

<Modal {modalId} boxClasses="max-w-3xl w-full">
	<div slot="title" class="flex items-center gap-2">
		<IconBtn
			icon="mdi:refresh"
			iconClasses="text-accent"
			width={16}
			on:click={async () => {
				await fetchCountries();
				await fetchMethods();
			}}
		/>
		<div class="text-xl font-bold">Select Shipping Method</div>
	</div>
	{#if !countries}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="flex items-center gap-4">
			<div class="font-semibold">Select Shipping:</div>
			<select class="select select-bordered select-sm" bind:value={selectedCountryId}>
				<option value={undefined} disabled>Select Country</option>
				{#each countries as { id, name, _count }}
					<option value={id}>{name} ({_count.methods})</option>
				{/each}
			</select>
		</div>

		{#if selectedCountryId}
			{#if !methods}
				<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
			{:else}
				<div class="overflow-x-auto mt-6">
					<table class="table">
						<thead>
							<tr>
								<th></th>
								<th>Shipping Method</th>
								<th>Price</th>
								<th>Delivery Time</th>
								<th>Restriction</th>
							</tr>
						</thead>
						<tbody>
							{#each methods as sm}
								{@const { id, name, price, deliveryTime, restriction } = sm}
								{@const checked = selectedMethodId === id}
								<tr class="cursor-pointer hover {checked && 'bg-base-200'}" on:click={() => (selectedMethodId = id)}>
									<td>
										<input type="radio" class="radio radio-primary radio-sm" {checked} />
									</td>
									<td>{name}</td>
									<td>{price}</td>
									<td>{deliveryTime}</td>
									<td>{restriction}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<div class="flex justify-end mt-6">
					<button
						class="btn btn-success {!selectedMethodId && 'btn-disabled'}"
						on:click={() => selectShipping(methods?.find((m) => m.id === selectedMethodId))}
					>
						Select Method
					</button>
				</div>
			{/if}
		{/if}
	{/if}
</Modal>
