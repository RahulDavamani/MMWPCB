import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const cancelReview = userProcedure.input(z.object({ id: z.string().min(1) })).mutation(
	async ({ ctx: { user }, input: { id } }) =>
		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: {
					status: 'SAVED',
					weight: null,
					estDeliveryDate: null,
					standardPcbs: { updateMany: { where: {}, data: { finalPrice: null } } },
					advancedPcbs: { updateMany: { where: {}, data: { finalPrice: null } } },
					flexiblePcbs: { updateMany: { where: {}, data: { finalPrice: null } } },
					rigidFlexes: { updateMany: { where: {}, data: { finalPrice: null } } },
					assemblies: { updateMany: { where: {}, data: { finalPrice: null } } },
					stencils: { updateMany: { where: {}, data: { finalPrice: null } } },
					cncs: { updateMany: { where: {}, data: { finalPrice: null } } },
					sheetMetals: { updateMany: { where: {}, data: { finalPrice: null } } },
					threePrintings: { updateMany: { where: {}, data: { finalPrice: null } } },
					injectionMoldings: { updateMany: { where: {}, data: { finalPrice: null } } },
					vacuumCastings: { updateMany: { where: {}, data: { finalPrice: null } } },
					timeline: { create: { action: 'CANCEL_REVIEW' } }
				}
			})
			.catch(pe)
);
