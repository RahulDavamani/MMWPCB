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
				assemblies: { where: { id } },
				stencils: { where: { id } }
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
	} else if (products.assemblies.length) {
		product = products.assemblies[0];
		productType = 'assembly';
	} else if (products.stencils.length) {
		product = products.stencils[0];
		productType = 'stencil';
	} else {
		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	return { product, productType };
});
