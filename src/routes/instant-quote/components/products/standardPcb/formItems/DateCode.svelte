<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, placeholder, options } = $lg.instantQuote.standardPcb.dateCode);
	$: ({ dateCode } = $quote.standardPcb);

	$: values = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: options.velenovaPrefer, value: 'VELENOVA_PREFER' },
		{ name: options.customerRequired, value: 'CUSTOMER_REQUIRED' },
		{ name: options.updateDesignedDateCode, value: 'UPDATE_DESIGNED_DATE_CODE' }
	] as { name: string; value: StandardPcb['dateCode'] }[];
</script>

<FormItem {title} moreInfo={{ description }}>
	<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.dateCode}>
		{#each values as { name, value }}
			<option {value}>{name}</option>
		{/each}
	</select>
	{#if dateCode === 'CUSTOMER_REQUIRED'}
		<textarea
			class="textarea textarea-bordered w-96"
			bind:value={$quote.standardPcb.dateCodeDescription}
			{placeholder}
			rows={2}
		/>
	{/if}
</FormItem>
