import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const getSaved = userProcedure.query(
	async ({ ctx: { user } }) =>
		await prisma.order
			.findMany({
				where: { userId: user.id, status: 'SAVED' },
				select: {
					id: true,
					createdAt: true,
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
				}
			})
			.catch(pe)
);
