<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.fr4TG;
	$: ({ layers, fr4TG } = $quote.standardPcb);

	$: values = [
		{ name: 'TG 130-140', value: 'TG130_140' },
		{ name: 'TG 150-160', value: 'TG150_160' },
		{ name: 'TG 170-180', value: 'TG170_180' },
		{ name: 'S1000H TG150', value: 'S1000H_TG150' },
		{ name: 'S1000-2M TG170', value: 'S1000_2M_TG170' }
	] as { name: string; value: StandardPcb['fr4TG'] }[];
</script>

{#if fr4TG}
	<FormItem title={l.title} moreInfo={{ description: l.description, url: '' }}>
		<div class="flex flex-wrap gap-4">
			{#each values as { name, value }}
				{@const disabled = layers > 2 && (value === 'TG130_140' || value === 'TG150_160' || value === 'TG170_180')}
				<button
					class="btn btn-sm btn-primary {fr4TG !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
					on:click={() => ($quote.standardPcb.fr4TG = value)}>{name}</button
				>
			{/each}
		</div>
	</FormItem>

	<div class="ml-44 mb-6 text-secondary text-sm">{l.disclaimer}</div>
{/if}
