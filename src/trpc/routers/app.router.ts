import type { RequestEvent } from '@sveltejs/kit';
import { createCallerFactory, createContext, router } from '../server';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { shipping } from './shipping/shipping.router';
import { order } from './order/order.router';
import { user } from './user/user.router';
import { address } from './address/address.router';
import { lang } from './lang/lang.router';
import { auth } from './auth/auth.router';
import { service } from './service/service.router';
import { exchangeRate } from './exchange-rate/exchangeRate.router';
import { emailNotification } from './email-notification/emailNotification.router';
import { discount } from './discount/discount.router';

export const appRouter = router({
	auth,
	lang,
	user,
	address,
	shipping,
	order,
	service,
	discount,
	exchangeRate,
	emailNotification
});
export type AppRouter = typeof appRouter;

export const createCaller = async (event: RequestEvent) => createCallerFactory(appRouter)(await createContext(event));

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
