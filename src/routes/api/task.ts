import { Router } from 'express';
import taskControllerApi from '../../controllers/api/taskControllerApi';

const router = Router();

router.get('/tasks', taskControllerApi.tasks_list)

router.post('/tasks', taskControllerApi.tasks_create)



export default router;