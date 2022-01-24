import { Router } from "express";
import { UserController } from "../resources/user/dtos/user.contollers";

const userRouter = Router();
const userController = new UserController()

//GET - BUSCANDO DADOS
//POST - CRIANDO DADOS
//PUT -  ATUALIZAR DADOS - OBJETOS INTEIROS
//PATCH - ATUALIZAR DADOS - ATUALIZA APENAS UM PARTE
//DELETE - DELETAR DADOS

userRouter.post('/signin', userController.signin)
userRouter.post('/signup', userController.signup)

export default userRouter