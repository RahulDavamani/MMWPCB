<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterOutput } from '../../../trpc/routers/app.router';
	import { onShowModal } from '$lib/client/modal';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Loader from '../../components/UI/Loader.svelte';
	import Modal from '../../components/UI/Modal.svelte';
	import IconBtn from '../../components/IconBtn.svelte';
	import { lg } from '../../../stores/i18n.store';

	$: l = $lg.instantQuote.shipping;

	let modalId = 'shippingMethodModal';

	export let shippingMethod: RouterOutput['shipping']['getMethods'][number] | undefined;

	let selectedCountry = shippingMethod?.countryId;
	let shippingCountries: RouterOutput['shipping']['getCountries'] | undefined;
	let shippingMethods: RouterOutput['shipping']['getMethods'] | undefined;

	const fetchShippingCountries = async () => {
		shippingCountries = undefined;
		shippingCountries = await trpc().shipping.getCountries.query().catch(tce);
	};

	const fetchShippingMethods = async (countryId: string | undefined) => {
		if (!countryId) return;
		shippingMethods = undefined;
		shippingMethods = await trpc().shipping.getMethods.query({ countryId }).catch(tce);
	};
	$: fetchShippingMethods(selectedCountry);

	onMount(async () => {
		await fetchShippingCountries();
		onShowModal(modalId, async () => {
			selectedCountry = shippingMethod?.countryId;
			await fetchShippingMethods(selectedCountry);
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
				selectedCountry = shippingMethod?.countryId;
				await fetchShippingCountries();
				await fetchShippingMethods(selectedCountry);
			}}
		/>
		<div class="text-xl font-bold">{l.selectShipping}</div>
	</div>
	{#if !shippingCountries}
		<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
	{:else}
		<div class="flex items-center gap-4">
			<div class="font-semibold">{l.shippingTo}:</div>
			<select class="select select-bordered select-sm" bind:value={selectedCountry}>
				<option value={undefined} disabled>{l.selectCountry}</option>
				{#each shippingCountries as { id, name }}
					<option value={id}>{name}</option>
				{/each}
			</select>
		</div>

		{#if selectedCountry}
			{#if !shippingMethods}
				<Loader fixed={false} overlay={false} size={80} classes="pt-10" />
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
							{#each shippingMethods as sm}
								{@const { id, name, price, deliveryTime, restriction } = sm}
								{@const checked = shippingMethod?.id === id}
								<tr class="cursor-pointer hover {checked && 'bg-base-200'}" on:click={() => (shippingMethod = sm)}>
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
			{/if}
		{/if}
	{/if}
</Modal>
