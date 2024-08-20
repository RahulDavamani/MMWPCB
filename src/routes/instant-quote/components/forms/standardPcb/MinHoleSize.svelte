<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.minHoleSize;
	$: ({ minHoleSize } = $quote.standardPcb);

	$: values = [0.15, 0.2, 0.25, 0.3, 0.8, 1.0];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {minHoleSize !== value && 'btn-outline'}"
				on:click={() => ($quote.standardPcb.minHoleSize = value)}>{value}mm</button
			>
		{/each}
		<button
			class="btn btn-sm btn-primary {minHoleSize !== 0 && 'btn-outline'}"
			on:click={() => ($quote.standardPcb.minHoleSize = 0)}>{l.noDrill}</button
		>
	</div>
</FormItem>
