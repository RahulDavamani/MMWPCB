import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const submitReview = userProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(async ({ ctx: { user }, input: { id } }) => {
		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: {
					createdAt: new Date(),
					status: 'IN_REVIEW',
					timeline: { create: { action: 'SUBMIT_FOR_REVIEW' } }
				}
			})
			.catch(pe);

		await prisma.order.create({
			data: {
				status: 'CART',
				userId: user.id
			}
		});
	});
