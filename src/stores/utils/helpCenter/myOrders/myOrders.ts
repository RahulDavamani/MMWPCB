import type { Lang } from '$lib/locales/en';
import { leadTime } from './leadTime/leadTime';
import { ordering } from './ordering/ordering';
import { salesService } from './salesService/saleService';

export const myOrders = (lg: Lang) => {
	const { title } = lg.support.sections.myOrders;
	return {
		title,
		subsections: {
			ordering: ordering(lg),
			leadTime: leadTime(lg),
			salesService: salesService(lg)
		}
	};
};
