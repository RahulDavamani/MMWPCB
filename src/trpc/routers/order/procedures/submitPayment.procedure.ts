import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { payment } from '$lib/server/payment';
import { TRPCError } from '@trpc/server';

export const schema = z.object({
	id: z.string().min(1),
	paymentId: z.string().min(1)
});

export const submitPayment = userProcedure
	.input(schema)
	.mutation(async ({ ctx: { user }, input: { id, paymentId } }) => {
		try {
			await prisma.order.findUniqueOrThrow({ where: { id, userId: user.id }, select: { id: true } }).catch(pe);

			const data = await payment.captureOrder(paymentId);
			if (data.status !== 'COMPLETED' || data.purchase_units[0].payments.captures[0].status !== 'COMPLETED')
				throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Transaction Failed' });

			const paymentInfo = {
				paymentId: data.id,
				status: data.status,
				captureId: data.purchase_units[0].payments.captures[0].id,
				captureStatus: data.purchase_units[0].payments.captures[0].status,
				captureTime: data.purchase_units[0].payments.captures[0].create_time,
				amount: data.purchase_units[0].payments.captures[0].amount.value,
				currency: data.purchase_units[0].payments.captures[0].amount.currency_code,
				payerId: data.payer.payer_id,
				payerEmail: data.payer.email_address,
				payerName: data.payer.name.given_name + ' ' + data.payer.name.surname
			};

			await prisma.order
				.update({
					where: { id },
					data: {
						status: 'CONFIRMED',
						timeline: { create: { action: 'CONFIRM' } },
						paymentInfo: { create: paymentInfo }
					}
				})
				.catch(pe);

			return paymentInfo;
		} catch (_) {
			throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Transaction Failed' });
		}
	});
