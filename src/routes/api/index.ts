import { Router, Request, Response } from 'express';

import task from './task';

const router = Router();

router.use(task);

export default router;