<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.innerCopper;
	$: ({ innerCopper } = $quote.standardPcb);

	$: values = [1, 1.5, 2, 3, 4, 5, 6];
</script>

{#if innerCopper}
	<FormItem title={l.title} moreInfo={{ description: l.description }}>
		<div class="flex flex-wrap gap-4">
			{#each values as value}
				<button
					class="btn btn-sm btn-primary {innerCopper !== value && 'btn-outline'}"
					on:click={() => ($quote.standardPcb.innerCopper = value)}>{value} oz Cu</button
				>
			{/each}
		</div>
	</FormItem>
	<div class="ml-44 text-sm text-secondary">
		{l.disclaimer}
	</div>
{/if}
