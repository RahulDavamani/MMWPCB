import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	id: z.string().min(1),
	products: z.array(z.object({ id: z.string().min(1), finalPrice: z.number() }))
});

export const approveReview = userProcedure.input(schema).mutation(async ({ input: { id, products } }) => {
	const {
		standardPcbs,
		advancedPcbs,
		flexiblePcbs,
		rigidFlexes,
		assemblies,
		stencils,
		cncs,
		sheetMetals,
		threePrintings,
		injectionMoldings,
		vacuumCastings
	} = await prisma.order
		.update({
			where: { id },
			data: { status: 'APPROVED', timeline: { create: { action: 'APPROVE' } } },
			select: {
				standardPcbs: { select: { id: true, initialPrice: true } },
				advancedPcbs: { select: { id: true, initialPrice: true } },
				flexiblePcbs: { select: { id: true, initialPrice: true } },
				rigidFlexes: { select: { id: true, initialPrice: true } },
				assemblies: { select: { id: true, initialPrice: true } },
				stencils: { select: { id: true, initialPrice: true } },
				cncs: { select: { id: true, initialPrice: true } },
				sheetMetals: { select: { id: true, initialPrice: true } },
				threePrintings: { select: { id: true, initialPrice: true } },
				injectionMoldings: { select: { id: true, initialPrice: true } },
				vacuumCastings: { select: { id: true, initialPrice: true } }
			}
		})
		.catch(pe);

	for (const { id, initialPrice } of standardPcbs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.standardPcb.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of advancedPcbs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.advancedPcb.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of flexiblePcbs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.flexiblePcb.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of rigidFlexes) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.rigidFlex.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of assemblies) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.assembly.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of stencils) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.stencil.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of cncs) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.cNC.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of sheetMetals) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.sheetMetal.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of threePrintings) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.threePrinting.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of injectionMoldings) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.injectionMolding.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
	for (const { id, initialPrice } of vacuumCastings) {
		const finalPrice = products.find((product) => product.id === id)?.finalPrice ?? initialPrice;
		await prisma.vacuumCasting.update({ where: { id }, data: { finalPrice } }).catch(pe);
	}
});
