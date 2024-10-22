import { derived } from 'svelte/store';
import { lg } from './i18n.store';
import { myOrders } from './utils/helpCenter/myOrders/myOrders';
import { myAccount } from './utils/helpCenter/myAccount/myAccounts';

export type Section = {
	title: string;
	subsections: { [k: string]: SubSection };
};

export type SubSection = {
	title: string;
	questions: Question[];
};

export type Question = {
	title: string;
	contents: {
		type: 'para' | 'list';
		tabSpace?: number;
		parts: (TextPart | BoldPart | LinkPart | ImagePart)[];
	}[];
};

export type TextPart = {
	type: 'text';
	text: string;
};

export type BoldPart = {
	type: 'bold';
	text: string;
};

export type LinkPart = {
	type: 'link';
	url: string;
	text: string;
};

export type ImagePart = {
	type: 'image';
	src: string;
};

export const support = derived(lg, ($lg) => ({
	sections: {
		myOrders: myOrders($lg),
		myAccount: myAccount($lg)
	}
}));
