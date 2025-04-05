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
		html: `
         <p>Hi,</p>
         <p>Your OTP is <b style="font-size: 20px;">${otp}</b></p>
         <p>Do not share this OTP with anyone. If you did not request this OTP, please ignore this email.</p>
         <p>Thank you for using our service</p>
         <p>Best regards,</p>
         <p>MMWPCB</p>
      `
	});
});
