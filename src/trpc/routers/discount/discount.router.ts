import { router } from '../../server';
import { generate } from './procedures/generate.procedure';
import { getAll } from './procedures/getAll.procedure';
import { remove } from './procedures/remove.procedure';
import { toggle } from './procedures/toggle.procedure';

export const discount = router({ getAll, generate, toggle, remove });
