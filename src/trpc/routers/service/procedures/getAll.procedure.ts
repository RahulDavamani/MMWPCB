import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';
import { TRPCError } from '@trpc/server';

export const getAll = userProcedure
	.input(z.object({ userId: z.string().min(1).optional() }))
	.query(async ({ ctx: { user }, input: { userId } }) => {
		if (user.id !== userId && user.role !== 'ADMIN') throw new TRPCError({ code: 'FORBIDDEN' });

		return await prisma.service.findMany({ where: { userId } }).catch(pe);
	});
