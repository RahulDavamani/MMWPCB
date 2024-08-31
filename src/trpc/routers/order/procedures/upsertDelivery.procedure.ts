import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	id: z.string().min(1),
	statuses: z.array(
		z.object({
			num: z.number().gt(0),
			status: z.string().min(1),
			completed: z.boolean(),
			completedAt: z.date().optional()
		})
	)
});

export const upsertDelivery = userProcedure.input(schema).mutation(
	async ({ ctx: { user }, input: { id, statuses } }) =>
		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: {
					status: 'DELIVERY',
					deliveryStatuses: {
						deleteMany: {},
						createMany: { data: statuses }
					}
				}
			})
			.catch(pe)
);
