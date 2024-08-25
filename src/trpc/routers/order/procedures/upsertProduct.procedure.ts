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
					standardPcbs: (() => {
						if (!standardPcb) return undefined;
						const { id, ...values } = standardPcb;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					advancedPcbs: (() => {
						if (!advancedPcb) return undefined;
						const { id, ...values } = advancedPcb;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					flexiblePcbs: (() => {
						if (!flexiblePcb) return undefined;
						const { id, ...values } = flexiblePcb;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					assemblies: (() => {
						if (!assembly) return undefined;
						const { id, ...values } = assembly;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					stencils: (() => {
						if (!stencil) return undefined;
						const { id, ...values } = stencil;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})()
				},
				select: { id: true }
			})
			.catch(pe)
);
