import { z } from 'zod';
import { noAuthProcedure } from '../../../server';
import { TRPCError } from '@trpc/server';
import pe from '../../../../prisma/pe';
import { sendMail } from '$lib/server/mail';

const schema = z.object({
	email: z.string().email(),
	otp: z.string().length(6),
	newUser: z.boolean()
});

export const sendOtp = noAuthProcedure.input(schema).mutation(async ({ input: { email, otp, newUser } }) => {
	const userExists = await prisma.user.findUnique({ where: { email } }).catch(pe);
	if (newUser && userExists) throw new TRPCError({ code: 'CONFLICT', message: 'User already exists' });
	if (!newUser && !userExists) throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });

	await sendMail({
		to: email,
		subject: 'OTP Verification',
		text: `Your OTP is ${otp}`
	});
});
