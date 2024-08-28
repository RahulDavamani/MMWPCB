import type { RequestEvent } from '@sveltejs/kit';
import { createCallerFactory, createContext, router } from '../server';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { test } from './test.router';
import { shipping } from './shipping/shipping.router';
import { order } from './order/order.router';
import { user } from './user/user.router';
import { address } from './address/address.router';
import { product } from './product/product.router';
import { lang } from './lang/lang.router';
import { payment } from './payment/payment.router';

export const appRouter = router({ test, lang, user, address, product, shipping, order, payment });
export type AppRouter = typeof appRouter;

export const createCaller = async (event: RequestEvent) => createCallerFactory(appRouter)(await createContext(event));

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
