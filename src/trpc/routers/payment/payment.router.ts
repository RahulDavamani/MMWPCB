import { router, userProcedure } from '../../server';
import braintree from 'braintree';
import { BRAINTREE_MERCHANT_ID, BRAINTREE_PUBLIC_KEY, BRAINTREE_PRIVATE_KEY } from '$env/static/private';
import { z } from 'zod';
import pe from '../../../prisma/pe';
import { TRPCError } from '@trpc/server';

const gateway = new braintree.BraintreeGateway({
	environment: braintree.Environment.Sandbox,
	merchantId: BRAINTREE_MERCHANT_ID,
	publicKey: BRAINTREE_PUBLIC_KEY,
	privateKey: BRAINTREE_PRIVATE_KEY
});

export const submitSchema = z.object({
	nonce: z.string().min(1),
	orderId: z.string().min(1)
});

export const payment = router({
	getClientToken: userProcedure.query(async () => {
		const { clientToken } = await gateway.clientToken.generate({});
		return clientToken;
	}),
	createTransaction: userProcedure
		.input(submitSchema)
		.mutation(async ({ ctx: { user }, input: { nonce, orderId } }) => {
			const order = await prisma.order
				.findUniqueOrThrow({
					where: { id: orderId, userId: user.id },
					select: {
						standardPcbs: { select: { id: true, finalPrice: true } },
						advancedPcbs: { select: { id: true, finalPrice: true } },
						flexiblePcbs: { select: { id: true, finalPrice: true } },
						assemblies: { select: { id: true, finalPrice: true } },
						stencils: { select: { id: true, finalPrice: true } }
					}
				})
				.catch(pe);

			const orderTotal = Object.values(order)
				.reduce((acc, cur) => acc + cur.reduce((acc, cur) => acc + (cur.finalPrice ?? 0), 0), 0)
				.toFixed(2);

			const { success, transaction } = await gateway.transaction.sale({
				amount: orderTotal,
				paymentMethodNonce: nonce,
				options: { submitForSettlement: true }
			});
			if (!success) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Payment failed' });

			const {
				id,
				networkTransactionId,
				createdAt,
				customer,
				type,
				status,
				amount,
				currencyIsoCode,
				paymentInstrumentType,
				creditCard,
				paypalAccount
			} = transaction;

			await prisma.order.update({
				where: { id: orderId },
				data: {
					status: 'CONFIRMED',
					timeline: { create: { action: 'CONFIRM' } },
					paymentInfo: {
						create: {
							transactionId: id,
							networkTransactionId,
							transactionCreatedAt: createdAt,
							customerId: customer.id,
							type,
							status,
							amount,
							currencyIsoCode,
							paymentInstrumentType,
							ccType: creditCard?.cardType,
							ppPaymentId: paypalAccount?.paymentId,
							ppPayerId: paypalAccount?.payerId
						}
					}
				}
			});

			return { transactionId: id, createdAt, paymentInstrumentType };
		})
});
