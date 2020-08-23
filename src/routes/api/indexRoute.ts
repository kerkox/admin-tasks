import { Router } from 'express';

import taskRoute from './taskRoute';
import userRoute from './userRoute';

const router = Router();

router.use(taskRoute);
router.use(userRoute);

export default router;