import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import { standardPcbDetails } from './utils/standardPcbDetails';
import { advancedPcbDetails } from './utils/advancedPcbDetails';
import { flexiblePcbDetails } from './utils/flexiblePcbDetails';
import { assemblyDetails } from './utils/assemblyDetails';
import { stencilDetails } from './utils/stencilDetails';
import { rigidFlexDetails } from './utils/rigidFlexDetails';

export type ProductType = 'standardPcb' | 'advancedPcb' | 'flexiblePcb' | 'rigidFlex' | 'assembly' | 'stencil';

export const productTypes = derived(lg, ($lg) => {
	const l = $lg.products;
	return {
		standardPcb: { key: 'standardPcb', keys: 'standardPcbs', title: l.standardPcb, img: 'standard-pcb' },
		advancedPcb: { key: 'advancedPcb', keys: 'advancedPcbs', title: l.advancedPcb, img: 'advanced-pcb' },
		flexiblePcb: { key: 'flexiblePcb', keys: 'flexiblePcbs', title: l.flexiblePcb, img: 'flexible-pcb' },
		rigidFlex: { key: 'rigidFlex', keys: 'rigidFlexes', title: l.rigidFlex, img: 'rigid-flex' },
		assembly: { key: 'assembly', keys: 'assemblies', title: l.assembly, img: 'assembly' },
		stencil: { key: 'stencil', keys: 'stencils', title: l.stencil, img: 'stencil' }
	} as { [k in ProductType]: { key: k; keys: string; title: string; img: string } };
});

export const productDetails = derived([lg], ([$lg]) => ({
	standardPcb: standardPcbDetails($lg),
	advancedPcb: advancedPcbDetails($lg),
	flexiblePcb: flexiblePcbDetails($lg),
	rigidFlex: rigidFlexDetails($lg),
	assembly: assemblyDetails($lg),
	stencil: stencilDetails($lg)
}));
