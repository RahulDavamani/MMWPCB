import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const completeFabrication = adminProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(async ({ input: { id } }) => {
		await prisma.productFabricationStatus
			.updateMany({
				where: {
					OR: [
						{ standardPcb: { order: { id } } },
						{ advancedPcb: { order: { id } } },
						{ flexiblePcb: { order: { id } } },
						{ rigidFlex: { order: { id } } },
						{ assembly: { order: { id } } },
						{ stencil: { order: { id } } },
						{ cnc: { order: { id } } },
						{ sheetMetal: { order: { id } } },
						{ threePrinting: { order: { id } } },
						{ injectionMolding: { order: { id } } },
						{ vacuumCasting: { order: { id } } }
					],
					completedAt: null
				},
				data: { completedAt: new Date() }
			})
			.catch(pe);

		const deliveryStatuses = [
			'Ready to ship',
			'Shipment Picked Up',
			'Shipment In Transit',
			'Shipment Received',
			'Out for Delivery',
			'Delivered'
		];
		await prisma.order
			.update({
				where: { id },
				data: {
					status: 'DELIVERY',
					deliveryStatuses: { createMany: { data: deliveryStatuses.map((status, num) => ({ num, status })) } }
				}
			})
			.catch(pe);
	});
