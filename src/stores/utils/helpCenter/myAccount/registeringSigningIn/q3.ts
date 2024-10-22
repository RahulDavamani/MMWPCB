import type { Lang } from '$lib/locales/en';
import type { Question } from '../../../../support.store';

export const q3 = (lg: Lang): Question => {
	const { title, contents } = lg.support.sections.myAccount.subsections.registeringSigningIn.questions[2];
	return {
		title: title,
		contents: [
			{
				type: 'para',
				parts: [
					{ type: 'text', text: contents[0][0] },
					{ type: 'link', url: '', text: contents[0][0] },
					{ type: 'text', text: contents[0][0] }
				]
			}
		]
	};
};
