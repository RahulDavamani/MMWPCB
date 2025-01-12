import { router } from '../../server';
import { sendOtp } from './procedures/sendOtp.procedure';
import { register } from './procedures/register.procedure';
import { login } from './procedures/login.procedure';
import { resetPassword } from './procedures/resetPassword.procedure';

export const auth = router({ sendOtp, register, login, resetPassword });
