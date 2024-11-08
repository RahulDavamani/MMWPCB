import { router } from '../../server';
import { get } from './procedures/get.procedure';
import { getAll } from './procedures/getAll.procedure';
import { getProfile } from './procedures/getProfile.procedure';
import { updateProfile } from './procedures/updateProfile.procedure';

export const user = router({ get, getAll, getProfile, updateProfile });
