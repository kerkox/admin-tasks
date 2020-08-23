import { Router } from 'express';
import userControllerApi from '../../controllers/api/userControllerApi';


const router = Router();

router.get('/users', userControllerApi.users_list)
router.post('/users', userControllerApi.users_create)
router.put('/users/:id', userControllerApi.users_update)
router.delete('/users/:id', userControllerApi.users_delete)



export default router;