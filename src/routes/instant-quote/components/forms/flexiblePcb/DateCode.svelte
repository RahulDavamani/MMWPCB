<script lang="ts">
	import { productDetails } from '../../../../../stores/product.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: pd = $productDetails.flexiblePcb.dateCode;
	$: ({ dateCode } = $quote.products.flexiblePcb);
</script>

<FormItem {pd}>
	<div class="flex gap-8">
		<select class="select select-bordered select-sm" bind:value={$quote.products.flexiblePcb.dateCode}>
			{#each pd.values as { title, value }}
				<option {value}>{title}</option>
			{/each}
		</select>
		{#if dateCode === 'CUSTOMER_REQUIRED'}
			<textarea
				class="textarea textarea-bordered w-96"
				bind:value={$quote.products.flexiblePcb.dateCodeDescription}
				placeholder={pd.l.placeholder}
				rows={2}
			/>
		{/if}
	</div>
</FormItem>
