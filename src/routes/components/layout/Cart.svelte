<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { lg } from '../../../stores/i18n.store';
	import type { PageData } from '../../$types';
	import { productTypes } from '../../../stores/product.store';

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
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="dropdown dropdown-end">
	<div tabindex={0} class="btn btn-sm btn-ghost px-1 indicator mt-2">
		<Icon icon="mdi:cart-outline" width={28} class="text-black" />
		<span class="indicator-item badge badge-sm badge-secondary font-bold text-black">
			{cartCount}
		</span>
	</div>
	<div tabindex={0} class="dropdown-content mt-4 z-[50] bg-base-100 border shadow rounded-box w-[40rem] p-4 text-sm">
		<div class="flex justify-between px-2 mb-4">
			<div class="text-lg font-bold">{l.myCart} ({cartCount})</div>
			<a href="/order" class="btn btn-primary btn-outline btn-sm">{l.proceedToCheckout}</a>
		</div>

		{#if !cartItems}
			<a href="/login" class="btn btn-link w-full text-base">Login to view your cart</a>
		{:else if cartCount === 0}
			<div class="text-center text-base mt-2">Your cart is empty</div>
			<a href="/instant-quote" class="btn btn-link btn-sm text-base w-full">Order Now</a>
		{:else}
			<div class="overflow-x-auto">
				<table class="table">
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
								{@const product = $productTypes.find((p) => p.keys === key)}
								<tr>
									<td class="w-20">
										{#await import(`$lib/assets/products/${product?.img}.png`) then { default: src }}
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

			{#if cartCount > 1}
				<div class="divider mt-0 mb-2" />
			{:else}
				<div class="mt-4" />
			{/if}

			<div class="flex justify-end items-baseline mr-7 gap-8 font-bold">
				<div class="text-sm">{l.subTotal}</div>
				<div class="text-xl font-mono">${cartTotal.toFixed(2)}</div>
			</div>
		{/if}
	</div>
</div>
