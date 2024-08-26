import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	id: z.string().min(1),
	message: z.string().min(1)
});

export const insertReviewMessage = userProcedure.input(schema).mutation(
	async ({ ctx: { user }, input: { id, message } }) =>
		await prisma.order
			.update({
				where: { id, userId: user.role === 'USER' ? user.id : undefined },
				data: { reviewMessages: { create: { message, userId: user.id } } }
			})
			.catch(pe)
);
