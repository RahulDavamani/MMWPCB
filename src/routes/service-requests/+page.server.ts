import { validateAuth } from '$lib/server/auth/validateAuth.js';
import { createCaller } from '../../trpc/routers/app.router.js';
import { tse } from '../../trpc/te.js';

export const load = async (event) => {
	const { user } = event.locals;
	await validateAuth('user', user);

	const trpc = await createCaller(event);
	const services = await trpc.service.getAll({ userId: user?.id }).catch(tse);
	return { services };
};
