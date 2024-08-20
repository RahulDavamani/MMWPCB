<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Stencil } from '../../../../../zod/products/stencil.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.stencil.existingFiducials;
	$: ({ existingFiducials } = $quote.stencil);
	$: values = [
		{ name: l.options.halfLasered, value: 'HALF_LASERED' },
		{ name: l.options.laseredThrough, value: 'LASERED_THROUGH' },
		{ name: $lg.common.none, value: 'NONE' }
	] as { name: string; value: Stencil['existingFiducials'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			<button
				class="btn btn-sm btn-primary {existingFiducials !== value && 'btn-outline'}"
				on:click={() => ($quote.stencil.existingFiducials = value)}
			>
				{name}
			</button>
		{/each}
	</div>
</FormItem>
