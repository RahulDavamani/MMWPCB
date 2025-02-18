import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';

const schema = z.object({
	serviceId: z.string().min(1),
	reportUrl: z.string().min(1)
});

export const submitReport = adminProcedure.input(schema).mutation(
	async ({ input: { serviceId, reportUrl } }) =>
		await prisma.service
			.update({
				where: { id: serviceId },
				data: { status: 'REPORT_RELEASED', reportUrl }
			})
			.catch(pe)
);
