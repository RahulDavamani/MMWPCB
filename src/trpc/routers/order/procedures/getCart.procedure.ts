import { userProcedure } from '../../../server';

export const getCart = userProcedure.query(
	async ({ ctx: { user } }) =>
		await prisma.order.findFirst({
			where: { userId: user?.id, status: 'CART' },
			select: {
				id: true,
				standardPcbs: { select: { id: true, name: true, quantity: true, buildTime: true, initialPrice: true } },
				advancedPcbs: { select: { id: true, name: true, quantity: true, buildTime: true, initialPrice: true } },
				flexiblePcbs: { select: { id: true, name: true, quantity: true, buildTime: true, initialPrice: true } },
				assemblies: { select: { id: true, name: true, quantity: true, buildTime: true, initialPrice: true } },
				stencils: { select: { id: true, name: true, quantity: true, buildTime: true, initialPrice: true } }
			}
		})
);
