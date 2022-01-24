import { Router } from "express";

const userRouter = Router();

//GET - BUSCANDO DADOS
//POST - CRIANDO DADOS
//PUT -  ATUALIZAR DADOS - OBJETOS INTEIROS
//PATCH - ATUALIZAR DADOS - ATUALIZA APENAS UM PARTE
//DELETE - DELETAR DADOS

userRouter.post('/signin', (request, response) => {
  return response.send('Entrando com o usuário')
})

userRouter.post('/signup', (request, response) => {
  return response.send('Criando um usuário')
})

export default userRouter