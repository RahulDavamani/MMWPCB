import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { customAlphabet } from 'nanoid';
import { sendOrderMail } from '$lib/server/mail';

const schema = z.object({ id: z.string().min(1), productIds: z.array(z.string().min(1)).nullable() });

export const submitReview = userProcedure
	.input(schema)
	.mutation(async ({ ctx: { user }, input: { id, productIds } }) => {
		const { status } = await prisma.order
			.findUniqueOrThrow({
				where: { id, userId: user.id },
				select: { status: true }
			})
			.catch(pe);

		await prisma.order
			.update({
				where: { id },
				data: {
					createdAt: status === 'CART' ? new Date() : undefined,
					status: 'REVIEW',
					timeline: { create: { action: 'SUBMIT_REVIEW' } }
				}
			})
			.catch(pe);

		if (status === 'CART')
			await prisma.order
				.create({
					data: {
						id: customAlphabet('1234567890', 10)(),
						status: 'CART',
						userId: user.id
					}
				})
				.catch(pe);

		if (productIds) {
			const { id: orderId } = await prisma.order
				.findFirstOrThrow({ where: { status: 'CART' }, select: { id: true } })
				.catch(pe);

			await prisma.standardPcb.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.advancedPcb.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.flexiblePcb.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.rigidFlex.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.assembly.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.stencil.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.cNC.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.sheetMetal.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.threePrinting.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.injectionMolding.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
			await prisma.vacuumCasting.updateMany({ where: { orderId: id, id: { in: productIds } }, data: { orderId } });
		}

		await sendOrderMail(id, 'ORDER_SUBMIT_REVIEW');
	});
