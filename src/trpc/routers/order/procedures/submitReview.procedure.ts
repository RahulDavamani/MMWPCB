import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const submitReview = userProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(async ({ ctx: { user }, input: { id } }) => {
		const { status } = await prisma.order
			.findUniqueOrThrow({
				where: { id },
				select: { status: true }
			})
			.catch(pe);

		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: {
					createdAt: status === 'CART' ? new Date() : undefined,
					status: 'IN_REVIEW',
					timeline: { create: { action: 'SUBMIT_REVIEW' } }
				}
			})
			.catch(pe);

		if (status === 'CART')
			await prisma.order.create({
				data: {
					status: 'CART',
					userId: user.id
				}
			});
	});
