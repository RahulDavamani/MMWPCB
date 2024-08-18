<script lang="ts">
	import { lg } from '../../../../../../stores/i18n.store';
	import { quote } from '../../../../../../stores/quote.store';
	import type { StandardPcb } from '../../../../../../zod/products/standardPcb.schema';
	import FormItem from '../../../FormItem.svelte';
	import DateCode from './DateCode.svelte';
	import HoleCopperThickness from './HoleCopperThickness.svelte';
	import PeelableSolderMask from './PeelableSolderMask.svelte';
	import UlMarking from './ulMarking.svelte';

	$: ({ title, description, options } = $lg.instantQuote.standardPcb.customizedServices);
	$: ({ customizedServices } = $quote.standardPcb);

	$: values = [
		{ ...options.halfCut, url: '', imgSrc: '', value: 'HALF_CUT' },
		{ ...options.edgePlating, value: 'EDGE_PLATING' },
		{ ...options.impedanceControl, value: 'IMPEDANCE_CONTROL' },
		{ ...options.halogenFree, value: 'HALOGEN_FREE' },
		{ ...options.customStackup, url: '', value: 'CUSTOM_STACKUP' },
		{ ...options.carbonInk, value: 'CARBON_INK' },
		{ ...options.allViasFilled, value: 'ALL_VIAS_FILLED_WITH_RESIN_AND_CAPPED' },
		{ ...options.viaInPad, value: 'VIA_IN_PAD' },
		{ ...options.pressFitHoles, imgSrc: '', value: 'PRESS_FIT_HOLES' },
		{ ...options.countersink, imgSrc: '', value: 'COUNTERSINK' },
		{ ...options.zAxisMilling, imgSrc: '', value: 'Z_AXIS_MILLING' },
		{ ...options.blackFr4, url: '', value: 'BLACK_FR4' },
		{ ...options.embeddedCopperPcb, imgSrc: '', value: 'EMBEDDED_COPPER_PCB' },
		{ ...options.cavityPcb, imgSrc: '', value: 'CAVITY_PCB' },
		{ ...options.semiFlexPcb, imgSrc: '', value: 'SEMI_FLEX_PCB' },
		{ ...options.hybridPcb, value: 'WHOLE_PARTIALLY_HYBRID_PCB' },
		{ ...options.backDrillPcb, imgSrc: '', value: 'BACK_DRILL_PCB' },
		{ ...options.leadlessPartialHardGold, value: 'LEADLESS_PARTIALLY_PLATED_HARD_GOLD' }
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
	<div class="collapse-title bg-base-200 rounded-lg font-semibold">{title}</div>
	<div class="collapse-content">
		<div class="mt-4 text-sm">{description}</div>
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
