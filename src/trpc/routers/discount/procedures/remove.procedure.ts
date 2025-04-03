import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const remove = userProcedure
	.input(z.object({ ids: z.array(z.string().min(1)) }))
	.mutation(
		async ({ input: { ids } }) =>
			await prisma.discount.deleteMany({ where: { id: { in: ids }, orders: { none: {} } } }).catch(pe)
	);
