import { browser } from '$app/environment';
import type { Lang } from '$lib/locales/en';
import { writable } from 'svelte/store';
import { trpc } from '../trpc/client';
import { tce } from '../trpc/te';

export interface I18N {
	language: 'en' | 'zh' | 'fr' | 'es';
	currency: 'usd' | 'eur';
}

export const languages: { [k in I18N['language']]: { key: I18N['language']; name: string; icon: string } } = {
	en: {
		key: 'en',
		name: 'English',
		icon: 'openmoji:flag-united-states'
	},
	zh: {
		key: 'zh',
		name: '中文',
		icon: 'openmoji:flag-china'
	},
	fr: {
		key: 'fr',
		name: 'Français',
		icon: 'openmoji:flag-france'
	},
	es: {
		key: 'es',
		name: 'Español',
		icon: 'openmoji:flag-spain'
	}
};

export const currencies: { [k in I18N['currency']]: { key: I18N['currency']; name: string; icon: string } } = {
	usd: {
		key: 'usd',
		name: 'US Dollars',
		icon: 'mdi:dollar'
	},
	eur: {
		key: 'eur',
		name: 'Euros',
		icon: 'mdi:euro'
	}
};

export const i18n = (() => {
	const { subscribe, set, update } = writable<I18N>({
		language: 'en',
		currency: 'usd'
	});

	const fetchLanguage = async (language: I18N['language']) => {
		const l = await trpc().lang.get.query({ language }).catch(tce);
		lg.set(l);
	};

	if (browser) {
		const language = (localStorage.getItem('language') as I18N['language']) || 'en';
		const currency = (localStorage.getItem('currency') as I18N['currency']) || 'usd';
		localStorage.setItem('language', language);
		localStorage.setItem('currency', currency);
		set({ language, currency });
		fetchLanguage(language);
	}

	// Methods
	const setLanguage = async (language: 'en' | 'zh' | 'fr' | 'es') => {
		update((state) => ({ ...state, language }));
		localStorage.setItem('language', language);
		await fetchLanguage(language);
	};
	const setCurrency = (currency: 'usd' | 'eur') => {
		update((state) => ({ ...state, currency }));
		localStorage.setItem('currency', currency);
	};

	return {
		subscribe,
		set,
		update,
		setLanguage,
		setCurrency
	};
})();

export const lg = writable<Lang>();
