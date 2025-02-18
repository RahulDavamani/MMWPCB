import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';

const schema = z.object({
	serviceId: z.string().min(1),
	price: z.number()
});

export const submitReport = adminProcedure.input(schema).mutation(
	async ({ input: { serviceId, price } }) =>
		await prisma.service
			.update({
				where: { id: serviceId },
				data: { status: 'WAITING_FOR_PAYMENT', price }
			})
			.catch(pe)
);
