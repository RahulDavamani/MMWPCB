import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const complete = userProcedure.input(z.object({ id: z.string().min(1) })).mutation(
	async ({ ctx: { user }, input: { id } }) =>
		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: { status: 'COMPLETED' }
			})
			.catch(pe)
);
