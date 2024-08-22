import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const getProfile = userProcedure.query(
	async ({ ctx: { user } }) =>
		await prisma.user.findUniqueOrThrow({ where: { id: user.id }, include: { addresses: true } }).catch(pe)
);
