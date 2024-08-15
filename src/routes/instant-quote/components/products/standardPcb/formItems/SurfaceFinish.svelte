<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormControl from '../../../../../components/FormControl.svelte';
	import FormItem from '../../../FormItem.svelte';

	$: l = $lg.instantQuote.standardPcb.surfaceFinish;
	$: ({ material, surfaceFinish } = $quote.standardPcb);

	$: values = [
		{ name: l.options.haslWithLead, value: 'HASL_WITH_LEAD' },
		{ name: l.options.haslLeadFree, value: 'HASL_LEAD_FREE' },
		{ name: l.options.immersionGold, value: 'IMMERSION_GOLD' },
		{ name: l.options.osp, value: 'OSP' },
		{ name: l.options.hardGold, value: 'HARD_GOLD' },
		{ name: l.options.immersionSilver, value: 'IMMERSION_SILVER' },
		{ name: l.options.immersionTin, value: 'IMMERSION_TIN' },
		{ name: l.options.haslLeadFreeImmersionGold, value: 'HASL_LEAD_FREE_SELECTIVE_IMMERSION_GOLD' },
		{ name: l.options.haslLeadFreeHardGold, value: 'HASL_LEAD_FREE_SELECTIVE_HARD_GOLD' },
		{ name: l.options.immersionGoldHardGold, value: 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD' },
		{ name: l.options.enepig, value: 'ENEPIG' },
		{ name: l.options.plainCopper, value: 'PLAIN_COPPER' }
	] as { name: string; value: StandardPcb['surfaceFinish'] }[];
</script>

<FormItem title={l.title} moreInfo={{ description: l.description }}>
	<div class="flex flex-wrap gap-4">
		{#each values as { name, value }}
			{@const disabled = (material === 'HDI' || material === 'COPPER_BASE') && value.includes('HASL')}
			<button
				class="btn btn-sm btn-primary {surfaceFinish !== value && 'btn-outline'} {disabled && 'btn-disabled'}"
				on:click={() => ($quote.standardPcb.surfaceFinish = value)}>{name}</button
			>
		{/each}
	</div>
</FormItem>
<div class="ml-44">
	<FormControl inputType="In" label={l.acceptHASLChange} labelClasses="text-sm text-secondary">
		<input type="checkbox" class="checkbox checkbox-secondary checkbox-sm" />
	</FormControl>
</div>
