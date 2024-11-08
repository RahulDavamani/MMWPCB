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
		? Object.values(cartItems).reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + (cur.initialPrice ?? 0), 0), 0)
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
	<div tabindex={0} class="dropdown-content mt-4 z-[50] bg-base-100 border shadow rounded-box w-96 p-4">
		<div class="flex justify-between px-2 mb-4">
			<div class="text-lg font-bold">{l.myCart} ({cartCount})</div>
			<a href="/order" class="btn btn-primary btn-outline btn-sm">{l.proceedToCheckout}</a>
		</div>

		{#if !cartItems}
			<a href="/login" class="btn btn-link w-full text-base">{l.loginViewCart}</a>
		{:else if cartCount === 0}
			<div class="text-center text-base mt-6">{l.cartEmpty}</div>
			<a href="/instant-quote" class="btn btn-link btn-sm text-base w-full">{l.orderNow}</a>
		{:else}
			<div class="px-3">
				{#each Object.entries(cartItems) as [key, items]}
					{@const product = Object.values($productTypes).find((p) => p.keys === key)}
					{#if items.length > 0}
						<div class="text-sm font-semibold text-secondary mb-2">{product?.title}</div>
					{/if}
					{#each items as { name, quantity, initialPrice }}
						<div class="flex justify-between gap-x-4 mb-2">
							<div class="flex items-baseline gap-1">
								<span class="font-mono font-semibold min-w-8">{quantity}0</span>
								x <span class="ml-2">{name}</span>
							</div>
							<div class="font-mono">{initialPrice ? `$${initialPrice.toFixed(2)}` : 'RFQ'}</div>
						</div>
					{/each}
				{/each}
			</div>

			<div class="divider my-1" />

			<div class="flex justify-end items-baseline mr-3 gap-8 font-bold text-primary">
				<div class="text-sm">{l.subTotal}</div>
				<div class="text-xl font-mono">${cartTotal.toFixed(2)}</div>
			</div>
		{/if}
	</div>
</div>
