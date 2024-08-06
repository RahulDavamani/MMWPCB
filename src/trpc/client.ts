import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import superjson from 'superjson';
import type { AppRouter } from './routers/app.router';

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

export const trpc = (init?: TRPCClientInit) => {
	const isBrowser = typeof window !== 'undefined';
	if (isBrowser && browserClient) return browserClient;
	const client = createTRPCClient<AppRouter>({ init, transformer: superjson });
	if (isBrowser) browserClient = client;
	return client;
};
