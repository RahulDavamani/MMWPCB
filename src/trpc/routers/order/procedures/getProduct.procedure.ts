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
			where: { id: orderId, userId: user.id },
			select: {
				standardPcbs: { where: { id } },
				advancedPcbs: { where: { id } },
				flexiblePcbs: { where: { id } },
				rigidFlexes: { where: { id } },
				assemblies: { where: { id } },
				stencils: { where: { id } },
				cncs: { where: { id } },
				sheetMetals: { where: { id } },
				threePrintings: { where: { id } },
				injectionMoldings: { where: { id } },
				vacuumCastings: { where: { id } }
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
