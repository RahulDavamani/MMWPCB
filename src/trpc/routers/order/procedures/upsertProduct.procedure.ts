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
import pe from '../../../../prisma/pe';

const schema = z.object({
	orderId: z.string().min(1),
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

export const upsertProduct = userProcedure.input(schema).mutation(
	async ({
		input: {
			orderId,
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
	}) =>
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
					rigidFlexes: (() => {
						if (!rigidFlex) return undefined;
						const { id, ...values } = rigidFlex;
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
					})(),
					cncs: (() => {
						if (!cnc) return undefined;
						const { id, ...values } = cnc;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					sheetMetals: (() => {
						if (!sheetMetal) return undefined;
						const { id, ...values } = sheetMetal;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					threePrintings: (() => {
						if (!threePrinting) return undefined;
						const { id, ...values } = threePrinting;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					injectionMoldings: (() => {
						if (!injectionMolding) return undefined;
						const { id, ...values } = injectionMolding;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})(),
					vacuumCastings: (() => {
						if (!vacuumCasting) return undefined;
						const { id, ...values } = vacuumCasting;
						return { upsert: { where: { id: id ?? '' }, create: values, update: values } };
					})()
				},
				select: { id: true }
			})
			.catch(pe)
);
