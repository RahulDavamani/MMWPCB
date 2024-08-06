import type { RequestEvent } from '@sveltejs/kit';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const createContext = async (event: RequestEvent) => ({ event });

export const t = initTRPC.context<typeof createContext>().create({ transformer: superjson });
export const { router, procedure, middleware, createCallerFactory } = t;
