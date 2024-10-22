import type { Lang } from '$lib/locales/en';
import type { Question } from '../../../../support.store';

export const q2 = (lg: Lang): Question => {
	const { title, contents } = lg.support.sections.myAccount.subsections.mmwpcbRewards.questions[1];
	return {
		title: title,
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
				type: 'list',
				parts: [
					{ type: 'text', text: contents[2][0] },
					{ type: 'text', text: contents[2][1] },
					{ type: 'text', text: contents[2][2] },
					{ type: 'text', text: contents[2][3] }
				]
			}
		]
	};
};
