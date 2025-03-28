import { z } from 'zod';
import { procedure, router } from '../../server';
import pe from '../../../prisma/pe';

const upsertCountrySchema = z.object({
	id: z.string().min(1).optional(),
	name: z.string().min(1)
});
export type UpsertCountry = z.infer<typeof upsertCountrySchema>;

const upsertMethodSchema = z.object({
	id: z.string().min(1).optional(),
	countryId: z.string().min(1),
	name: z.string().min(1),
	price: z.number().min(0),
	deliveryTime: z.string(),
	restriction: z.string()
});
export type UpsertMethod = z.infer<typeof upsertMethodSchema>;

export const shipping = router({
	getCountries: procedure.query(
		async () => await prisma.shippingCountry.findMany({ include: { _count: true } }).catch(pe)
	),

	upsertCountry: procedure
		.input(upsertCountrySchema)
		.mutation(
			async ({ input: { id, ...values } }) =>
				await prisma.shippingCountry.upsert({ where: { id: id ?? '' }, update: values, create: values }).catch(pe)
		),

	removeCountry: procedure
		.input(z.object({ id: z.string().min(1) }))
		.mutation(async ({ input: { id } }) => await prisma.shippingCountry.delete({ where: { id } }).catch(pe)),

	getMethods: procedure.input(z.object({ countryId: z.string().min(1) })).query(async ({ input: { countryId } }) => {
		const countryName = (await prisma.shippingCountry.findUniqueOrThrow({ where: { id: countryId } }).catch(pe)).name;
		const methods = await prisma.shippingMethod
			.findMany({
				where: { countryId },
				include: { country: { select: { name: true } } }
			})
			.catch(pe);

		return { countryName, methods };
	}),

	upsertMethod: procedure
		.input(upsertMethodSchema)
		.mutation(
			async ({ input: { id, ...values } }) =>
				await prisma.shippingMethod.upsert({ where: { id: id ?? '' }, update: values, create: values }).catch(pe)
		),

	removeMethod: procedure
		.input(z.object({ id: z.string().min(1) }))
		.mutation(async ({ input: { id } }) => await prisma.shippingMethod.delete({ where: { id } }).catch(pe))
});
