import type { Lang } from '$lib/locales/en';
import type { Question } from '../../../../support.store';

export const q3 = (lg: Lang): Question => {
	const { title, contents } = lg.support.sections.myOrders.subsections.leadTime.questions[2];
	return {
		title,
		contents: [
			{
				type: 'para',
				parts: [{ type: 'text', text: contents[0][0] }]
			},
			{
				type: 'para',
				parts: [{ type: 'text', text: contents[1][0] }]
			},
			{
				type: 'para',
				parts: [{ type: 'text', text: contents[2][0] }]
			}
		]
	};
};
