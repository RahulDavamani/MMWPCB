import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const remove = userProcedure
	.input(z.object({ serviceId: z.string().min(1) }))
	.mutation(
		async ({ ctx: { user }, input: { serviceId } }) =>
			await prisma.service
				.delete({ where: { id: serviceId, userId: user.id, status: 'APPLICATION_RECEIVED' } })
				.catch(pe)
	);
