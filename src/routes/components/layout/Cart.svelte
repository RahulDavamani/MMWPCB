<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import type { PageData } from '../../$types';

	$: l = $lg.navbar.cart;
	$: ({ cart } = $page.data as PageData);
	$: cartItems = (() => {
		if (!cart) return undefined;
		const { id, ...cartItems } = cart;
		return cartItems;
	})();
	$: cartCount = cartItems ? Object.values(cartItems).reduce((acc, cur) => acc + cur.length, 0) : 0;
	$: cartTotal = cartItems
		? Object.values(cartItems).reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + cur.initialPrice, 0), 0)
		: 0;
	$: products = [
		{ name: $lg.products.standardPcb, value: 'standardPcbs', img: 'standardPcb' },
		{ name: $lg.products.advancedPcb, value: 'advancedPcbs', img: 'advancedPcb' },
		{ name: $lg.products.flexiblePcb, value: 'flexiblePcbs', img: 'flexiblePcb' },
		{ name: $lg.products.assembly, value: 'assemblies', img: 'assembly' },
		{ name: $lg.products.stencil, value: 'stencils', img: 'stencil' }
	];
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="dropdown dropdown-end">
	<div tabindex={0} class="btn btn-sm btn-ghost px-1 indicator mt-2">
		<Icon icon="mdi:cart-outline" width={28} class="text-white" />
		<span class="indicator-item badge badge-sm badge-secondary font-bold text-white">
			{cartCount}
		</span>
	</div>
	<div tabindex={0} class="dropdown-content mt-4 z-[50] bg-base-100 border shadow rounded-box w-[40rem] p-4 text-sm">
		<div class="flex justify-between px-2 mb-4">
			<div class="text-lg font-bold">{l.myCart} ({cartCount})</div>
			<div class="btn btn-primary btn-outline btn-sm">{l.viewCart}</div>
		</div>

		{#if !cartItems}
			<div></div>
		{:else}
			<div class="overflow-x-auto">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th></th>
							<th>{l.name}</th>
							<th class="text-center">{l.buildTime}</th>
							<th class="text-center">{l.quantity}</th>
							<th class="text-center">{l.price}</th>
						</tr>
					</thead>
					<tbody>
						{#each Object.entries(cartItems) as [key, items]}
							{#each items as { name, quantity, buildTime, initialPrice }}
								{@const product = products.find((p) => p.value === key)}
								<tr>
									<td class="w-20">
										{#await import(`$lib/assets/products/${product?.img}Icon.png`) then { default: src }}
											<img {src} alt="icon" width={50} />
										{/await}
									</td>
									<td>
										<div class="text-base font-semibold text-primary">{name}</div>
										<div class="italic opacity-75">{product?.name}</div>
									</td>
									<td class="text-center">{buildTime}</td>
									<td class="text-center">{quantity}</td>
									<td class="text-center font-mono">${initialPrice.toFixed(2)}</td>
								</tr>
							{/each}
						{/each}
					</tbody>
				</table>
			</div>
			<div class="divider mt-0 mb-2" />
			<div class="flex justify-end items-baseline mr-7 gap-8 font-bold">
				<div class="text-sm">{l.subTotal}</div>
				<div class="text-xl font-mono">${cartTotal.toFixed(2)}</div>
			</div>
		{/if}
	</div>
</div>
