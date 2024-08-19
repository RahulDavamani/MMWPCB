import { z } from 'zod';
import { userProcedure } from '../../../server';
import { standardPcbSchema } from '../../../../zod/products/standardPcb.schema';
import { advancedPcbSchema } from '../../../../zod/products/advancedPcb.schema';
import { flexiblePcbSchema } from '../../../../zod/products/flexiblePcb.schema';
import { assemblySchema } from '../../../../zod/products/assembly.schema';
import { stencilSchema } from '../../../../zod/products/stencil.schema';
import pe from '../../../../prisma/pe';

const schema = z.object({
	orderId: z.string().min(1),
	standardPcb: standardPcbSchema.optional(),
	advancedPcb: advancedPcbSchema.optional(),
	flexiblePcb: flexiblePcbSchema.optional(),
	assembly: assemblySchema.optional(),
	stencil: stencilSchema.optional()
});

export const upsertProduct = userProcedure.input(schema).mutation(
	async ({ input: { orderId, standardPcb, advancedPcb, flexiblePcb, assembly, stencil }, ctx: { user } }) =>
		await prisma.order
			.update({
				where: { id: orderId, userId: user.id },
				data: {
					standardPcbs: standardPcb
						? {
								upsert: {
									where: { id: standardPcb?.id ?? '' },
									create: standardPcb,
									update: standardPcb
								}
							}
						: undefined,
					advancedPcbs: advancedPcb
						? {
								upsert: {
									where: { id: advancedPcb?.id ?? '' },
									create: advancedPcb,
									update: advancedPcb
								}
							}
						: undefined,
					flexiblePcbs: flexiblePcb
						? {
								upsert: {
									where: { id: flexiblePcb?.id ?? '' },
									create: flexiblePcb,
									update: flexiblePcb
								}
							}
						: undefined,
					assemblies: assembly
						? {
								upsert: {
									where: { id: assembly?.id ?? '' },
									create: assembly,
									update: assembly
								}
							}
						: undefined,
					stencils: stencil
						? {
								upsert: {
									where: { id: stencil?.id ?? '' },
									create: stencil,
									update: stencil
								}
							}
						: undefined
				},
				select: { id: true }
			})
			.catch(pe)
);
