import { z } from 'zod';
import { adminProcedure } from '../../../server';
import pe from '../../../../prisma/pe';
import { sendOrderMail } from '$lib/server/mail';

export const updateTracking = adminProcedure
	.input(z.object({ id: z.string().min(1), trackingNumber: z.string().min(1), trackingUrl: z.string().optional() }))
	.mutation(async ({ input: { id, trackingNumber, trackingUrl } }) => {
		{
			await prisma.order
				.update({
					where: { id },
					data: { trackingNumber, trackingUrl }
				})
				.catch(pe);

			await sendOrderMail(id, 'ORDER_OUT_FOR_DELIVERY');
		}
	});
