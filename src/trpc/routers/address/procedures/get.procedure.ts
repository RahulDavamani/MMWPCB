import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

export const get = userProcedure.query(
	async ({ ctx: { user } }) => await prisma.address.findMany({ where: { userId: user.id } }).catch(pe)
);
