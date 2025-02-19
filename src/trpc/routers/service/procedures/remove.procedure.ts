import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const remove = userProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(
		async ({ ctx: { user }, input: { id } }) =>
			await prisma.service.delete({ where: { id, userId: user.id, status: 'APPLICATION_RECEIVED' } }).catch(pe)
	);
