import { z } from 'zod';
import { userProcedure } from '../../../server';
import pe from '../../../../prisma/pe';

const schema = z.object({
	id: z.string().min(1),
	serviceCode: z.string().min(1),
	company: z.string().min(1),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	phone: z.string().min(1),
	testingRequirements: z.string(),
	antennaInfo: z
		.object({
			connectorType: z.string().min(1),
			impedance: z.number(),
			gender: z.string().min(1)
		})
		.optional()
});

export const create = userProcedure.input(schema).mutation(
	async ({ ctx: { user }, input: { antennaInfo, ...service } }) =>
		await prisma.service
			.create({
				data: {
					...service,
					antennaInfo: antennaInfo ? { create: antennaInfo } : undefined,
					status: 'APPLICATION_RECEIVED',
					userId: user.id
				},
				select: { id: true }
			})
			.catch(pe)
);
