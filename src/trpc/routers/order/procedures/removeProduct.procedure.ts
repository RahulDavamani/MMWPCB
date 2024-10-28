import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const removeProduct = userProcedure
	.input(z.object({ orderId: z.string().min(1), ids: z.array(z.string().min(1)).optional() }))
	.mutation(async ({ ctx: { user }, input: { orderId, ids } }) => {
		await prisma.order
			.update({
				where: { id: orderId, userId: user.id },
				data: {
					standardPcbs: { deleteMany: ids ? { id: { in: ids } } : {} },
					advancedPcbs: { deleteMany: ids ? { id: { in: ids } } : {} },
					flexiblePcbs: { deleteMany: ids ? { id: { in: ids } } : {} },
					rigidFlexes: { deleteMany: ids ? { id: { in: ids } } : {} },
					assemblies: { deleteMany: ids ? { id: { in: ids } } : {} },
					stencils: { deleteMany: ids ? { id: { in: ids } } : {} },
					cncs: { deleteMany: ids ? { id: { in: ids } } : {} },
					sheetMetals: { deleteMany: ids ? { id: { in: ids } } : {} },
					threePrintings: { deleteMany: ids ? { id: { in: ids } } : {} },
					injectionMoldings: { deleteMany: ids ? { id: { in: ids } } : {} },
					vacuumCastings: { deleteMany: ids ? { id: { in: ids } } : {} }
				},
				select: { id: true }
			})
			.catch(pe);
	});
