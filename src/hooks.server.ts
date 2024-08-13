import { type Handle } from '@sveltejs/kit';
import { createContext } from './trpc/server';
import { createTRPCHandle } from 'trpc-sveltekit';
import { appRouter } from './trpc/routers/app.router';
import { lucia } from '$lib/server/auth/lucia';

export const handle: Handle = async ({ event, resolve }) => {
	const trpcResolve = () => createTRPCHandle({ router: appRouter, createContext })({ event, resolve });
	const sessionId = event.cookies.get(lucia.sessionCookieName);
	if (sessionId) {
		const { session, user } = await lucia.validateSession(sessionId);
		if (session && session.fresh) {
			const sessionCookie = lucia.createSessionCookie(session.id);
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		}
		if (!session) {
			const sessionCookie = lucia.createBlankSessionCookie();
			event.cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		}
		event.locals.user = user ?? undefined;
		event.locals.session = session ?? undefined;
	} else {
		event.locals.user = undefined;
		event.locals.session = undefined;
	}

	return trpcResolve();
};
