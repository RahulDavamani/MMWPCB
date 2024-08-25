import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const productSelect = {
	select: { id: true, name: true, fileName: true, quantity: true, weight: true, buildTime: true, initialPrice: true }
};

export const get = userProcedure.input(z.object({ id: z.string().min(1).nullable() })).query(
	async ({ ctx: { user }, input: { id } }) =>
		await prisma.order
			.findFirstOrThrow({
				where: id ? { id, userId: user.id } : { status: 'CART', userId: user.id },
				include: {
					deliveryAddress: true,
					shippingInfo: true,
					standardPcbs: productSelect,
					advancedPcbs: productSelect,
					flexiblePcbs: productSelect,
					assemblies: productSelect,
					stencils: productSelect,
					timeline: true,
					reviewMessages: true,
					deliveryStatuses: true
				}
			})
			.catch(pe)
);
