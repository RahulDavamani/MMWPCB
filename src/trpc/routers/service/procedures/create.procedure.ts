import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	id: z.string().min(1),
	service: z.string().min(1),
	company: z.string().min(1),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	phone: z.string().min(1),
	testingRequirements: z.string()
});

export const create = userProcedure.input(schema).mutation(
	async ({ ctx: { user }, input: service }) =>
		await prisma.service
			.create({
				data: {
					...service,
					status: 'APPLICATION_RECEIVED',
					userId: user.id
				},
				select: { id: true }
			})
			.catch(pe)
);
