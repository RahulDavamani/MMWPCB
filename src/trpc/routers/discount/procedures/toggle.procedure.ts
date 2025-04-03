import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const toggle = userProcedure
	.input(z.object({ ids: z.array(z.string().min(1)), type: z.enum(['ENABLE', 'DISABLE']) }))
	.mutation(
		async ({ input: { ids, type } }) =>
			await prisma.discount
				.updateMany({
					where: { id: { in: ids } },
					data: { enable: type === 'ENABLE' ? true : false }
				})
				.catch(pe)
	);
