import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const remove = userProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(
		async ({ ctx: { user }, input: { id } }) =>
			await prisma.order.delete({ where: { id, userId: user.id }, select: { id: true } }).catch(pe)
	);
