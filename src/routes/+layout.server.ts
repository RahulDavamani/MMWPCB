import { createCaller } from '../trpc/routers/app.router.js';
import { tse } from '../trpc/te.js';

export const load = async (event) => {
	// Cart & Exchange rate
	const trpc = await createCaller(event);
	const cart = event.locals.session ? await trpc.order.getCart().catch(tse) : undefined;
	const exchangeRate = await trpc.exchangeRate.get().catch(tse);
	// await prisma.service.update({ where: { id: '5459432109' }, data: { status: 'APPLICATION_RECEIVED' } });

	return { ...event.locals, cart, exchangeRate };
};
