import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';

export const get = adminProcedure.input(z.object({ id: z.string().min(1) })).query(
	async ({ input: { id } }) =>
		await prisma.user
			.findUniqueOrThrow({
				where: { id },
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
					role: true,
					createdAt: true,
					phone: true,
					profilePic: true,
					_count: { select: { orders: true } }
				}
			})
			.catch(pe)
);
