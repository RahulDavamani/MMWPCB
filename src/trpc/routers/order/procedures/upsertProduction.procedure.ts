import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	orderId: z.string().min(1),
	id: z.string().min(1),
	statuses: z.array(
		z.object({
			num: z.number().gt(0),
			status: z.string().min(1),
			completed: z.boolean()
		})
	)
});

export const upsertProduction = adminProcedure.input(schema).mutation(
	async ({ input: { orderId, id, statuses } }) =>
		await prisma.order
			.update({
				where: { id: orderId },
				data: {
					status: 'IN_PRODUCTION',
					standardPcbs: {
						update: {
							where: { id },
							data: { productionStatuses: { deleteMany: {}, createMany: { data: statuses } } }
						}
					},
					advancedPcbs: {
						update: {
							where: { id },
							data: { productionStatuses: { deleteMany: {}, createMany: { data: statuses } } }
						}
					},
					flexiblePcbs: {
						update: {
							where: { id },
							data: { productionStatuses: { deleteMany: {}, createMany: { data: statuses } } }
						}
					},
					assemblies: {
						update: {
							where: { id },
							data: { productionStatuses: { deleteMany: {}, createMany: { data: statuses } } }
						}
					},
					stencils: {
						update: {
							where: { id },
							data: { productionStatuses: { deleteMany: {}, createMany: { data: statuses } } }
						}
					}
				}
			})
			.catch(pe)
);
