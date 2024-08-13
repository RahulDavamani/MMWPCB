import { redirect, type RequestEvent } from '@sveltejs/kit';
import { lucia } from './lucia';

export const logout = async ({ locals, cookies }: RequestEvent) => {
	if (locals.session) {
		await lucia.invalidateSession(locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});
	}
	redirect(302, '/login');
};
