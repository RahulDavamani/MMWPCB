<script lang="ts">
	import { lg } from '../../../../../stores/i18n.store';
	import { quote } from '../../../../../stores/quote.store';
	import type { Assembly } from '../../../../../zod/products/assembly.schema';
	import FormItem from '../../FormItem.svelte';

	$: l = $lg.instantQuote.assembly.flexibleOptions;
	$: ({ flexibleOption } = $quote.assembly);
	$: values = [
		{ ...l.options.turnkey, value: 'TURNKEY' },
		{ ...l.options.kitted, value: 'KITTED' },
		{ ...l.options.combo, value: 'COMBO' }
	] as { title: string; description: string; value: Assembly['flexibleOption'] }[];
</script>

<FormItem {l}>
	<div class="flex flex-wrap gap-4">
		{#each values as { title, description, value }}
			<button
				class="btn btn-primary {flexibleOption !== value && 'btn-outline'}"
				on:click={() => ($quote.assembly.flexibleOption = value)}
			>
				<div class="flex flex-col">
					<span>{title}</span>
					<span class="text-secondary text-xs">{description}</span>
				</div>
			</button>
		{/each}
	</div>
</FormItem>
