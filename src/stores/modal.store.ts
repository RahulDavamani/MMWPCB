import { writable } from 'svelte/store';

export interface Modal {}

export const modal = (() => {
	const { subscribe, set, update } = writable<Modal | undefined>({});

	return {
		subscribe,
		set,
		update
	};
})();
