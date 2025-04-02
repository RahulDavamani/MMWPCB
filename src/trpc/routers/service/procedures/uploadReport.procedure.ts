import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';
import { sendServiceMail } from '$lib/server/mail';

const schema = z.object({
	id: z.string().min(1),
	report: z.string().min(1)
});

export const uploadReport = adminProcedure.input(schema).mutation(async ({ input: { id, report } }) => {
	await prisma.service
		.update({
			where: { id },
			data: { status: 'REPORT_RELEASED', report }
		})
		.catch(pe);

	await sendServiceMail(id, 'SERVICE_COMPLETE');
});
