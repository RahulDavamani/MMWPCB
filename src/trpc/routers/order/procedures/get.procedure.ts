import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const productSelect = {
	select: {
		id: true,
		name: true,
		fileName: true,
		quantity: true,
		weight: true,
		initialPrice: true,
		finalPrice: true,
		fabricationStatuses: {
			select: { id: true, status: true, completedAt: true },
			orderBy: { num: 'asc' as 'asc' | 'desc' }
		}
	}
};

export const get = userProcedure.input(z.object({ id: z.string().min(1).nullable() })).query(
	async ({ ctx: { user }, input: { id } }) =>
		await prisma.order
			.findFirstOrThrow({
				where: id ? { id, userId: user.role === 'USER' ? user.id : undefined } : { status: 'CART', userId: user.id },
				select: {
					id: true,
					createdAt: true,
					completedAt: true,
					status: true,
					standardPcbs: productSelect,
					advancedPcbs: productSelect,
					flexiblePcbs: productSelect,
					rigidFlexes: productSelect,
					assemblies: productSelect,
					stencils: productSelect,
					cncs: productSelect,
					sheetMetals: productSelect,
					threePrintings: productSelect,
					injectionMoldings: productSelect,
					vacuumCastings: productSelect,
					deliveryAddress: {
						select: {
							id: true,
							addressId: true,
							name: true,
							phone: true,
							addressLine1: true,
							addressLine2: true,
							city: true,
							state: true,
							country: true,
							postalCode: true
						}
					},
					shippingInfo: {
						select: {
							id: true,
							countryId: true,
							methodId: true,
							countryName: true,
							methodName: true,
							price: true,
							deliveryTime: true,
							restriction: true
						}
					},
					paymentInfo: {
						select: {
							id: true,
							captureId: true,
							captureTime: true,
							amount: true,
							currency: true
						}
					},
					reviewMessages: {
						select: {
							id: true,
							createdAt: true,
							message: true,
							user: { select: { id: true, role: true } }
						},
						orderBy: { createdAt: 'asc' }
					},
					deliveryStatuses: {
						select: {
							id: true,
							status: true,
							completedAt: true
						},
						orderBy: { num: 'asc' }
					},
					timeline: {
						select: {
							id: true,
							action: true,
							message: true
						}
					}
				}
			})
			.catch(pe)
);
