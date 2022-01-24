import {Router} from 'express'
import userRouter from './user.routes';

//Neste arquivo terá todas as rotas
const routes = Router();

routes.use('/user', userRouter)

export default routes;