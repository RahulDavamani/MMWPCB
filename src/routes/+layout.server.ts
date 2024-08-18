import { createCaller } from '../trpc/routers/app.router.js';
import { tse } from '../trpc/te.js';

export const load = async (event) => {
	const trpc = await createCaller(event);
	const cart = event.locals.session ? await trpc.order.getCart().catch(tse) : undefined;
	return { ...event.locals, cart };
};
