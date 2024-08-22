<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import type { PageData } from '../$types';
	import { productTypes } from '../../../stores/productTypes.store';
	import IconBtn from '../../components/IconBtn.svelte';

	$: ({
		order: { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils }
	} = $page.data as PageData);
	$: products = { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils };
	$: productCount = Object.values(products).reduce((acc, cur) => acc + cur.length, 0);
	$: productInitialTotal = Object.values(products).reduce(
		(acc, cur) => acc + cur.reduce((acc, cur) => acc + cur.initialPrice, 0),
		0
	);
</script>

<div class="border rounded-lg shadow p-4">
	<div class="flex justify-between items-center mb-2">
		<div class="text-lg font-bold flex items-center gap-2">
			<Icon icon="ph:circuitry" width={20} />
			Products ({productCount})
		</div>
		<a href="/instant-quote" class="btn btn-success btn-outline btn-sm">
			<Icon icon="mdi:add" />
			Add Product
		</a>
	</div>

	<div class="overflow-x-auto max-h-[30rem]">
		<table class="table table-pin-rows">
			<thead>
				<tr>
					<!-- <th>
						<input type="checkbox" class="checkbox checkbox-primary checkbox-sm" />
					</th> -->
					<th></th>
					<th>Product</th>
					<th class="text-center">Build Time</th>
					<th class="text-center">Quantity</th>
					<th class="text-center">Gerber File</th>
					<th class="text-center">Quote Price</th>
					<th><IconBtn icon="mdi:delete-forever" iconClasses="text-error" /></th>
				</tr>
			</thead>
			<tbody>
				{#each Object.entries(products) as [key, items]}
					{#each items as { id, name, quantity, buildTime, fileName, initialPrice }}
						{@const product = $productTypes.find((p) => p.keys === key)}
						<tr>
							<!-- <td>
								<input type="checkbox" class="checkbox checkbox-primary checkbox-sm" />
							</td> -->
							<td class="w-20 min-w-20">
								{#await import(`$lib/assets/products/${product?.img}.png`) then { default: src }}
									<img {src} alt="icon" width={50} />
								{/await}
							</td>
							<td class="max-w-xs">
								<div class="text-base font-semibold text-primary">{name}</div>
								<div class="italic opacity-75">{product?.name}</div>
								<div class="flex mt-2">
									<div class="btn btn-xs btn-link text-sm px-0 text-info">Details</div>
									<div class="divider divider-horizontal"></div>
									<div class="btn btn-xs btn-link text-sm px-0 text-warning">Edit</div>
								</div>
							</td>
							<td class="text-center">{buildTime}</td>
							<td class="text-center">{quantity}</td>
							<td class="text-center {!fileName && 'text-error'}">{fileName ?? 'Not Uploaded'}</td>
							<td class="text-center font-mono">${initialPrice.toFixed(2)}</td>
							<td><IconBtn icon="mdi:delete" iconClasses="text-error" /></td>
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
</div>
