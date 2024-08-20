<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Stencil } from '../../../../../zod/products/stencil.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.stencil.type;
	$: ({ type } = $quote.stencil);
	$: values = [
		{ name: l.options.framework, value: 'FRAMEWORK' },
		{ name: l.options.nonFramework, value: 'NON_FRAMEWORK' }
	] as { name: string; value: Stencil['type'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {type !== value && 'btn-outline'}"
				on:click={() => ($quote.stencil.type = value)}
			>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
