<script lang="ts">
	import Icon from '@iconify/svelte';
	import { productDetails } from '../../../../../stores/product.store';
	import { quote, quoteError } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.vacuumCasting.quantity;
	$: isError = $quoteError.vacuumCasting.quantity;
	$: ({ quantity } = $quote.products.vacuumCasting);
</script>

<FormItem {pd} {isError}>
	<div class="flex gap-2">
		{#each Array(quantity.length).keys() as value}
			<input
				type="number"
				class="input input-bordered input-sm {isError && 'input-error'} w-20"
				bind:value={$quote.products.vacuumCasting.quantity[value]}
			/>
		{/each}
		<!-- {#if quantity.length > 1}
			<button
				class="btn btn-sm btn-square btn-error"
				on:click={() => ($quote.products.vacuumCasting.quantity = quantity.slice(0, quantity.length - 1))}
			>
				<Icon icon="mdi:clear" />
			</button>
		{/if}
		<button
			class="btn btn-sm btn-square btn-success"
			on:click={() => ($quote.products.vacuumCasting.quantity = [...quantity, 0])}
		>
			<Icon icon="mdi:plus" />
		</button> -->
	</div>
</FormItem>
