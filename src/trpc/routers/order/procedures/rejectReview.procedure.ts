import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const rejectReview = adminProcedure.input(z.object({ id: z.string().min(1) })).mutation(
	async ({ input: { id } }) =>
		await prisma.order
			.update({
				where: { id },
				data: { status: 'REJECTED', timeline: { create: { action: 'REJECT' } } }
			})
			.catch(pe)
);
