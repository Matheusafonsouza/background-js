import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router();

userRouter.post('/', UserController.create);
userRouter.get('/', UserController.show);

export default userRouter;
