import { Lucia } from 'lucia';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { ENV } from '$env/static/private';
import { prisma } from '../../../prisma/prisma';

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: ENV !== 'DEV'
		}
	},
	getUserAttributes: (data) => data,
	getSessionAttributes: (data) => data
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: {
			id: string;
			email: string;
			firstName: string;
			lastName: string;
			role: string;
		};
		DatabaseSessionAttributes: {
			profilePic: string | null;
		};
	}
}
