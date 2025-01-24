import { createCaller } from '../trpc/routers/app.router.js';
import { EXCHANGE_RATE_API_KEY } from '$env/static/private';
import { tse } from '../trpc/te.js';

export const load = async (event) => {
	// Exchange rate
	const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/latest/USD`);
	const data = await response.json();
	const exchangeRate = data.conversion_rates.EUR;

	// Cart
	const trpc = await createCaller(event);
	const cart = event.locals.session ? await trpc.order.getCart().catch(tse) : undefined;

	return { ...event.locals, exchangeRate, cart };
};
