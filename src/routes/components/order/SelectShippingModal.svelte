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

	$: l = $lg.shipping;

	let modalId = 'selectShippingModal';

	export let selectedShipping: { country: string; methodId: string } | null = null;
	export let selectShipping: (shippingMethod: RouterOutput['shipping']['getMethods'][number]) => void;

	let countries: RouterOutput['shipping']['getCountries'] | undefined;
	let selectedCountry: string | undefined;
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
		if (!selectedCountry) return;
		methods = undefined;
		methods = await trpc()
			.shipping.getMethods.query({ country: selectedCountry })
			.catch((e) =>
				tce(e, { callback: () => closeModal(modalId), showModal: { title: 'Failed to fetch shipping methods' } })
			);
	};
	$: if (selectedCountry) fetchMethods();

	onMount(async () => {
		await fetchCountries();
		onShowModal(modalId, async () => {
			selectedCountry = selectedShipping?.country;
			selectedMethodId = selectedShipping?.methodId;
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
			<select class="select select-bordered select-sm" bind:value={selectedCountry}>
				<option value={undefined} disabled>{l.selectCountry}</option>
				{#each countries as country}
					<option value={country}>{country}</option>
				{/each}
			</select>
		</div>

		{#if selectedCountry}
			{#if !methods}
				<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
			{:else}
				<div class="overflow-x-auto h-96 mt-6">
					<table class="table table-pin-rows">
						<thead>
							<tr>
								<th class="w-1" />
								<th />
								<th>{l.shippingMethod}</th>
								<th>{l.price}</th>
								<th>{l.deliveryTime}</th>
							</tr>
						</thead>
						<tbody>
							{#each methods as sm}
								{@const { id, icon, method, price, deliveryTime } = sm}
								{@const checked = selectedMethodId === id}
								<tr class="cursor-pointer hover {checked && 'bg-base-200'}" on:click={() => (selectedMethodId = id)}>
									<td>
										<input type="radio" class="radio radio-primary radio-sm" {checked} />
									</td>
									<td>
										<img src="https://api.fuuffy.com{icon}" alt={method} class="h-10 w-10 object-contain" />
									</td>
									<td>{method}</td>
									<td>{parsePrice($i18n.currency, price)}</td>
									<td>{deliveryTime} {l.days}</td>
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
