import { createCaller } from '../../../../trpc/routers/app.router.js';
import { tse } from '../../../../trpc/te.js';

export const load = async (event) => {
	const trpc = await createCaller(event);
	console.log(event.params.id);
	const order = await trpc.order.get({ id: event.params.id }).catch(tse);
	return { order };
};
