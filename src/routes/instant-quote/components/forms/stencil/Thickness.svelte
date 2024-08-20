<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.stencil.thickness;
	$: ({ thickness } = $quote.stencil);

	$: values = [0.08, 0.1, 0.12, 0.15, 0.2, 0.25, 0.3];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as value}
			<button
				class="btn btn-sm btn-primary {thickness !== value && 'btn-outline'}"
				on:click={() => ($quote.stencil.thickness = value)}>{value} mm</button
			>
		{/each}
	</div>
</FormItem>
