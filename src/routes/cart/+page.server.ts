import { validateAuth } from '$lib/server/auth/validateAuth';
import { createCaller } from '../../trpc/routers/app.router.js';
import { tse } from '../../trpc/te.js';

export const load = async (event) => {
	const { user } = event.locals;
	await validateAuth('user', user);

	const trpc = await createCaller(event);
	const order = await trpc.order.get({ id: null }).catch(tse);
	return { order };
};
