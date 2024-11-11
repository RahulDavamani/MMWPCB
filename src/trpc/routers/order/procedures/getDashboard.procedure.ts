import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	fromDate: z.date(),
	toDate: z.date()
});

const productSelect = { select: { quantity: true, finalPrice: true } };

export const getDashboard = adminProcedure.input(schema).query(async ({ input: { fromDate, toDate } }) => {
	const completedOrders = await prisma.order
		.findMany({
			where: { completedAt: { gte: fromDate, lte: toDate }, status: 'COMPLETED' },
			select: {
				createdAt: true,
				completedAt: true,
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
				vacuumCastings: productSelect
			}
		})
		.catch(pe);

	const createdOrders = await prisma.order
		.findMany({
			where: { createdAt: { gte: fromDate, lte: toDate } },
			select: { createdAt: true }
		})
		.catch(pe);

	return { completedOrders, createdOrders };
});
