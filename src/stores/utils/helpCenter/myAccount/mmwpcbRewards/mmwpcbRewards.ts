import type { Lang } from '$lib/locales/en';
import { q1 } from './q1';
import { q2 } from './q2';
import { q3 } from './q3';

export const mmwpcbRewards = (lg: Lang) => {
	const { title } = lg.support.sections.myAccount.subsections.mmwpcbRewards;
	return {
		title,
		questions: [q1(lg), q2(lg), q3(lg)]
	};
};
