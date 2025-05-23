import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';
import { sendServiceMail } from '$lib/server/mail';

const schema = z.object({
	id: z.string().min(1),
	price: z.number(),
	estDeliveryDate: z.date()
});

export const approve = adminProcedure.input(schema).mutation(async ({ input: { id, price, estDeliveryDate } }) => {
	await prisma.service
		.update({
			where: { id },
			data: { status: 'WAITING_FOR_PAYMENT', price, estDeliveryDate }
		})
		.catch(pe);

	await sendServiceMail(id, 'SERVICE_APPROVE_REVIEW');
});
