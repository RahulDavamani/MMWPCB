import { validateAuth } from '$lib/server/auth/validateAuth.js';

export const load = (event) => validateAuth('admin', event.locals.user);
