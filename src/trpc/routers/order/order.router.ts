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
import { upsertProduction } from './procedures/upsertProduction.procedure';

export const order = router({
	get,
	getAll,
	getCart,
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
	upsertProduction,
	remove
});
