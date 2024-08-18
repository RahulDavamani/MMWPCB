<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, disclaimer } = $lg.instantQuote.standardPcb.innerCopper);
	$: ({ innerCopper } = $quote.standardPcb);

	$: values = [1, 1.5, 2, 3, 4, 5, 6];
</script>

{#if innerCopper}
	<FormItem {title} moreInfo={{ description }} {disclaimer}>
		<div class="flex flex-wrap gap-4">
			{#each values as value}
				<button
					class="btn btn-sm btn-primary {innerCopper !== value && 'btn-outline'}"
					on:click={() => ($quote.standardPcb.innerCopper = value)}>{value} oz Cu</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
