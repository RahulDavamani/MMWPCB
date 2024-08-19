import type { RequestEvent } from '@sveltejs/kit';
import { createCallerFactory, createContext, router } from '../server';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import { test } from './test.router';
import { shipping } from './shipping/shipping.router';
import { order } from './order/order.router';
import { profile } from './profile/profile.router';

export const appRouter = router({ test, shipping, order, profile });
export type AppRouter = typeof appRouter;

export const createCaller = async (event: RequestEvent) => createCallerFactory(appRouter)(await createContext(event));

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
