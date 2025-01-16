import { z } from 'zod';
import { noAuthProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import bcrypt from 'bcrypt';
import { lucia } from '$lib/server/auth/lucia';
import { customAlphabet } from 'nanoid';

const schema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/)
});

export const register = noAuthProcedure
	.input(schema)
	.mutation(async ({ input: { password, ...user }, ctx: { cookies } }) => {
		const passwordHash = await bcrypt.hash(password, 10);
		const { id } = await prisma.user
			.create({
				data: {
					...user,
					role: 'USER',
					phone: '',
					profilePic: '',
					accounts: { create: { provider: 'credential', passwordHash } },
					orders: { create: { id: customAlphabet('1234567890', 10)(), status: 'CART' } }
				},
				select: { id: true }
			})
			.catch(pe);

		const session = await lucia.createSession(id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, { path: '.', ...sessionCookie.attributes });
	});
