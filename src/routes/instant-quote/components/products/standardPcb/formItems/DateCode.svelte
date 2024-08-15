<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.dateCode;
	$: ({ dateCode } = $quote.standardPcb);

	$: values = [
		{ name: $lg.common.none, value: 'NONE' },
		{ name: l.options.velenovaPrefer, value: 'VELENOVA_PREFER' },
		{ name: l.options.customerRequired, value: 'CUSTOMER_REQUIRED' },
		{ name: l.options.updateDesignedDateCode, value: 'UPDATE_DESIGNED_DATE_CODE' }
	] as { name: string; value: StandardPcb['dateCode'] }[];
</script>

<FormItem title={l.title} moreInfo={{ description: l.description }}>
	<select class="select select-bordered select-sm" bind:value={$quote.standardPcb.dateCode}>
		{#each values as { name, value }}
			<option {value}>{name}</option>
		{/each}
	</select>
	{#if dateCode === 'CUSTOMER_REQUIRED'}
		<textarea
			class="textarea textarea-bordered w-96"
			bind:value={$quote.standardPcb.dateCodeDescription}
			placeholder={l.placeholder}
			rows={2}
		/>
	{/if}
</FormItem>
