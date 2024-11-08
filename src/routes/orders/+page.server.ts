import { validateAuth } from '$lib/server/auth/validateAuth.js';

export const load = async (event) => {
	const { user } = event.locals;
	await validateAuth('user', user);
};
