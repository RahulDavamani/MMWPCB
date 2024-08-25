import { validateAuth } from '$lib/server/auth/validateAuth.js';
import { createCaller } from '../../trpc/routers/app.router.js';
import { tse } from '../../trpc/te.js';

export const load = async (event) => {
	const orderId = event.url.searchParams.get('orderId');
	const id = event.url.searchParams.get('id');
	if (orderId && id) {
		const { user } = event.locals;
		await validateAuth('user', user);
		const trpc = await createCaller(event);
		const products = await trpc.order.getProduct({ orderId, id }).catch(tse);
		return { products };
	}
};
