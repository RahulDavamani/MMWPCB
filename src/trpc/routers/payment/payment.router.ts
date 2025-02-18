import { router, userProcedure } from '../../server';
import braintree from 'braintree';
import { BRAINTREE_MERCHANT_ID, BRAINTREE_PUBLIC_KEY, BRAINTREE_PRIVATE_KEY } from '$env/static/private';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';

const gateway = new braintree.BraintreeGateway({
	environment: braintree.Environment.Sandbox,
	merchantId: BRAINTREE_MERCHANT_ID,
	publicKey: BRAINTREE_PUBLIC_KEY,
	privateKey: BRAINTREE_PRIVATE_KEY
});

export const payment = router({
	getClientToken: userProcedure.query(async () => {
		const { clientToken } = await gateway.clientToken.generate({});
		return clientToken;
	}),
	createTransaction: userProcedure
		.input(z.object({ nonce: z.string().min(1), total: z.string() }))
		.mutation(async ({ input: { nonce, total } }) => {
			const { success, transaction } = await gateway.transaction.sale({
				amount: total,
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

			const paymentInfo = {
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
			};

			return { paymentInfo };
		})
});
