import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	orderId: z.string().min(1),
	id: z.string().min(1)
});

export const getProduct = userProcedure.input(schema).query(
	async ({ ctx: { user }, input: { orderId, id } }) =>
		await prisma.order
			.findUniqueOrThrow({
				where: { id: orderId, userId: user.id },
				select: {
					standardPcbs: { where: { id } },
					advancedPcbs: { where: { id } },
					flexiblePcbs: { where: { id } },
					assemblies: { where: { id } },
					stencils: { where: { id } }
				}
			})
			.catch(pe)
);
