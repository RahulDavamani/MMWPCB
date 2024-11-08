import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const updateDelivery = adminProcedure
	.input(z.object({ id: z.string().min(1), completed: z.boolean() }))
	.mutation(async ({ input: { id, completed } }) => {
		await prisma.orderDeliveryStatus
			.update({
				where: { id },
				data: { completedAt: completed ? new Date() : null }
			})
			.catch(pe);
	});
