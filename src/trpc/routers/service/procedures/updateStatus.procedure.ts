import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';
import { sendServiceMail } from '$lib/server/mail';

const schema = z.object({
	id: z.string().min(1),
	status: z.enum(['IN_REVIEW', 'TESTING_IN_PROGRESS', 'REJECTED'])
});

export const updateStatus = adminProcedure.input(schema).mutation(async ({ input: { id, status } }) => {
	await prisma.service.update({ where: { id }, data: { status } }).catch(pe);
	if (status === 'IN_REVIEW') await sendServiceMail(id, 'SERVICE_SUBMIT_REVIEW');
	if (status === 'REJECTED') await sendServiceMail(id, 'SERVICE_REJECT_REVIEW');
});
