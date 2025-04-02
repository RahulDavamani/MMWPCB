import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';
import { sendServiceMail } from '$lib/server/mail';

const schema = z.object({
	id: z.string().min(1),
	price: z.number()
});

export const approve = adminProcedure.input(schema).mutation(async ({ input: { id, price } }) => {
	await prisma.service
		.update({
			where: { id },
			data: { status: 'WAITING_FOR_PAYMENT', price }
		})
		.catch(pe);

	await sendServiceMail(id, 'SERVICE_CONFIRM_PAYMENT');
});
