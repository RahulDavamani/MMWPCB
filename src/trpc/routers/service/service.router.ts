import { router } from '../../server';
import { create } from './procedures/create.procedure';

export const service = router({ create });
