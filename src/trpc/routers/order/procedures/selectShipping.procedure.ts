import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const schema = z.object({
	id: z.string().min(1),
	countryId: z.string().min(1),
	countryName: z.string().min(1),
	methodId: z.string().min(1),
	methodName: z.string().min(1),
	price: z.number().gt(0),
	deliveryTime: z.string(),
	restriction: z.string()
});

export const selectShipping = userProcedure.input(schema).mutation(
	async ({ ctx: { user }, input: { id, ...values } }) =>
		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: { shippingInfo: { upsert: { create: values, update: values } } },
				select: { id: true }
			})
			.catch(pe)
);
