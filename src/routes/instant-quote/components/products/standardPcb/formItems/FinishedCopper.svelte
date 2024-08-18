<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, disclaimer, ...l } = $lg.instantQuote.standardPcb.finishedCopper);
	$: ({ finishedCopper } = $quote.standardPcb);

	$: values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
</script>

<FormItem {title} moreInfo={{ description }} {disclaimer}>
	<div class="flex flex-wrap gap-4">
		<button
			class="btn btn-sm btn-primary {finishedCopper !== 0 && 'btn-outline'}"
			on:click={() => ($quote.standardPcb.finishedCopper = 0)}
		>
			{l.bareBoard} / 0 oz Cu</button
		>
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {finishedCopper !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.finishedCopper = value)}>{value} oz Cu</button
			>
		{/each}
	</div>
</FormItem>
