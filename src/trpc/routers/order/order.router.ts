import { router } from '../../server';
import { get } from './procedures/get.procedure';
import { getCart } from './procedures/getCart.procedure';
import { upsertProduct } from './procedures/upsertProduct.procedure';
import { selectDeliveryAddress } from './procedures/selectDeliveryAddress.procedure';
import { selectShipping } from './procedures/selectShipping.procedure';
import { getProduct } from './procedures/getProduct.procedure';
import { removeProduct } from './procedures/removeProduct.procedure';
import { submitReview } from './procedures/submitReview.procedure';
import { save } from './procedures/save.procedure';
import { getAll } from './procedures/getAll.procedure';
import { cancelReview } from './procedures/cancelReview.procedure';
import { remove } from './procedures/remove.procedure';
import { approveReview } from './procedures/approveReview.procedure';
import { rejectReview } from './procedures/rejectReview.procedure';
import { insertReviewMessage } from './procedures/insertReviewMessage.procedure';
import { updateDelivery } from './procedures/updateDelivery.procedure';
import { complete } from './procedures/complete.procedure';
import { startFabrication } from './procedures/startFabrication.procedure';
import { updateFabrication } from './procedures/updateFabrication.procedure';
import { completeFabrication } from './procedures/completeFabrication.procedure';
import { getDashboard } from './procedures/getDashboard.procedure';
import { getSaved } from './procedures/getSaved.procedure';
import { submitPayment } from './procedures/submitPayment.procedure';

export const order = router({
	get,
	getAll,
	getCart,
	getSaved,
	getDashboard,
	getProduct,
	upsertProduct,
	removeProduct,
	selectShipping,
	selectDeliveryAddress,
	save,
	submitReview,
	cancelReview,
	approveReview,
	rejectReview,
	insertReviewMessage,
	submitPayment,
	startFabrication,
	updateFabrication,
	completeFabrication,
	updateDelivery,
	complete,
	remove
});
