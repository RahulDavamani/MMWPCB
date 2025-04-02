import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { sendOrderMail } from '$lib/server/mail';

export const complete = adminProcedure
	.input(z.object({ id: z.string().min(1) }))
	.mutation(async ({ input: { id } }) => {
		await prisma.order
			.update({
				where: { id },
				data: {
					status: 'COMPLETED',
					completedAt: new Date(),
					deliveryStatuses: {
						updateMany: {
							where: { completedAt: null },
							data: { completedAt: new Date() }
						}
					}
				}
			})
			.catch(pe);

		await sendOrderMail(id, 'ORDER_COMPLETE');
	});
