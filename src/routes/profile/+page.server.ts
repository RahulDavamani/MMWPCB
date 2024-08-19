import { validateAuth } from '$lib/server/auth/validateAuth.js';
import { createCaller } from '../../trpc/routers/app.router.js';

export const load = async (event) => {
	const { user } = event.locals;
	await validateAuth('user', user);

	const trpc = await createCaller(event);
	const profile = await trpc.profile.get();
	return { profile };
};
