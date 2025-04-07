import { generateReceipt } from '$lib/server/generateReceipt.js';
import { json } from '@sveltejs/kit';
import { tse } from '../../../trpc/te.js';
import pe from '../../../prisma/pe.js';
import { en } from '$lib/locales/en.js';

export const GET = async ({ url }) => {
	const id = url.searchParams.get('id');
	if (!id) return json({ error: 'Missing ID' }, { status: 400 });

	const { firstName, lastName, email, phone, serviceCode, price, paymentInfo } = await prisma.service
		.findUniqueOrThrow({
			where: { id },
			select: {
				firstName: true,
				lastName: true,
				email: true,
				phone: true,
				serviceCode: true,
				price: true,
				paymentInfo: { select: { id: true, createdAt: true, amount: true, currency: true } }
			}
		})
		.catch(pe);
	if (!paymentInfo || !price) return json({ error: 'Missing payment' }, { status: 400 });

	// @ts-ignore
	const serviceName = Object.values(en.services.sections).find((s) => s.services[serviceCode])?.services[serviceCode]
		.title;

	const buffer = await generateReceipt({
		type: 'SERVICE_REQUEST',
		id,
		user: { firstName, lastName, email, phone },
		paymentInfo,
		items: [{ name: serviceName, quantity: 1, unitPrice: price, amount: price }]
	}).catch(tse);

	return new Response(buffer, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': `inline; filename=receipt-${id}.pdf`
		}
	});
};
