import { validateAuth } from '$lib/server/auth/validateAuth.js';
import { createCaller } from '../../trpc/routers/app.router.js';
import { tse } from '../../trpc/te.js';

export const load = async (event) => {
	const { user } = event.locals;
	await validateAuth('user', user);

	const id = event.url.searchParams.get('id');

	const trpc = await createCaller(event);
	const order = await trpc.order.get({ id }).catch(tse);

	// trpc.order.rejectReview({id: id ?? ''});
	// trpc.order.approveReview({ id: id ?? '', products: [] });

	// trpc.order.upsertFabrication({
	// 	orderId: id ?? '',
	// 	productId: order.standardPcbs[0].id,
	// 	productType: 'standardPcbs',
	// 	statuses: [
	// 		{ num: 1, status: 'Drill', completed: true, completedAt: new Date() },
	// 		{ num: 2, status: 'Plating', completed: true, completedAt: new Date() },
	// 		{ num: 3, status: 'Solder mask', completed: false },
	// 		{ num: 4, status: 'Silkscreen', completed: false },
	// 		{ num: 5, status: 'Test', completed: false },
	// 		{ num: 6, status: 'Packaging', completed: false }
	// 	]
	// });

	// trpc.order.upsertDelivery({
	// 	id: id ?? '',
	// 	statuses: [
	// 		{ num: 1, status: 'Shipment Ready', completed: true, completedAt: new Date() },
	// 		{ num: 2, status: 'Shipment Picked Up', completed: true, completedAt: new Date() },
	// 		{ num: 3, status: 'Shipment In Transit', completed: true, completedAt: new Date() },
	// 		{ num: 4, status: 'Shipment Received', completed: false },
	// 		{ num: 5, status: 'Out for Delivery', completed: false },
	// 		{ num: 6, status: 'Delivered', completed: false }
	// 	]
	// });

	// trpc.order.complete({ id: id ?? '' });
	return { order };
};
