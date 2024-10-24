import { get } from 'svelte/store';
import { lg } from '../../../stores/i18n.store';

export const generateSpData = (section?: string, subsection?: string, question?: number) => {
	const l = get(lg).support;
	let title = l.title;
	let href = '/support';
	if (section) {
		title = l.sections[section].title;
		href += `/${section.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
	}
	if (subsection) {
		title = l.sections[section].subsections[subsection].title;
		href += `/${subsection.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
	}
	if (question !== undefined) {
		title = l.sections[section].subsections[subsection].questions[question].title;
		href += `/${question}`;
	}

	return { title, href };
};
