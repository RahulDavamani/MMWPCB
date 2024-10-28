import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import { standardPcbDetails } from './utils/product/standardPcbDetails';
import { advancedPcbDetails } from './utils/product/advancedPcbDetails';
import { flexiblePcbDetails } from './utils/product/flexiblePcbDetails';
import { assemblyDetails } from './utils/product/assemblyDetails';
import { stencilDetails } from './utils/product/stencilDetails';
import { rigidFlexDetails } from './utils/product/rigidFlexDetails';
import { cncDetails } from './utils/product/cncDetails';
import { sheetMetalDetails } from './utils/product/sheetMetalDetails';
import { threePrintingDetails } from './utils/product/threePrintingDetails';
import { injectionMoldingDetails } from './utils/product/injectionMoldingDetails';
import { vacuumCastingDetails } from './utils/product/vacuumCastingDetails';

export type ProductType =
	| 'standardPcb'
	| 'advancedPcb'
	| 'flexiblePcb'
	| 'rigidFlex'
	| 'assembly'
	| 'stencil'
	| 'cnc'
	| 'sheetMetal'
	| 'threePrinting'
	| 'injectionMolding'
	| 'vacuumCasting';

export const productTypes = derived(lg, ($lg) => {
	const l = $lg.products;
	return {
		standardPcb: { key: 'standardPcb', keys: 'standardPcbs', title: l.standardPcb, img: 'standard-pcb' },
		advancedPcb: { key: 'advancedPcb', keys: 'advancedPcbs', title: l.advancedPcb, img: 'advanced-pcb' },
		flexiblePcb: { key: 'flexiblePcb', keys: 'flexiblePcbs', title: l.flexiblePcb, img: 'flexible-pcb' },
		rigidFlex: { key: 'rigidFlex', keys: 'rigidFlexes', title: l.rigidFlex, img: 'rigid-flex' },
		assembly: { key: 'assembly', keys: 'assemblies', title: l.assembly, img: 'assembly' },
		stencil: { key: 'stencil', keys: 'stencils', title: l.stencil, img: 'stencil' },
		cnc: { key: 'cnc', keys: 'cncs', title: l.cnc, img: 'cnc' },
		sheetMetal: { key: 'sheetMetal', keys: 'sheetMetals', title: l.sheetMetal, img: 'sheet-metal' },
		threePrinting: { key: 'threePrinting', keys: 'threePrintings', title: l.threePrinting, img: 'three-printing' },
		injectionMolding: {
			key: 'injectionMolding',
			keys: 'injectionMoldings',
			title: l.injectionMolding,
			img: 'injection-molding'
		},
		vacuumCasting: { key: 'vacuumCasting', keys: 'vacuumCastings', title: l.vacuumCasting, img: 'vacuum-casting' }
	} as { [k in ProductType]: { key: k; keys: string; title: string; img: string } };
});

export const productDetails = derived([lg], ([$lg]) => ({
	standardPcb: standardPcbDetails($lg),
	advancedPcb: advancedPcbDetails($lg),
	flexiblePcb: flexiblePcbDetails($lg),
	rigidFlex: rigidFlexDetails($lg),
	assembly: assemblyDetails($lg),
	stencil: stencilDetails($lg),
	cnc: cncDetails($lg),
	sheetMetal: sheetMetalDetails($lg),
	threePrinting: threePrintingDetails($lg),
	injectionMolding: injectionMoldingDetails($lg),
	vacuumCasting: vacuumCastingDetails($lg)
}));
