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
		standardPcb: {
			key: 'standardPcb',
			keys: 'standardPcbs',
			l: l.standardPcb,
			img: 'standard-pcb',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		advancedPcb: {
			key: 'advancedPcb',
			keys: 'advancedPcbs',
			l: l.advancedPcb,
			img: 'advanced-pcb',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		flexiblePcb: {
			key: 'flexiblePcb',
			keys: 'flexiblePcbs',
			l: l.flexiblePcb,
			img: 'flexible-pcb',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		rigidFlex: {
			key: 'rigidFlex',
			keys: 'rigidFlexes',
			l: l.rigidFlex,
			img: 'rigid-flex',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		assembly: {
			key: 'assembly',
			keys: 'assemblies',
			l: l.assembly,
			img: 'assembly',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		stencil: {
			key: 'stencil',
			keys: 'stencils',
			l: l.stencil,
			img: 'stencil',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		cnc: {
			key: 'cnc',
			keys: 'cncs',
			l: l.cnc,
			img: 'cnc',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		sheetMetal: {
			key: 'sheetMetal',
			keys: 'sheetMetals',
			l: l.sheetMetal,
			img: 'sheet-metal',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		threePrinting: {
			key: 'threePrinting',
			keys: 'threePrintings',
			l: l.threePrinting,
			img: 'three-printing',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		injectionMolding: {
			key: 'injectionMolding',
			keys: 'injectionMoldings',
			l: l.injectionMolding,
			img: 'injection-molding',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		},
		vacuumCasting: {
			key: 'vacuumCasting',
			keys: 'vacuumCastings',
			l: l.vacuumCasting,
			img: 'vacuum-casting',
			from: { price: 15, quantity: 5 },
			buildTime: 24
		}
	} as {
		[k in ProductType]: {
			key: k;
			keys: string;
			l: { title: string; description: { [k: number]: string } };
			img: string;
			from: { price: number; quantity: number };
			buildTime: number;
		};
	};
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
