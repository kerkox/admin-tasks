import { Router } from 'express';
import taskControllerApi from '../../controllers/api/taskControllerApi';

const router = Router();

router.get('/tasks', taskControllerApi.tasks_list)
router.post('/tasks', taskControllerApi.tasks_create)
router.put('/tasks/:id', taskControllerApi.tasks_update)
router.delete('/tasks/:id', taskControllerApi.tasks_delete)



export default router;