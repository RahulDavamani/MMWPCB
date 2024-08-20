<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Stencil } from '../../../../../zod/products/stencil.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.stencil.side;
	$: ({ side } = $quote.stencil);
	$: values = [
		{ name: l.options.top, value: 'TOP_SIDE' },
		{ name: l.options.bottom, value: 'BOTTOM_SIDE' },
		{ name: l.options.topBottomSingle, value: 'TOP_BOTTOM_SINGLE' },
		{ name: l.options.topBottomSeparate, value: 'TOP_BOTTOM_SEPARATE' }
	] as { name: string; value: Stencil['side'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {side !== value && 'btn-outline'}"
				on:click={() => ($quote.stencil.side = value)}
			>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
