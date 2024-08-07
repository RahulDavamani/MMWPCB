import { redirect } from '@sveltejs/kit';
import { error } from 'console';
import type { User } from 'lucia';

export const validateAuth = async (auth: 'noAuth' | 'user' | 'admin', user?: User, redirectUrl?: string) => {
	switch (auth) {
		case 'noAuth':
			if (user) throw redirect(302, redirectUrl ?? '/');
			break;

		case 'user':
			if (!user) throw redirect(302, redirectUrl ?? '/login');
			break;

		case 'admin':
			if (!user) throw redirect(302, redirectUrl ?? '/login');
			if (user?.role !== 'admin') throw error(403);
			break;

		default:
			break;
	}
};
