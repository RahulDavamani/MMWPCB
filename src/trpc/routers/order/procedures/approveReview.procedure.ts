import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	id: z.string().min(1),
	products: z.array(z.object({ id: z.string().min(1), finalPrice: z.number() }))
});

export const approveReview = userProcedure.input(schema).mutation(async ({ input: { id, products } }) => {
	const { standardPcbs, advancedPcbs, flexiblePcbs, assemblies, stencils } = await prisma.order
		.update({
			where: { id },
			data: { status: 'APPROVED', timeline: { create: { action: 'APPROVE' } } },
			select: {
				standardPcbs: { select: { id: true, initialPrice: true } },
				advancedPcbs: { select: { id: true, initialPrice: true } },
				flexiblePcbs: { select: { id: true, initialPrice: true } },
				rigidFlexes: { select: { id: true, initialPrice: true } },
				assemblies: { select: { id: true, initialPrice: true } },
				stencils: { select: { id: true, initialPrice: true } }
			}
		})
		.catch(pe);

	for (const { id, initialPrice } of standardPcbs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.standardPcb
			.update({
				where: { id },
				data: { finalPrice }
			})
			.catch(pe);
	}
	for (const { id, initialPrice } of advancedPcbs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.advancedPcb
			.update({
				where: { id },
				data: { finalPrice }
			})
			.catch(pe);
	}
	for (const { id, initialPrice } of flexiblePcbs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.flexiblePcb
			.update({
				where: { id },
				data: { finalPrice }
			})
			.catch(pe);
	}
	for (const { id, initialPrice } of assemblies) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.assembly
			.update({
				where: { id },
				data: { finalPrice }
			})
			.catch(pe);
	}
	for (const { id, initialPrice } of stencils) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.stencil
			.update({
				where: { id },
				data: { finalPrice }
			})
			.catch(pe);
	}
});
