import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';

const schema = z.object({
	serviceId: z.string().min(1),
	status: z.enum(['IN_REVIEW', 'TESTING_IN_PROGRESS', 'REJECTED'])
});

export const updateStatus = adminProcedure.input(schema).mutation(
	async ({ input: { serviceId, status } }) =>
		await prisma.service
			.update({
				where: { id: serviceId },
				data: { status }
			})
			.catch(pe)
);
