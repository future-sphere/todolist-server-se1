/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import { getAllTodos, getCompletedTodos } from './controllers';

// Todo-routes
const todoRouter = Router();

todoRouter.get('/', getAllTodos);
todoRouter.get('/completed', getCompletedTodos);

todoRouter.get('/incomplete', getAllTodos);
todoRouter.post('/', getAllTodos);
todoRouter.delete('/', getAllTodos);
todoRouter.put('/completed', getAllTodos);
todoRouter.put('/incomplete', getAllTodos);

export default todoRouter;
