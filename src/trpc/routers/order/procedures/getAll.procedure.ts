import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const getAll = userProcedure.query(
	async ({ ctx: { user } }) =>
		await prisma.order
			.findMany({
				where: { status: { not: 'CART' }, userId: user.id },
				select: {
					id: true,
					createdAt: true,
					status: true,
					_count: {
						select: {
							standardPcbs: true,
							advancedPcbs: true,
							flexiblePcbs: true,
							rigidFlexes: true,
							assemblies: true,
							stencils: true,
							cncs: true,
							sheetMetals: true,
							threePrintings: true,
							injectionMoldings: true,
							vacuumCastings: true
						}
					}
				},
				orderBy: { createdAt: 'desc' }
			})
			.catch(pe)
);
