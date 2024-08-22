import { router } from '../../server';
import { get } from './procedures/get.procedure';
import { remove } from './procedures/remove.procedure';
import { upsert } from './procedures/upsert.procedure';

export const address = router({ get, upsert, remove });
