import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	orderId: z.string().min(1),
	productId: z.string().min(1),
	productType: z.enum(['standardPcbs', 'advancedPcbs', 'flexiblePcbs', 'rigidFlexes', 'assemblies', 'stencils']),
	statuses: z.array(
		z.object({
			num: z.number().gt(0),
			status: z.string().min(1),
			completed: z.boolean(),
			completedAt: z.date().optional()
		})
	)
});

export const upsertFabrication = userProcedure.input(schema).mutation(
	async ({ input: { orderId, productId, productType, statuses } }) =>
		await prisma.order
			.update({
				where: { id: orderId },
				data: {
					status: 'FABRICATION',
					[productType]: {
						update: {
							where: { id: productId },
							data: { fabricationStatuses: { deleteMany: {}, createMany: { data: statuses } } }
						}
					}
				}
			})
			.catch(pe)
);
