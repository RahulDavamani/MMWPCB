import { generateReceipt } from '$lib/server/generateReceipt.js';
import { json } from '@sveltejs/kit';
import { tse } from '../../../trpc/te.js';
import pe from '../../../prisma/pe.js';

export const GET = async ({ url }) => {
	const id = url.searchParams.get('id');
	if (!id) return json({ error: 'Missing ID' }, { status: 400 });

	const { user, deliveryAddress, paymentInfo, shippingInfo, discount, ...products } = await prisma.order
		.findUniqueOrThrow({
			where: { id },
			select: {
				user: { select: { firstName: true, lastName: true, email: true } },
				deliveryAddress: {
					select: { addressLine1: true, addressLine2: true, city: true, state: true, country: true, postalCode: true }
				},
				paymentInfo: {
					select: { id: true, createdAt: true, amount: true, currency: true }
				},
				shippingInfo: { select: { price: true } },
				discount: { select: { enable: true, type: true, value: true, endDate: true } },
				standardPcbs: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				advancedPcbs: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				flexiblePcbs: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				rigidFlexes: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				assemblies: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				stencils: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				cncs: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				sheetMetals: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				threePrintings: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				injectionMoldings: { select: { id: true, name: true, quantity: true, finalPrice: true } },
				vacuumCastings: { select: { id: true, name: true, quantity: true, finalPrice: true } }
			}
		})
		.catch(pe);

	if (!paymentInfo || !deliveryAddress) return json({ error: 'Missing payment' }, { status: 400 });

	const { eur, gbp } = await prisma.exchangeRate
		.findFirstOrThrow({ select: { eur: true, gbp: true }, orderBy: { createdAt: 'desc' } })
		.catch(pe);

	const parsePrice = (price: number) =>
		paymentInfo.currency === 'EUR' ? price * eur : paymentInfo.currency === 'GBP' ? price * gbp : price;

	const items = Object.values(products).flatMap((p) =>
		p.map((item) => {
			const quantity =
				typeof item.quantity === 'number' ? item.quantity : item.quantity.reduce((acc, cur) => acc + cur, 0);

			return {
				name: item.name,
				quantity,
				unitPrice: parsePrice(item.finalPrice ?? 0) / quantity,
				amount: parsePrice(item.finalPrice ?? 0)
			};
		})
	);

	const totalItemsPrice = items.reduce((acc, cur) => acc + (cur.amount ?? 0), 0);
	const shippingPrice = parsePrice(shippingInfo?.price ?? 0);
	const discountPrice = parsePrice(
		(() => {
			if (!discount) return 0;
			if (discount.enable === false) return 0;
			if (discount.endDate && discount.endDate < new Date()) return 0;
			if (discount.type === 'PERCENTAGE') return (totalItemsPrice * discount.value) / 100;
			if (discount.type === 'FIXED') return discount.value > totalItemsPrice ? totalItemsPrice : discount.value;
			return 0;
		})()
	);

	const buffer = await generateReceipt({
		type: 'ORDER',
		id,
		user,
		deliveryAddress,
		paymentInfo,
		items,
		shippingPrice,
		discountPrice
	}).catch(tse);

	return new Response(buffer, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `inline; filename=receipt-${id}.pdf`
		}
	});
};
