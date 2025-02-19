import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';
import { TRPCError } from '@trpc/server';

const schema = z.object({
	userId: z.string().min(1).optional(),
	filters: z.object({
		search: z.string(),
		status: z
			.enum([
				'APPLICATION_RECEIVED',
				'IN_REVIEW',
				'WAITING_FOR_PAYMENT',
				'WAITING_FOR_SAMPLES',
				'TESTING_IN_PROGRESS',
				'REPORT_RELEASED',
				'REJECTED'
			])
			.nullish(),
		page: z.number()
	})
});

export const getAll = userProcedure.input(schema).query(
	async ({
		ctx: { user },
		input: {
			userId,
			filters: { status, page }
		}
	}) => {
		if (user.id !== userId && user.role !== 'ADMIN') throw new TRPCError({ code: 'FORBIDDEN' });

		const total = await prisma.service.count({ where: { userId, status: status ?? {} } }).catch(pe);
		const serviceRequests = await prisma.service
			.findMany({
				where: { userId, status: status ?? {} },
				include: { user: { select: { id: true, firstName: true, lastName: true } } },
				orderBy: { createdAt: 'desc' },
				skip: (page - 1) * 10,
				take: 10
			})
			.catch(pe);

		return { total, serviceRequests };
	}
);
