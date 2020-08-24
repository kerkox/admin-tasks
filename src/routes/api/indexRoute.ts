import { Router } from 'express';

import taskRoute from './taskRoute';
import userRoute from './userRoute';
import authRoute from './authRoute';

const router = Router();

router.use(taskRoute);
router.use(userRoute);
router.use(authRoute);

export default router;