import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import type { Prisma } from '@prisma/client';

const schema = z.object({
	search: z.string(),
	dates: z.array(z.date()),
	page: z.number()
});

export const getAll = userProcedure.input(schema).query(async ({ input: { search, dates, page } }) => {
	const where: Prisma.DiscountWhereInput = {
		code: { contains: search.toUpperCase() },
		OR: [
			{ OR: [{ startDate: null }, { startDate: { lt: dates[0] } }] },
			{ OR: [{ endDate: null }, { endDate: { gt: dates[1] } }] }
		]
	};

	const total = await prisma.discount.count({ where }).catch(pe);
	const discounts = await prisma.discount
		.findMany({
			where,
			include: { _count: true },
			orderBy: { createdAt: 'desc' },
			skip: (page - 1) * 25,
			take: 25
		})
		.catch(pe);

	return { total, discounts };
});
