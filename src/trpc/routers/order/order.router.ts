import { router } from '../../server';
import { get } from './procedures/get.procedure';
import { getCart } from './procedures/getCart.procedure';
import { upsertProduct } from './procedures/upsertProduct.procedure';
import { selectDeliveryAddress } from './procedures/selectDeliveryAddress.procedure';
import { selectShipping } from './procedures/selectShipping.procedure';

export const order = router({ get, getCart, upsertProduct, selectShipping, selectDeliveryAddress });
