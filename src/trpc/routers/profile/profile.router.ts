import { router } from '../../server';
import { get } from './procedures/get.procedure';
import { removeAddress } from './procedures/removeAddress.procedure';
import { update } from './procedures/update.procedure';
import { upsertAddress } from './procedures/upsertAddress.procedure';

export const profile = router({ get, update, upsertAddress, removeAddress });
