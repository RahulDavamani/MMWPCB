<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Stencil } from '../../../../../zod/products/stencil.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.stencil.electroPolishing;
	$: ({ electroPolishing } = $quote.stencil);
	$: values = [
		{ name: $lg.common.no, value: false },
		{ name: $lg.common.yes, value: true }
	] as { name: string; value: Stencil['electroPolishing'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {electroPolishing !== value && 'btn-outline'}"
				on:click={() => ($quote.stencil.electroPolishing = value)}
			>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
