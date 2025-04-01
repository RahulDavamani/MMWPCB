import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { payment } from '$lib/server/payment';
import { TRPCError } from '@trpc/server';

export const schema = z.object({
	id: z.string().min(1),
	currencyCode: z.enum(['usd', 'eur', 'gbp'])
});

export const createPayment = userProcedure
	.input(schema)
	.mutation(async ({ ctx: { user }, input: { id, currencyCode } }) => {
		const { price } = await prisma.service
			.findUniqueOrThrow({
				where: { id, userId: user.id },
				select: { price: true }
			})
			.catch(pe);
		if (!price) throw new TRPCError({ code: 'CONFLICT', message: 'Price not found' });

		const { eur, gbp } = await prisma.exchangeRate
			.findFirstOrThrow({ select: { eur: true, gbp: true }, orderBy: { createdAt: 'desc' } })
			.catch(pe);
		const total = (currencyCode === 'eur' ? price * eur : currencyCode === 'gbp' ? price * gbp : price).toFixed(2);

		const data = await payment.createOrder(total, currencyCode);
		return data.id as string;
	});
