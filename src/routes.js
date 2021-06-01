import { Router } from 'express';
import userRouter from './app/routes/User.routes';

const routes = Router();

routes.use('/users', userRouter);

export default routes;
