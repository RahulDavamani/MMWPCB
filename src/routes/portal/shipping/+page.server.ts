import { createCaller } from '../../../trpc/routers/app.router.js';
import { tse } from '../../../trpc/te.js';

export const load = async (event) => {
	const trpc = await createCaller(event);
	const countries = await trpc.shipping.getCountries().catch(tse);
	return { countries };
};
