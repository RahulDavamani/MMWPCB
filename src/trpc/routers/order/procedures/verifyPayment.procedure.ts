import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { sendOrderMail } from '$lib/server/mail';

export const verifyPayment = adminProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(async ({ input: { id } }) => {
		await prisma.order
			.update({
				where: { id },
				data: { status: 'CONFIRMED', timeline: { create: { action: 'CONFIRM' } } }
			})
			.catch(pe);

		await sendOrderMail(id, 'ORDER_CONFIRM_PAYMENT');
	});
