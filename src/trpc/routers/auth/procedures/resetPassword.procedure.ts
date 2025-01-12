import { z } from 'zod';
import { noAuthProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import bcrypt from 'bcrypt';

const schema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const resetPassword = noAuthProcedure.input(schema).mutation(async ({ input: { email, password } }) => {
	const passwordHash = await bcrypt.hash(password, 10);

	await prisma.account
		.updateMany({
			where: { user: { email }, provider: 'credential' },
			data: { passwordHash }
		})
		.catch(pe);
});
