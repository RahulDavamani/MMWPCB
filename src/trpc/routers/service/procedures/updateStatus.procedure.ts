import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { adminProcedure } from '../../../server';

const schema = z.object({
	id: z.string().min(1),
	status: z.enum(['IN_REVIEW', 'TESTING_IN_PROGRESS', 'REJECTED'])
});

export const updateStatus = adminProcedure
	.input(schema)
	.mutation(
		async ({ input: { id, status } }) => await prisma.service.update({ where: { id }, data: { status } }).catch(pe)
	);
