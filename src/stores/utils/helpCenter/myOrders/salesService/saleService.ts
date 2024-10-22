import type { Lang } from '$lib/locales/en';
import { q1 } from './q1';
import { q2 } from './q2';
import { q3 } from './q3';

export const salesService = (lg: Lang) => {
	const { title } = lg.support.sections.myOrders.subsections.salesService;
	return {
		title,
		questions: [q1(lg), q2(lg), q3(lg)]
	};
};
