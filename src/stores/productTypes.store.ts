import { derived } from 'svelte/store';
import { lg } from './i18n.store';

export const productTypes = derived(lg, ($lg) => [
	{ key: 'standardPcb', keys: 'standardPcbs', name: $lg.products.standardPcb, img: 'standard-pcb' },
	{ key: 'advancedPcb', keys: 'advancedPcbs', name: $lg.products.advancedPcb, img: 'advanced-pcb' },
	{ key: 'flexiblePcb', keys: 'flexiblePcbs', name: $lg.products.flexiblePcb, img: 'flexible-pcb' },
	{ key: 'assembly', keys: 'assemblies', name: $lg.products.assembly, img: 'assembly' },
	{ key: 'stencil', keys: 'stencils', name: $lg.products.stencil, img: 'stencil' }
]);
