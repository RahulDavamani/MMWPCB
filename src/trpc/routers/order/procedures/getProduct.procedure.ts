import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { TRPCError } from '@trpc/server';

const schema = z.object({
	orderId: z.string().min(1),
	id: z.string().min(1)
});

export const getProduct = userProcedure.input(schema).query(async ({ ctx: { user }, input: { orderId, id } }) => {
	const products = await prisma.order
		.findUniqueOrThrow({
			where: { id: orderId, userId: user.role === 'USER' ? user.id : undefined },
			select: {
				standardPcbs: { where: { id }, include: { files: { select: { name: true } } } },
				advancedPcbs: { where: { id }, include: { files: { select: { name: true } } } },
				flexiblePcbs: { where: { id }, include: { files: { select: { name: true } } } },
				rigidFlexes: { where: { id }, include: { files: { select: { name: true } } } },
				assemblies: { where: { id }, include: { files: { select: { name: true } } } },
				stencils: { where: { id }, include: { files: { select: { name: true } } } },
				cncs: { where: { id }, include: { files: { select: { name: true } } } },
				sheetMetals: { where: { id }, include: { files: { select: { name: true } } } },
				threePrintings: { where: { id }, include: { files: { select: { name: true } } } },
				injectionMoldings: { where: { id }, include: { files: { select: { name: true } } } },
				vacuumCastings: { where: { id }, include: { files: { select: { id: true, name: true } } } }
			}
		})
		.catch(pe);

	let product, productType;
	if (products.standardPcbs.length) {
		product = products.standardPcbs[0];
		productType = 'standardPcb';
	} else if (products.advancedPcbs.length) {
		product = products.advancedPcbs[0];
		productType = 'advancedPcb';
	} else if (products.flexiblePcbs.length) {
		product = products.flexiblePcbs[0];
		productType = 'flexiblePcb';
	} else if (products.rigidFlexes.length) {
		product = products.rigidFlexes[0];
		productType = 'rigidFlex';
	} else if (products.assemblies.length) {
		product = products.assemblies[0];
		productType = 'assembly';
	} else if (products.stencils.length) {
		product = products.stencils[0];
		productType = 'stencil';
	} else if (products.cncs.length) {
		product = products.cncs[0];
		productType = 'cnc';
	} else if (products.sheetMetals.length) {
		product = products.sheetMetals[0];
		productType = 'sheetMetal';
	} else if (products.threePrintings.length) {
		product = products.threePrintings[0];
		productType = 'threePrinting';
	} else if (products.injectionMoldings.length) {
		product = products.injectionMoldings[0];
		productType = 'injectionMolding';
	} else if (products.vacuumCastings.length) {
		product = products.vacuumCastings[0];
		productType = 'vacuumCasting';
	} else {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return { product, productType };
});
