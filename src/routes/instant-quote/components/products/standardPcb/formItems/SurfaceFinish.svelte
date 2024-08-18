<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormControl from '../../../../../components/FormControl.svelte';
	import FormItem from '../../../FormItem.svelte';

	$: ({ title, description, options, ...l } = $lg.instantQuote.standardPcb.surfaceFinish);
	$: ({ material, surfaceFinish } = $quote.standardPcb);

	$: values = [
		{ name: options.haslWithLead, value: 'HASL_WITH_LEAD' },
		{ name: options.haslLeadFree, value: 'HASL_LEAD_FREE' },
		{ name: options.immersionGold, value: 'IMMERSION_GOLD' },
		{ name: options.osp, value: 'OSP' },
		{ name: options.hardGold, value: 'HARD_GOLD' },
		{ name: options.immersionSilver, value: 'IMMERSION_SILVER' },
		{ name: options.immersionTin, value: 'IMMERSION_TIN' },
		{ name: options.haslLeadFreeImmersionGold, value: 'HASL_LEAD_FREE_SELECTIVE_IMMERSION_GOLD' },
		{ name: options.haslLeadFreeHardGold, value: 'HASL_LEAD_FREE_SELECTIVE_HARD_GOLD' },
		{ name: options.immersionGoldHardGold, value: 'IMMERSION_GOLD_SELECTIVE_HARD_GOLD' },
		{ name: options.enepig, value: 'ENEPIG' },
		{ name: options.plainCopper, value: 'PLAIN_COPPER' }
	] as { name: string; value: StandardPcb['surfaceFinish'] }[];
</script>

<FormItem {title} moreInfo={{ description }}>
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
