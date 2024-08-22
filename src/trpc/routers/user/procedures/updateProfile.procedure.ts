import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	firstName: z.string().min(1).optional(),
	lastName: z.string().min(1).optional(),
	phone: z.string().optional(),
	profilePic: z.string().nullish()
});

export const updateProfile = userProcedure.input(schema).mutation(
	async ({ input, ctx: { user } }) =>
		await prisma.user
			.update({
				where: { id: user.id },
				data: input,
				select: { id: true }
			})
			.catch(pe)
);
