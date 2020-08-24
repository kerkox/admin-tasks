import { Router } from 'express';
import authControllerApi from '../../controllers/api/authControllerApi';


const router = Router();

router.post('/login', authControllerApi.login)



export default router;