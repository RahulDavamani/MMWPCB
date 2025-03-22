import { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } from '$env/static/private';
import { CheckoutPaymentIntent, Client, Environment, OrdersController } from '@paypal/paypal-server-sdk';

const client = new Client({
	clientCredentialsAuthCredentials: {
		oAuthClientId: PAYPAL_CLIENT_ID,
		oAuthClientSecret: PAYPAL_CLIENT_SECRET
	},
	timeout: 0,
	environment: Environment.Production
});
const ordersController = new OrdersController(client);

const createOrder = async (total: string, currencyCode: 'usd' | 'eur' | 'gbp') => {
	const { body } = await ordersController.ordersCreate({
		body: {
			intent: CheckoutPaymentIntent.Capture,
			purchaseUnits: [{ amount: { currencyCode, value: total } }]
		},
		prefer: 'return=minimal'
	});
	return JSON.parse(body as string);
};

const captureOrder = async (id: string) => {
	const { body } = await ordersController.ordersCapture({ id, prefer: 'return=minimal' });
	return JSON.parse(body as string);
};

export const payment = { createOrder, captureOrder };
