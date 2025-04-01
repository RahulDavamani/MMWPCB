import { z } from 'zod';
import { userProcedure } from '../../../server';
import { standardPcbSchema } from '../../../../zod/products/standardPcb.schema';
import { advancedPcbSchema } from '../../../../zod/products/advancedPcb.schema';
import { flexiblePcbSchema } from '../../../../zod/products/flexiblePcb.schema';
import { rigidFlexSchema } from '../../../../zod/products/rigidFlex.schema';
import { assemblySchema } from '../../../../zod/products/assembly.schema';
import { stencilSchema } from '../../../../zod/products/stencil.schema';
import { cncSchema } from '../../../../zod/products/cnc.schema';
import { sheetMetalSchema } from '../../../../zod/products/sheetMetal.schema';
import { threePrintingSchema } from '../../../../zod/products/threePrinting.schema';
import { injectionMoldingSchema } from '../../../../zod/products/injectionMolding.schema';
import { vacuumCastingSchema } from '../../../../zod/products/vacuumCasting.schema';
import { TRPCError } from '@trpc/server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	orderId: z.string().min(1),
	files: z.array(z.object({ name: z.string().min(1) })),
	standardPcb: standardPcbSchema.optional(),
	advancedPcb: advancedPcbSchema.optional(),
	flexiblePcb: flexiblePcbSchema.optional(),
	rigidFlex: rigidFlexSchema.optional(),
	assembly: assemblySchema.optional(),
	stencil: stencilSchema.optional(),
	cnc: cncSchema.optional(),
	sheetMetal: sheetMetalSchema.optional(),
	threePrinting: threePrintingSchema.optional(),
	injectionMolding: injectionMoldingSchema.optional(),
	vacuumCasting: vacuumCastingSchema.optional()
});

export const upsertProduct = userProcedure
	.input(schema)
	.mutation(
		async ({
			input: {
				orderId,
				files,
				standardPcb,
				advancedPcb,
				flexiblePcb,
				rigidFlex,
				assembly,
				stencil,
				cnc,
				sheetMetal,
				threePrinting,
				injectionMolding,
				vacuumCasting
			},
			ctx: { user }
		}) => {
			let product;
			if (standardPcb) product = { key: 'standardPcbs', data: standardPcb };
			else if (advancedPcb) product = { key: 'advancedPcbs', data: advancedPcb };
			else if (flexiblePcb) product = { key: 'flexiblePcbs', data: flexiblePcb };
			else if (rigidFlex) product = { key: 'rigidFlexes', data: rigidFlex };
			else if (assembly) product = { key: 'assemblies', data: assembly };
			else if (stencil) product = { key: 'stencils', data: stencil };
			else if (cnc) product = { key: 'cncs', data: cnc };
			else if (sheetMetal) product = { key: 'sheetMetals', data: sheetMetal };
			else if (threePrinting) product = { key: 'threePrintings', data: threePrinting };
			else if (injectionMolding) product = { key: 'injectionMoldings', data: injectionMolding };
			else if (vacuumCasting) product = { key: 'vacuumCastings', data: vacuumCasting };
			else throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid product' });

			return await prisma.order
				.update({
					where: { id: orderId, userId: user.id },
					data: {
						[product.key]: {
							upsert: {
								where: { id: product.data.id },
								create: { ...product.data, files: { createMany: { data: files } } },
								update: { ...product.data, files: { deleteMany: {}, createMany: { data: files } } }
							}
						}
					},
					select: { id: true }
				})
				.catch(pe);
		}
	);
