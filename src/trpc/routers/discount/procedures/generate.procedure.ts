import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { customAlphabet } from 'nanoid';

const schema = z.object({
	count: z.number().min(1),
	type: z.enum(['PERCENTAGE', 'FIXED']),
	value: z.number().min(0),
	usageLimit: z.number().min(1),
	startDate: z.date().optional(),
	endDate: z.date().optional()
});

export const generate = userProcedure.input(schema).mutation(
	async ({ input: { count, ...values } }) =>
		await prisma.discount
			.createMany({
				data: Array.from({ length: count }, () => ({
					...values,
					enable: true,
					code: customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6)()
				}))
			})
			.catch(pe)
);
