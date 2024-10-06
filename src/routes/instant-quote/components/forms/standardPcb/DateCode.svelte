<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.standardPcb.dateCode;
	$: ({ dateCode } = $quote.products.standardPcb);
</script>

<FormItem {pd}>
	<div class="flex gap-8">
		<select class="select select-bordered select-sm" bind:value={$quote.products.standardPcb.dateCode}>
			{#each pd.values as { title, value }}
				<option {value}>{title}</option>
			{/each}
		</select>
		{#if dateCode === 'CUSTOMER_REQUIRED'}
			<textarea
				class="textarea textarea-bordered w-96"
				bind:value={$quote.products.standardPcb.dateCodeDescription}
				placeholder={pd.l.placeholder}
				rows={2}
			/>
		{/if}
	</div>
</FormItem>
