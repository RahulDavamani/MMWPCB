import { validateAuth } from '$lib/server/auth/validateAuth.js';
import { createCaller } from '../../../trpc/routers/app.router.js';
import { tse } from '../../../trpc/te.js';

export const load = async (event) => {
	const orderId = event.url.searchParams.get('orderId') as string;
	const id = event.url.searchParams.get('id') as string;
	const { user } = event.locals;
	await validateAuth('user', user);
	const trpc = await createCaller(event);
	const data = await trpc.order.getProduct({ orderId, id }).catch(tse);
	return data;
};
