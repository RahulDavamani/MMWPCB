import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { createCallerFactory } from '@trpc/server';
import { payment } from '../../payment/payment.router';

export const schema = z.object({
	orderId: z.string().min(1),
	nonce: z.string().min(1)
});

export const submitPayment = userProcedure.input(schema).mutation(async ({ ctx, input: { orderId, nonce } }) => {
	const order = await prisma.order
		.findUniqueOrThrow({
			where: { id: orderId, userId: ctx.user.id },
			select: {
				standardPcbs: { select: { id: true, finalPrice: true } },
				advancedPcbs: { select: { id: true, finalPrice: true } },
				flexiblePcbs: { select: { id: true, finalPrice: true } },
				rigidFlexes: { select: { id: true, finalPrice: true } },
				assemblies: { select: { id: true, finalPrice: true } },
				stencils: { select: { id: true, finalPrice: true } },
				cncs: { select: { id: true, finalPrice: true } },
				sheetMetals: { select: { id: true, finalPrice: true } },
				threePrintings: { select: { id: true, finalPrice: true } },
				injectionMoldings: { select: { id: true, finalPrice: true } },
				vacuumCastings: { select: { id: true, finalPrice: true } }
			}
		})
		.catch(pe);

	const total = Object.values(order)
		.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + (cur.finalPrice ?? 0), 0), 0)
		.toFixed(2);

	const { createTransaction } = createCallerFactory()(payment)(ctx);
	const { paymentInfo } = await createTransaction({ nonce, total });

	await prisma.order.update({
		where: { id: orderId },
		data: {
			status: 'CONFIRMED',
			timeline: { create: { action: 'CONFIRM' } },
			paymentInfo: { create: paymentInfo }
		}
	});

	return paymentInfo;
});
