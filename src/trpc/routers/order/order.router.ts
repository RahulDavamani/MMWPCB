import { router } from '../../server';
import { get } from './procedures/get.procedure';
import { getCart } from './procedures/getCart.procedure';
import { upsertProduct } from './procedures/upsertProduct.procedure';
import { selectDeliveryAddress } from './procedures/selectDeliveryAddress.procedure';
import { selectShipping } from './procedures/selectShipping.procedure';
import { getProduct } from './procedures/getProduct.procedure';
import { removeProduct } from './procedures/removeProduct';
import { submitReview } from './procedures/submitReview.procedure';
import { save } from './procedures/save.procedure';

export const order = router({
	get,
	getCart,
	getProduct,
	upsertProduct,
	removeProduct,
	selectShipping,
	selectDeliveryAddress,
	submitReview,
	save
});
