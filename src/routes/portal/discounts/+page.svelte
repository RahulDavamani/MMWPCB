<script lang="ts">
	import { onMount } from 'svelte';
	import type { RouterInput, RouterOutput } from '../../../trpc/routers/app.router';
	import Layout from '../components/Layout.svelte';
	import { trpc } from '../../../trpc/client';
	import { tce } from '../../../trpc/te';
	import Loader from '../../components/UI/Loader.svelte';
	import Flatpickr from 'svelte-flatpickr';
	import Icon from '@iconify/svelte';
	import GenerateDiscountModal from './GenerateDiscountModal.svelte';
	import { showModal } from '$lib/client/modal';
	import { ui } from '../../../stores/ui.store';

	type Data = RouterOutput['discount']['getAll'];
	let data: Data | undefined;

	let filters: RouterInput['discount']['getAll'] = {
		search: '',
		dates: [new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), new Date()],
		page: 1
	};

	const fetchDiscounts = async (page?: number) => {
		filters.page = page ?? 1;
		data = undefined;
		data = await trpc().discount.getAll.query(filters).catch(tce);
	};

	onMount(fetchDiscounts);

	let selected: Data['discounts'] = [];
	$: isEnableBtn = selected.find((d) => d.enable) === undefined;
	$: isDisableBtn = selected.find((d) => !d.enable) === undefined;
	$: isRemoveBtn = selected.find((d) => d._count.orders > 0) === undefined;

	const enableDiscounts = ui.loaderWrapper({ title: 'Enabling Discounts' }, async () => {
		await trpc()
			.discount.toggle.mutate({ ids: selected.map((d) => d.id), type: 'ENABLE' })
			.catch((e) => tce(e, { showToast: true }));
		await fetchDiscounts();
		selected = [];
	});

	const disableDiscounts = ui.loaderWrapper({ title: 'Disabling Discounts' }, async () => {
		await trpc()
			.discount.toggle.mutate({ ids: selected.map((d) => d.id), type: 'DISABLE' })
			.catch((e) => tce(e, { showToast: true }));
		await fetchDiscounts();
		selected = [];
	});

	const removeDiscounts = ui.loaderWrapper({ title: 'Deleting Discounts' }, async () => {
		await trpc()
			.discount.remove.mutate({ ids: selected.map((d) => d.id) })
			.catch((e) => tce(e, { showToast: true }));
		await fetchDiscounts();
		selected = [];
	});
</script>

<Layout pageTitle="Discounts">
	<div class="flex gap-4 mt-5">
		<input
			type="text"
			class="input input-sm input-bordered w-full"
			placeholder="Type here..."
			bind:value={filters.search}
		/>

		<Flatpickr
			class="input input-sm input-bordered w-96 text-center"
			options={{ mode: 'range', dateFormat: 'j M Y', plugins: [] }}
			value={filters.dates}
			on:close={(e) => {
				if (e.detail[0].length === 2) {
					filters.dates = [
						new Date(e.detail[0][0].setHours(0, 0, 0, 0)),
						new Date(e.detail[0][1].setHours(23, 59, 59, 999))
					];
				}
			}}
			children
		/>

		<button class="btn btn-sm btn-primary" on:click={() => fetchDiscounts()}>Search</button>
		<button class="btn btn-sm btn-secondary" on:click={() => showModal('generateDiscountModal')}>Generate Codes</button>
	</div>

	{#if !data}
		<Loader title="Fetching Discounts" overlay={false} fixed={false} classes="mt-40" />
	{:else}
		{@const { total, discounts } = data}

		{#if selected.length > 0}
			<div class="flex justify-end gap-4 mt-6">
				<button class="btn btn-sm btn-success {!isEnableBtn && 'btn-disabled'}" on:click={enableDiscounts}>
					Enable
				</button>
				<button class="btn btn-sm btn-warning {!isDisableBtn && 'btn-disabled'}" on:click={disableDiscounts}>
					Disable
				</button>
				<button class="btn btn-sm btn-error {!isRemoveBtn && 'btn-disabled'}" on:click={removeDiscounts}>
					Delete
				</button>
			</div>
		{/if}

		<div class="overflow-x-auto mb-8 {selected.length > 0 ? 'mt-4' : 'mt-8'}">
			<table class="table table-xs border">
				<thead>
					<tr class="text-center">
						<th class="w-1">
							<input
								type="checkbox"
								class="checkbox checkbox-primary checkbox-sm"
								disabled={discounts.length === 0}
								checked={selected.length === discounts.length}
								on:change={() => {
									if (selected.length === discounts.length) selected = [];
									else selected = [...discounts];
								}}
							/>
						</th>
						<th>Code</th>
						<th>Created At</th>
						<th>Type</th>
						<th>Value</th>
						<th>Start Date</th>
						<th>End Date</th>
						<th>Usage</th>
						<th>Status</th>
						<th />
					</tr>
				</thead>
				<tbody>
					{#each discounts as discount}
						{@const { code, createdAt, type, value, startDate, endDate, usageLimit, enable, _count } = discount}
						<tr class="text-center">
							<td>
								<input
									type="checkbox"
									class="checkbox checkbox-primary checkbox-sm"
									checked={selected.includes(discount)}
									on:change={() => {
										if (selected.includes(discount)) selected = selected.filter((c) => c !== discount);
										else selected = [...selected, discount];
									}}
								/>
							</td>
							<td>{code}</td>
							<td>{createdAt.toLocaleString()}</td>
							<td class="capitalize">{type.toLowerCase()}</td>
							<td>{value}</td>
							<td>{startDate ? startDate.toLocaleString() : 'N/A'}</td>
							<td>{endDate ? endDate.toLocaleString() : 'N/A'}</td>
							<td>{_count.orders} / {usageLimit}</td>
							<td>
								{#if _count.orders === usageLimit}
									<div class="badge badge-primary">Used</div>
								{:else if endDate && endDate < new Date()}
									<div class="badge badge-error">Expired</div>
								{:else if startDate && startDate > new Date()}
									<div class="badge badge-info">Scheduled</div>
								{:else if enable}
									<div class="badge badge-success">Active</div>
								{:else}
									<div class="badge badge-warning">Inactive</div>
								{/if}
							</td>
						</tr>
					{:else}
						<tr>
							<td colspan="13" class="text-center h-12 text-sm">No Discounts Found</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="flex justify-end gap-2">
			<button
				class="btn btn-sm btn-square btn-primary {filters.page === 1 && 'btn-disabled'}"
				on:click={() => fetchDiscounts(filters.page - 1)}
			>
				<Icon icon="mdi:chevron-left" width={20} />
			</button>
			<button class="btn btn-sm font-semibold no-animation cursor-default">
				Page {filters.page}
			</button>
			<button
				class="btn btn-sm btn-square btn-primary {filters.page > total / 25 && 'btn-disabled'}"
				on:click={() => fetchDiscounts(filters.page + 1)}
			>
				<Icon icon="mdi:chevron-right" width={20} />
			</button>
		</div>
		<div class="flex justify-end mt-2 font-semibold opacity-60">
			Results: {(filters.page - 1) * 25 + 1} - {(filters.page - 1) * 25 + discounts.length} of {total}
		</div>
	{/if}
</Layout>

<GenerateDiscountModal {fetchDiscounts} />
