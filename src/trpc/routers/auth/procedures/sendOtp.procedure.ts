import { z } from 'zod';
import { noAuthProcedure } from '../../../server';
import nodemailer from 'nodemailer';
import { TRPCError } from '@trpc/server';
import pe from '../../../../prisma/pe';
import { OTP_EMAIL, OTP_PASSWORD } from '$env/static/private';

const schema = z.object({
	email: z.string().email(),
	otp: z.string().length(6),
	newUser: z.boolean()
});

export const sendOtp = noAuthProcedure.input(schema).mutation(async ({ input: { email, otp, newUser } }) => {
	const userExists = await prisma.user.findUnique({ where: { email } }).catch(pe);
	if (newUser && userExists) throw new TRPCError({ code: 'CONFLICT', message: 'User already exists' });
	if (!newUser && !userExists) throw new TRPCError({ code: 'NOT_FOUND', message: 'User not found' });

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: { user: OTP_EMAIL, pass: OTP_PASSWORD }
	});

	const mailOptions = {
		from: 'davamanirahul@gmail.com',
		to: email,
		subject: 'OTP Verification',
		text: `Your OTP is ${otp}`
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (e) {
		console.log(e);
		throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'An Error has occurred while sending OTP' });
	}
});
