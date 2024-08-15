import { browser } from '$app/environment';
import { en, type Lang } from '$lib/client/locales/en';
import { es } from '$lib/client/locales/es';
import { fr } from '$lib/client/locales/fr';
import { zh } from '$lib/client/locales/zh';
import { derived, writable } from 'svelte/store';

export const languages: { [k in I18N['lang']]: { id: I18N['lang']; name: string; icon: string; locale: Lang } } = {
	en: {
		id: 'en',
		name: 'English',
		icon: 'openmoji:flag-united-states',
		locale: en
	},
	zh: {
		id: 'zh',
		name: '中文',
		icon: 'openmoji:flag-china',
		locale: zh
	},
	fr: {
		id: 'fr',
		name: 'Français',
		icon: 'openmoji:flag-france',
		locale: fr
	},
	es: {
		id: 'es',
		name: 'Español',
		icon: 'openmoji:flag-spain',
		locale: es
	}
};

export const currencies: { [k in I18N['currency']]: { id: I18N['currency']; name: string; icon: string } } = {
	usd: {
		id: 'usd',
		name: 'US Dollars',
		icon: 'mdi:dollar'
	},
	eur: {
		id: 'eur',
		name: 'Euros',
		icon: 'mdi:euro'
	}
};

export interface I18N {
	lang: 'en' | 'zh' | 'fr' | 'es';
	currency: 'usd' | 'eur';
}

export const i18n = (() => {
	const { subscribe, set, update } = writable<I18N>({
		lang: 'en',
		currency: 'usd'
	});
	if (browser) {
		const lang = (localStorage.getItem('lang') as I18N['lang']) || 'en';
		const currency = (localStorage.getItem('currency') as I18N['currency']) || 'usd';
		localStorage.setItem('lang', lang);
		localStorage.setItem('currency', currency);
		set({ lang, currency });
	}

	// Methods
	const setLang = (lang: 'en' | 'zh' | 'fr' | 'es') => {
		update((state) => ({ ...state, lang }));
		localStorage.setItem('lang', lang);
	};
	const setCurrency = (currency: 'usd' | 'eur') => {
		update((state) => ({ ...state, currency }));
		localStorage.setItem('currency', currency);
	};

	return {
		subscribe,
		set,
		update,
		setLang,
		setCurrency
	};
})();

export const lg = derived(i18n, ($i18n) => languages[$i18n.lang].locale);
