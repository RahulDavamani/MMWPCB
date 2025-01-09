import { z } from 'zod';
import { noAuthProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import bcrypt from 'bcrypt';
import { TRPCError } from '@trpc/server';
import { lucia } from '$lib/server/auth/lucia';

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const login = noAuthProcedure
	.input(schema)
	.mutation(async ({ input: { email, password }, ctx: { cookies } }) => {
		const user = await prisma.user
			.findUniqueOrThrow({
				where: { email },
				select: {
					id: true,
					profilePic: true,
					accounts: { where: { provider: 'credential' }, select: { passwordHash: true } }
				}
			})
			.catch(pe);

		const passwordHash = user.accounts[0].passwordHash;
		if (!passwordHash) throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Password hash not found' });

		const passwordMatch = await bcrypt.compare(password, passwordHash);
		if (!passwordMatch) throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Invalid credentials' });

		const session = await lucia.createSession(user.id, { profilePic: user.profilePic ?? undefined });
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, { path: '.', ...sessionCookie.attributes });
	});
