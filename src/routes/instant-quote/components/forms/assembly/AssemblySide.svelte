<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Assembly } from '../../../../../zod/products/assembly.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.side;
	$: ({ side } = $quote.assembly);

	$: values = [
		{ name: l.options.topSide, value: 'TOP_SIDE' },
		{ name: l.options.bottomSide, value: 'BOTTOM_SIDE' },
		{ name: l.options.bothSides, value: 'BOTH_SIDES' }
	] as { name: string; value: Assembly['side'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {side !== value && 'btn-outline'}"
				on:click={() => ($quote.assembly.side = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
