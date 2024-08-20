<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.rogers;
	$: ({ rogers } = $quote.standardPcb);

	$: values = [
		{ name: 'Rogers 4003C', value: 'ROGERS_4003C' },
		{ name: 'Rogers 4350B', value: 'ROGERS_4350B' }
	] as { name: string; value: StandardPcb['rogers'] }[];
</script>

{#if rogers}
	<FormItem {l}>
		<div class="flex flex-wrap gap-4">
			{#each values as { name, value }}
				<button
					class="btn btn-sm btn-primary {rogers !== value && 'btn-outline'}"
					on:click={() => ($quote.standardPcb.rogers = value)}>{name}</button
				>
			{/each}
		</div>
	</FormItem>
{/if}
