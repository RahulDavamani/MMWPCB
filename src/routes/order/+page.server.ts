import { validateAuth } from '$lib/server/auth/validateAuth.js';
import { createCaller } from '../../trpc/routers/app.router.js';
import { tse } from '../../trpc/te.js';

export const load = async (event) => {
	const { user } = event.locals;
	await validateAuth('user', user);

	const id = event.url.searchParams.get('id');

	const trpc = await createCaller(event);
	const order = await trpc.order.get({ id }).catch(tse);
	return { order };
};
