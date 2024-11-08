import { createCaller } from '../../../trpc/routers/app.router';
import { tse } from '../../../trpc/te';

export const load = async (event) => {
	const trpc = await createCaller(event);
	const users = await trpc.user.getAll().catch(tse);
	return { users };
};
