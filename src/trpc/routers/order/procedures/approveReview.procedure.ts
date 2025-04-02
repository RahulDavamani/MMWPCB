import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { sendOrderMail } from '$lib/server/mail';

const schema = z.object({
	id: z.string().min(1),
	weight: z.number(),
	estDeliveryDate: z.date(),
	products: z.record(z.string(), z.number()),
	shippingInfo: z.object({
		countryName: z.string().min(1),
		methodName: z.string(),
		price: z.number(),
		deliveryTime: z.string(),
		restriction: z.string()
	})
});

export const approveReview = userProcedure.input(schema).mutation(async ({ input: { id, products, shippingInfo } }) => {
	await prisma.order
		.update({
			where: { id },
			data: {
				status: 'APPROVED',
				timeline: { create: { action: 'APPROVE' } },
				shippingInfo: { update: shippingInfo }
			}
		})
		.catch(pe);

	for (const [id, price] of Object.entries(products)) {
		const finalPrice = Math.round(price * 100) / 100;
		await prisma.standardPcb.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.advancedPcb.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.flexiblePcb.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.rigidFlex.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.assembly.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.stencil.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.cNC.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.sheetMetal.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.threePrinting.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.injectionMolding.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
		await prisma.vacuumCasting.updateMany({ where: { id }, data: { finalPrice } }).catch(pe);
	}

	await sendOrderMail(id, 'ORDER_APPROVE_REVIEW');
});
