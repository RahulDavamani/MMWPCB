<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import { closeModal, onShowModal } from '$lib/client/modal';
	import Modal from '../../components/UI/Modal.svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import Loader from '../../components/UI/Loader.svelte';
	import { i18n, lg, parsePrice } from '../../../stores/i18n.store';
	import FormControl from '../FormControl.svelte';

	$: l = $lg.shipping;

	let modalId = 'selectShippingModal';

	export let selectedShipping: { countryId: string | null; methodId: string | null } | null;
	export let selectShipping: (shippingMethod: RouterOutput['shipping']['getMethods'][number]) => void;
	export let showOther = false;

	let countries: RouterOutput['shipping']['getCountries'] | undefined;
	let selectedCountryId: string | undefined;
	let methods: RouterOutput['shipping']['getMethods'] | undefined;
	let selectedMethodId: string | undefined;
	let countryName = '';

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
		<div class="text-xl font-bold">{l.selectShippingMethod}</div>
	</div>
	{#if !countries}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="flex items-center gap-4">
			<div class="font-semibold">{l.shippingTo}:</div>
			<select class="select select-bordered select-sm" bind:value={selectedCountryId}>
				<option value={undefined} disabled>{l.selectCountry}</option>
				{#each countries as { id, name, _count }}
					<option value={id}>{name} ({_count.methods})</option>
				{/each}
				{#if showOther}
					<option value="other">{$lg.common.other}</option>
				{/if}
			</select>
			{#if selectedCountryId === 'other'}
				<div class="font-semibold">{l.country}:</div>
				<input type="text" class="input input-bordered input-sm grow" bind:value={countryName} />
			{/if}
		</div>

		{#if selectedCountryId}
			{#if !methods}
				<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
			{:else if selectedCountryId === 'other'}
				<div class="flex justify-end mt-6">
					<button
						class="btn btn-success {!countryName && 'btn-disabled'} w-40"
						on:click={() => {
							selectShipping({
								id: 'order',
								createdAt: new Date(),
								updatedAt: new Date(),
								country: { name: countryName },
								countryId: '',
								name: '',
								deliveryTime: '',
								price: 0,
								restriction: ''
							});
						}}
					>
						{$lg.common.select}
					</button>
				</div>
			{:else}
				<div class="overflow-x-auto mt-6">
					<table class="table">
						<thead>
							<tr>
								<th></th>
								<th>{l.shippingMethod}</th>
								<th>{l.price}</th>
								<th>{l.deliveryTime}</th>
								<th>{l.restriction}</th>
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
									<td>{parsePrice($i18n.currency, price)}</td>
									<td>{deliveryTime}</td>
									<td>{restriction}</td>
								</tr>
							{:else}
								<tr>
									<td colspan="5" class="text-center">{l.noShippingMethods}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>

				<div class="flex justify-end mt-6">
					<button
						class="btn btn-success {!selectedMethodId && 'btn-disabled'} w-40"
						on:click={() => {
							const method = methods?.find((m) => m.id === selectedMethodId);
							if (method) selectShipping(method);
						}}
					>
						{$lg.common.select}
					</button>
				</div>
			{/if}
		{/if}
	{/if}
</Modal>
