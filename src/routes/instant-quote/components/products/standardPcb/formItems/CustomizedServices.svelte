<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';
	import DateCode from './DateCode.svelte';
	import HoleCopperThickness from './HoleCopperThickness.svelte';
	import PeelableSolderMask from './PeelableSolderMask.svelte';
	import UlMarking from './ulMarking.svelte';

	$: l = $lg.instantQuote.standardPcb.customizedServices;
	$: ({ customizedServices } = $quote.standardPcb);

	$: values = [
		{ ...l.options.halfCut, url: '', imgSrc: '', value: 'HALF_CUT' },
		{ ...l.options.edgePlating, value: 'EDGE_PLATING' },
		{ ...l.options.impedanceControl, value: 'IMPEDANCE_CONTROL' },
		{ ...l.options.halogenFree, value: 'HALOGEN_FREE' },
		{ ...l.options.customStackup, url: '', value: 'CUSTOM_STACKUP' },
		{ ...l.options.carbonInk, value: 'CARBON_INK' },
		{ ...l.options.allViasFilled, value: 'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED' },
		{ ...l.options.viaInPad, value: 'VIA_IN_PAD' },
		{ ...l.options.pressFitHoles, imgSrc: '', value: 'PRESS_FIT_HOLES' },
		{ ...l.options.countersink, imgSrc: '', value: 'COUNTERSINK' },
		{ ...l.options.zAxisMilling, imgSrc: '', value: 'Z_AXIS_MILLING' },
		{ ...l.options.blackFr4, url: '', value: 'BLACK_FR4' },
		{ ...l.options.embeddedCopperPcb, imgSrc: '', value: 'EMBEDDED_COPPER_PCB' },
		{ ...l.options.cavityPcb, imgSrc: '', value: 'CAVITY_PCB' },
		{ ...l.options.semiFlexPcb, imgSrc: '', value: 'SEMI_FLEX_PCB' },
		{ ...l.options.hybridPcb, value: 'WHOLE_PARTIALLY_HYBRID_PCB' },
		{ ...l.options.backDrillPcb, imgSrc: '', value: 'BACK_DRILL_PCB' },
		{ ...l.options.leadlessPartialHardGold, value: 'LEADLESS_PARTIALLY_PLATED_HARD_GOLD' }
	] as {
		title: string;
		description?: string;
		url?: string;
		imgSrc?: string;
		value: StandardPcb['customizedServices'][number];
	}[];

	let collapseOpen = false;
</script>

<div class="collapse collapse-arrow mt-6 {collapseOpen && 'overflow-visible'}">
	<input type="checkbox" class="peer" bind:checked={collapseOpen} />
	<div class="collapse-title bg-base-200 rounded-lg font-semibold">{l.title}</div>
	<div class="collapse-content">
		<div class="mt-4 text-sm">{l.description}</div>
		<div class="flex flex-wrap gap-x-6">
			<PeelableSolderMask />
			<HoleCopperThickness />
			<UlMarking />
		</div>
		<DateCode />

		<div class="divider" />

		<div class="flex flex-wrap gap-x-8 text-sm">
			{#each values as { title, value, ...moreInfo }}
				<FormItem {title} {moreInfo} classes="items-center">
					<input
						type="checkbox"
						class="checkbox checkbox-primary checkbox-xs rounded-md"
						checked={customizedServices.includes(value)}
						on:click={() => {
							if (customizedServices.includes(value))
								$quote.standardPcb.customizedServices = customizedServices.filter((v) => v !== value);
							else $quote.standardPcb.customizedServices = [...customizedServices, value];
						}}
					/>
				</FormItem>
			{/each}
		</div>
	</div>
</div>
