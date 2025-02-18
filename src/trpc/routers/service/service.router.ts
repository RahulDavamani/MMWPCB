import { router } from '../../server';
import { getAll } from './procedures/getAll.procedure';
import { create } from './procedures/create.procedure';
import { updateStatus } from './procedures/updateStatus.procedure';
import { submitPayment } from './procedures/submitPayment.procedure';
import { submitReport } from './procedures/submitReport.procedure';
import { remove } from './procedures/remove.procedure';

export const service = router({ getAll, create, updateStatus, submitPayment, submitReport, remove });
