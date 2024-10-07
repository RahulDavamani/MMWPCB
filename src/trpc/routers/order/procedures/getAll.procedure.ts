import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const getAll = userProcedure.query(
	async ({ ctx: { user } }) =>
		await prisma.order
			.findMany({
				where: { status: { not: 'CART' } },
				select: {
					id: true,
					createdAt: true,
					status: true,
					_count: {
						select: {
							standardPcbs: true,
							advancedPcbs: true,
							flexiblePcbs: true,
							assemblies: true,
							stencils: true
						}
					}
				},
				orderBy: { createdAt: 'desc' }
			})
			.catch(pe)
);
