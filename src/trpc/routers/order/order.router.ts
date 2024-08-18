import { router } from '../../server';
import { getCart } from './procedures/getCart.procedure';
import { upsertProduct } from './procedures/upsertProduct.procedure';

export const order = router({ getCart, upsertProduct });
