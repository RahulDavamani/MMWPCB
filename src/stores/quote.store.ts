import { writable } from 'svelte/store';
import type { StandardPcb } from '../zod/products/standardPcb.schema';
import type { AdvancedPcb } from '../zod/products/advancedPcb.schema';
import type { FlexiblePcb } from '../zod/products/flexiblePcb.schema';
import type { Assembly } from '../zod/products/assembly.schema';
import type { Stencil } from '../zod/products/stencil.schema';
import { defaultProducts } from '$lib/data/products/defaultProducts';
import cloneDeep from 'lodash.clonedeep';

export interface Quote {
	product: 'standardPcb' | 'advancedPcb' | 'flexiblePcb' | 'assembly' | 'stencil';
	standardPcb: StandardPcb;
	advancedPcb: AdvancedPcb;
	flexiblePcb: FlexiblePcb;
	assembly: Assembly;
	stencil: Stencil;
}

export const quote = (() => {
	const { subscribe, set, update } = writable<Quote>({
		product: 'standardPcb',
		...cloneDeep(defaultProducts)
	});

	const reset = () => {
		update((state) => ({
			...state,
			[state.product]: cloneDeep(defaultProducts[state.product])
		}));
	};

	return { subscribe, set, update, reset };
})();
