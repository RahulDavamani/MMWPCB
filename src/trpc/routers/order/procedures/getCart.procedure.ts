import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';

const productSelect = { select: { id: true, name: true, quantity: true, initialPrice: true } };

export const getCart = userProcedure.query(
	async ({ ctx: { user } }) =>
		await prisma.order
			.findFirst({
				where: { userId: user.id, status: 'CART' },
				select: {
					id: true,
					standardPcbs: productSelect,
					advancedPcbs: productSelect,
					flexiblePcbs: productSelect,
					assemblies: productSelect,
					stencils: productSelect
				}
			})
			.catch(pe)
);
