import type { RequestEvent } from '@sveltejs/kit';
import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';

// Context
export const createContext = async ({ locals: { user, session } }: RequestEvent) => ({ user, session });

// TRPC
export const t = initTRPC.context<typeof createContext>().create({ transformer: superjson });
export const { router, procedure, middleware, createCallerFactory } = t;

// Middlewares
const isNoAuth = middleware(({ ctx, next }) => {
	if (ctx.user) throw new TRPCError({ code: 'FORBIDDEN' });
	return next({ ctx });
});
const isUser = middleware(({ ctx, next }) => {
	if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' });
	return next({ ctx });
});
const isAdmin = middleware(({ ctx, next }) => {
	if (!ctx.user) throw new TRPCError({ code: 'UNAUTHORIZED' });
	if (ctx.user.role !== 'admin') throw new TRPCError({ code: 'FORBIDDEN' });
	return next({ ctx });
});

// Procedures
export const noAuthProcedure = procedure.use(isNoAuth);
export const userProcedure = procedure.use(isUser);
export const adminProcedure = procedure.use(isAdmin);
