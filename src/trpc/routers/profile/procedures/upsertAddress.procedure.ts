import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

export const schema = z.object({
	id: z.string().min(1).optional(),
	name: z.string().min(1),
	phone: z.string().min(1),
	addressLine1: z.string().min(1),
	addressLine2: z.string(),
	city: z.string().min(1),
	state: z.string().min(1),
	country: z.string().min(1),
	postalCode: z.string().min(1)
});

export type Schema = z.infer<typeof schema>;

export const upsertAddress = userProcedure.input(schema).mutation(
	async ({ input: { id, ...address }, ctx: { user } }) =>
		await prisma.address
			.upsert({
				where: { id: id ?? '', userId: user.id },
				create: { ...address, userId: user.id },
				update: address
			})
			.catch(pe)
);
