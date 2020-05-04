import { Router } from 'express';
import authenticate from './auth';
import authref from './authref';
import register from './register';

const authRouter: Router = Router();

authRouter.post('/', authenticate);
authRouter.post('/refresh', authref);
authRouter.post('/reguster', register);

export default authRouter;
