import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const schema = z.object({
	id: z.string().min(1),
	addressId: z.string().min(1),
	name: z.string().min(1),
	phone: z.string().min(1),
	addressLine1: z.string().min(1),
	addressLine2: z.string().min(1),
	city: z.string().min(1),
	state: z.string().min(1),
	country: z.string().min(1),
	postalCode: z.string().min(1)
});

export const selectDeliveryAddress = userProcedure
	.input(schema)
	.mutation(async ({ ctx: { user }, input: { id, ...values } }) => {
		await prisma.order
			.update({
				where: { id, userId: user.id },
				data: { deliveryAddress: { upsert: { create: values, update: values } } },
				select: { id: true }
			})
			.catch(pe);
	});
