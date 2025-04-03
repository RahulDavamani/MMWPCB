import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { TRPCError } from '@trpc/server';

export const applyDiscount = userProcedure
	.input(z.object({ id: z.string().min(1), code: z.string().min(1) }))
	.mutation(async ({ ctx: { user }, input: { id, code } }) => {
		const discount = await prisma.discount.findUnique({ where: { code }, include: { _count: true } }).catch(pe);
		if (!discount) throw new TRPCError({ code: 'NOT_FOUND', message: 'Invalid Promo Code' });

		const { enable, startDate, endDate, usageLimit, _count } = discount;

		if (!enable) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Promo Code Disabled' });
		if (startDate && startDate > new Date())
			throw new TRPCError({ code: 'BAD_REQUEST', message: 'Promo Code not yet available' });
		if (endDate && endDate < new Date()) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Promo Code Expired' });
		if (usageLimit === _count.orders)
			throw new TRPCError({ code: 'BAD_REQUEST', message: 'Promo Code Usage Limit Reached' });

		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: { discount: { connect: { id: discount.id } } }
			})
			.catch(pe);
	});
