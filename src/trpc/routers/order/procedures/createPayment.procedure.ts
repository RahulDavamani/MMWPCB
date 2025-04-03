import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { payment } from '$lib/server/payment';

export const schema = z.object({
	id: z.string().min(1),
	currencyCode: z.enum(['usd', 'eur', 'gbp'])
});

export const createPayment = userProcedure
	.input(schema)
	.mutation(async ({ ctx: { user }, input: { id, currencyCode } }) => {
		const { shippingInfo, discount, ...products } = await prisma.order
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
					shippingInfo: { select: { price: true } },
					discount: { select: { enable: true, type: true, value: true, endDate: true } }
				}
			})
			.catch(pe);

		const { eur, gbp } = await prisma.exchangeRate
			.findFirstOrThrow({ select: { eur: true, gbp: true }, orderBy: { createdAt: 'desc' } })
			.catch(pe);

		const totalItemsPrice = Object.values(products).reduce(
			(acc, cur) => acc + cur.reduce((acc, cur) => acc + (cur.finalPrice ?? 0), 0),
			0
		);
		const shippingPrice = shippingInfo?.price ?? 0;
		const discountPrice = (() => {
			if (!discount) return 0;
			if (discount.enable === false) return 0;
			if (discount.endDate && discount.endDate < new Date()) return 0;
			if (discount.type === 'PERCENTAGE') return (totalItemsPrice * discount.value) / 100;
			if (discount.type === 'FIXED') return discount.value > totalItemsPrice ? totalItemsPrice : discount.value;
			return 0;
		})();

		const price = totalItemsPrice + shippingPrice - discountPrice;
		const total = (currencyCode === 'eur' ? price * eur : currencyCode === 'gbp' ? price * gbp : price).toFixed(2);

		const data = await payment.createOrder(total, currencyCode);
		return data.id as string;
	});
