import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';

export const getAll = adminProcedure.query(
	async () =>
		await prisma.user
			.findMany({
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
