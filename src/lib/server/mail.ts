import nodemailer from 'nodemailer';
import { BASE_URL, OTP_EMAIL, OTP_PASSWORD } from '$env/static/private';
import type { ENType } from '../../trpc/routers/email-notification/emailNotification.router';
import pe from '../../prisma/pe';
import { supabase } from '$lib/client/supabase';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: { user: OTP_EMAIL, pass: OTP_PASSWORD }
});

export const sendMail = async (mailOptions: nodemailer.SendMailOptions) => {
	try {
		const html = `
         <div
            style="
            border: 1px solid #ddd; 
            border-radius: 8px; 
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
            padding: 32px; 
            width: 50%; 
            margin: 16px auto;"
         >
            <div style="text-align: center;">
               <a
                  href="${BASE_URL}"
                  style="font-size: 22px; font-weight: bold; font-family: serif; color: #162780; text-decoration: none;"
               >
                  MMWPCB
               </a>
            </div>
            <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"></div>

            <div>${mailOptions.html}</div>

            <div style="border-top: 1px solid #e5e7eb; margin: 16px 0;"></div>
            <div style="text-align: center; font-size: 14px; color: #9ca3af;">
               <div>Copyright © 2025 Velenova Ltd. All rights reserved</div>
               <div>Providing reliable tech since 1992</div>
            </div>
         </div>
      `;

		await transporter.sendMail({
			from: OTP_EMAIL,
			...mailOptions,
			html
		});
	} catch (e) {
		console.log(e);
		throw new Error('An Error has occurred');
	}
};

export const sendOrderMail = async (id: string, type: ENType) => {
	const { enable, subject, body } = await prisma.emailNotification.findUniqueOrThrow({ where: { type } }).catch(pe);
	if (!enable) return;

	const {
		estDeliveryDate,
		trackingNumber,
		trackingUrl,
		user: { email, firstName, lastName }
	} = await prisma.order
		.findUniqueOrThrow({
			where: { id },
			select: {
				estDeliveryDate: true,
				trackingNumber: true,
				trackingUrl: true,
				user: { select: { email: true, firstName: true, lastName: true } }
			}
		})
		.catch(pe);

	const quotationUrl = BASE_URL + `/quotation/order?id=${id}`;
	const paymentReceiptUrl = BASE_URL + `/payment-receipt/order?id=${id}`;

	const replaceVariables = (val: string) =>
		val
			.replaceAll('{OrderNumber}', id)
			.replaceAll('{CustomerName}', `${firstName} ${lastName}`)
			.replaceAll('{DeliveryDate}', estDeliveryDate?.toString() ?? 'TBA')
			.replaceAll('{QuotationUrl}', quotationUrl)
			.replaceAll('{PaymentReceiptUrl}', paymentReceiptUrl)
			.replaceAll('{TrackingNumber}', trackingNumber ?? 'TBA')
			.replaceAll('{TrackingUrl}', trackingUrl ?? 'TBA');

	await sendMail({
		to: email,
		subject: replaceVariables(subject),
		html: replaceVariables(body)
	});
};

export const sendServiceMail = async (id: string, type: ENType) => {
	const { enable, subject, body } = await prisma.emailNotification.findUniqueOrThrow({ where: { type } }).catch(pe);
	if (!enable) return;

	const {
		report,
		user: { email, firstName, lastName }
	} = await prisma.service
		.findUniqueOrThrow({
			where: { id },
			select: { report: true, user: { select: { email: true, firstName: true, lastName: true } } }
		})
		.catch(pe);

	const paymentReceiptUrl = BASE_URL + `/payment-receipt/service-request?id=${id}`;

	const reportUrl =
		report && body.includes('{ReportUrl}')
			? await supabase.storage
					.from('')
					.createSignedUrl(report, 60 * 60 * 24 * 7)
					.catch(pe)
			: undefined;

	const replaceVariables = (val: string) =>
		val
			.replaceAll('{RequestNumber}', id)
			.replaceAll('{CustomerName}', `${firstName} ${lastName}`)
			.replaceAll('{PaymentReceiptUrl}', paymentReceiptUrl)
			.replaceAll('{ReportUrl}', reportUrl?.data?.signedUrl ?? 'TBA');

	await sendMail({
		to: email,
		subject: replaceVariables(subject),
		html: replaceVariables(body)
	});
};
