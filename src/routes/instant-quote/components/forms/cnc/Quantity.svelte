<script lang="ts">
	import Icon from '@iconify/svelte';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.cnc.quantity;
	$: isError = $quoteError.cnc.quantity;
	$: ({ quantity } = $quote.products.cnc);
</script>

<FormItem {pd} {isError}>
	<div class="flex gap-2">
		{#each Array(quantity.length).keys() as value}
			<input
				type="number"
				class="input input-bordered input-sm {isError && 'input-error'} w-20"
				bind:value={$quote.products.cnc.quantity[value]}
			/>
		{/each}
		{#if quantity.length > 1}
			<button
				class="btn btn-sm btn-square btn-error"
				on:click={() => ($quote.products.cnc.quantity = quantity.slice(0, quantity.length - 1))}
			>
				<Icon icon="mdi:clear" />
			</button>
		{/if}
		<button
			class="btn btn-sm btn-square btn-success"
			on:click={() => ($quote.products.cnc.quantity = [...quantity, 0])}
		>
			<Icon icon="mdi:plus" />
		</button>
	</div>
</FormItem>
