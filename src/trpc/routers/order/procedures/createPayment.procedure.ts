import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { payment } from '$lib/server/payment';

export const schema = z.object({
	id: z.string().min(1),
	currencyCode: z.enum(['usd', 'eur'])
});

export const createPayment = userProcedure
	.input(schema)
	.mutation(async ({ ctx: { user }, input: { id, currencyCode } }) => {
		const { shippingInfo, ...products } = await prisma.order
			.findUniqueOrThrow({
				where: { id, userId: user.id },
				select: {
					standardPcbs: { select: { id: true, finalPrice: true } },
					advancedPcbs: { select: { id: true, finalPrice: true } },
					flexiblePcbs: { select: { id: true, finalPrice: true } },
					rigidFlexes: { select: { id: true, finalPrice: true } },
					assemblies: { select: { id: true, finalPrice: true } },
					stencils: { select: { id: true, finalPrice: true } },
					cncs: { select: { id: true, finalPrice: true } },
					sheetMetals: { select: { id: true, finalPrice: true } },
					threePrintings: { select: { id: true, finalPrice: true } },
					injectionMoldings: { select: { id: true, finalPrice: true } },
					vacuumCastings: { select: { id: true, finalPrice: true } },
					shippingInfo: { select: { price: true } }
				}
			})
			.catch(pe);

		const { rate } = await prisma.exchangeRate.findFirstOrThrow({ select: { rate: true } }).catch(pe);
		const price =
			Object.values(products).reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + (cur.finalPrice ?? 0), 0), 0) +
			(shippingInfo?.price ?? 0);
		const total = (currencyCode === 'eur' ? price * rate : price).toFixed(2);

		const data = await payment.createOrder(total, currencyCode);
		return data.id as string;
	});
