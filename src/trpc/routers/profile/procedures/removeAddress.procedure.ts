import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({ id: z.string().min(1) });

export const removeAddress = userProcedure
	.input(schema)
	.mutation(
		async ({ input: { id }, ctx: { user } }) =>
			await prisma.address.delete({ where: { id, userId: user.id } }).catch(pe)
	);
