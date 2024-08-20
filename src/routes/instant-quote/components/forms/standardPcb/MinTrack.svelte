<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.minTrack;
	$: ({ minTrack } = $quote.standardPcb);

	$: values = [3, 4, 5, 6, 8];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {minTrack !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.minTrack = value)}>{value}/{value}mil</button
			>
		{/each}
	</div>
</FormItem>
