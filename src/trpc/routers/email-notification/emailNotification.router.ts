import { z } from 'zod';
import { procedure, router } from '../../server';

const enTypeSchema = z.enum([
	'ORDER_SUBMIT_REVIEW',
	'ORDER_APPROVE_REVIEW',
	'ORDER_REJECT_REVIEW',
	'ORDER_CONFIRM_PAYMENT',
	'ORDER_FABRICATION_COMPLETE',
	'ORDER_OUT_FOR_DELIVERY',
	'ORDER_COMPLETE',

	'SERVICE_SUBMIT_REVIEW',
	'SERVICE_APPROVE_REVIEW',
	'SERVICE_REJECT_REVIEW',
	'SERVICE_CONFIRM_PAYMENT',
	'SERVICE_COMPLETE'
]);
export type ENType = z.infer<typeof enTypeSchema>;

const emailNotificationSchema = z.object({
	type: enTypeSchema,
	enable: z.boolean().optional(),
	title: z.string().optional(),
	description: z.string().optional(),
	subject: z.string().min(1).optional(),
	body: z.string().optional()
});
export type EmailNotification = z.infer<typeof emailNotificationSchema>;

export const emailNotification = router({
	getAll: procedure.query(
		async () =>
			await prisma.emailNotification.findMany({
				select: { id: true, updatedAt: true, type: true, enable: true, title: true },
				orderBy: { order: 'asc' }
			})
	),

	get: procedure
		.input(z.object({ type: enTypeSchema }))
		.query(async ({ input: { type } }) => await prisma.emailNotification.findUniqueOrThrow({ where: { type } })),

	update: procedure
		.input(emailNotificationSchema)
		.mutation(async ({ input }) => await prisma.emailNotification.update({ where: { type: input.type }, data: input }))
});
