<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.fr4TG;
	$: ({ layers, fr4TG } = $quote.products.standardPcb);
</script>

{#if fr4TG}
	<FormItem {pd}>
		<div class="flex flex-wrap gap-4">
			{#each pd.values as { title, value }}
				{@const disabled = layers > 2 && (value === 'TG130_140' || value === 'TG150_160' || value === 'TG170_180')}
				<button
					class="btn btn-sm btn-primary {fr4TG !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
					on:click={() => ($quote.products.standardPcb.fr4TG = value)}>{title}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
