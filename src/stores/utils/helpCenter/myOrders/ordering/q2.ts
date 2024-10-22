import type { Lang } from '$lib/locales/en';
import type { Question } from '../../../../support.store';

export const q2 = (lg: Lang): Question => {
	const { title, contents } = lg.support.sections.myOrders.subsections.ordering.questions[1];
	return {
		title,
		contents: [
			{
				type: 'para',
				parts: [
					{ type: 'text', text: contents[0][0] },
					{ type: 'link', url: '', text: contents[0][1] }
				]
			},
			{
				type: 'para',
				parts: [{ type: 'text', text: contents[1][0] }]
			},
			{
				type: 'para',
				parts: [{ type: 'text', text: contents[2][0] }]
			},
			{
				type: 'para',
				parts: [
					{ type: 'text', text: contents[3][0] },
					{ type: 'link', url: '', text: contents[3][1] },
					{ type: 'text', text: contents[3][2] }
				]
			}
		]
	};
};
