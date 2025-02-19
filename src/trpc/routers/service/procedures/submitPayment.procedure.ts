import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { createCallerFactory, TRPCError } from '@trpc/server';
import { payment } from '../../payment/payment.router';

export const schema = z.object({
	id: z.string().min(1),
	nonce: z.string().min(1)
});

export const submitPayment = userProcedure.input(schema).mutation(async ({ ctx, input: { id, nonce } }) => {
	const { price } = await prisma.service
		.findUniqueOrThrow({
			where: { id, userId: ctx.user.id },
			select: { price: true }
		})
		.catch(pe);

	if (!price) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Price not found' });

	const { createTransaction } = createCallerFactory()(payment)(ctx);
	const { paymentInfo } = await createTransaction({ nonce, total: price.toFixed(2) });

	await prisma.service.update({
		where: { id },
		data: {
			status: 'WAITING_FOR_SAMPLES',
			paymentInfo: { create: paymentInfo }
		}
	});

	return paymentInfo;
});
