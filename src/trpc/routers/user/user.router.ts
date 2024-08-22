import { router } from '../../server';
import { getProfile } from './procedures/getProfile.procedure';
import { updateProfile } from './procedures/updateProfile.procedure';

export const user = router({ getProfile, updateProfile });
