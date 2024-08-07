import { validateAuth } from '$lib/server/validateAuth.js';

export const load = async ({ locals: { user } }) => {
	await validateAuth('noAuth', user);
	return {};
};
