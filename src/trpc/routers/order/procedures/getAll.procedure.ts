import { z } from 'zod';
import pe from '../../../../prisma/pe';
import { userProcedure } from '../../../server';
import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';

const schema = z.object({
	userId: z.string().min(1).optional(),
	filters: z.object({
		search: z.string(),
		status: z
			.enum([
				'SAVED',
				'REVIEW',
				'REJECTED',
				'APPROVED',
				'CONFIRMED',
				'FABRICATION',
				'DELIVERY',
				'COMPLETED',
				'REFUNDED'
			])
			.nullish(),
		page: z.number()
	})
});

export const getAll = userProcedure.input(schema).query(
	async ({
		ctx: { user },
		input: {
			userId,
			filters: { search, status, page }
		}
	}) => {
		if (user.id !== userId && user.role !== 'ADMIN') throw new TRPCError({ code: 'FORBIDDEN' });
		const where: Prisma.OrderWhereInput = {
			userId,
			status: status ?? { not: 'CART' },
			OR: [
				{ id: { contains: search } },
				{ standardPcbs: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ advancedPcbs: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ flexiblePcbs: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ rigidFlexes: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ assemblies: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ stencils: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ cncs: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ sheetMetals: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ threePrintings: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ injectionMoldings: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } },
				{ vacuumCastings: { some: { OR: [{ id: { contains: search } }, { name: { contains: search } }] } } }
			]
		};
		const productSelect = { select: { id: true, name: true, quantity: true, initialPrice: true, finalPrice: true } };

		const total = await prisma.order.count({ where }).catch(pe);
		const orders = await prisma.order
			.findMany({
				where,
				select: {
					id: true,
					createdAt: true,
					status: true,
					deliveryAddress: true,
					standardPcbs: productSelect,
					advancedPcbs: productSelect,
					flexiblePcbs: productSelect,
					rigidFlexes: productSelect,
					assemblies: productSelect,
					stencils: productSelect,
					cncs: productSelect,
					sheetMetals: productSelect,
					threePrintings: productSelect,
					injectionMoldings: productSelect,
					vacuumCastings: productSelect,
					user: {
						select: {
							id: true,
							firstName: true,
							lastName: true
						}
					}
				},
				orderBy: { createdAt: 'desc' },
				skip: (page - 1) * 10,
				take: 10
			})
			.catch(pe);

		return { total, orders };
	}
);
