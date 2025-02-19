import { router } from '../../server';
import { getAll } from './procedures/getAll.procedure';
import { create } from './procedures/create.procedure';
import { updateStatus } from './procedures/updateStatus.procedure';
import { submitPayment } from './procedures/submitPayment.procedure';
import { uploadReport } from './procedures/uploadReport.procedure';
import { remove } from './procedures/remove.procedure';
import { approve } from './procedures/approve.procedure';

export const service = router({ getAll, create, updateStatus, approve, submitPayment, uploadReport, remove });
