import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const productSelect = {
	select: {
		id: true,
		name: true,
		fileName: true,
		quantity: true,
		weight: true,
		buildTime: true,
		initialPrice: true,
		finalPrice: true,
		fabricationStatuses: {
			select: { status: true, completed: true, completedAt: true },
			orderBy: { num: 'asc' as 'asc' | 'desc' }
		}
	}
};

export const get = userProcedure.input(z.object({ id: z.string().min(1).nullable() })).query(
	async ({ ctx: { user }, input: { id } }) =>
		await prisma.order
			.findFirstOrThrow({
				where: id ? { id, userId: user.id } : { status: 'CART', userId: user.id },
				include: {
					standardPcbs: productSelect,
					advancedPcbs: productSelect,
					flexiblePcbs: productSelect,
					assemblies: productSelect,
					stencils: productSelect,
					timeline: true,
					deliveryAddress: true,
					shippingInfo: true,
					reviewMessages: {
						include: { user: { select: { role: true } } },
						orderBy: { createdAt: 'asc' }
					},
					paymentInfo: true,
					deliveryStatuses: true
				}
			})
			.catch(pe)
);
