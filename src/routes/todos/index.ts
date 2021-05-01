/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import {
  getAllTodos,
  getCompletedTodos,
  getIncompleteTodos,
  createTodos,
  deleteTodos,
  completeTodo,
  incompleteTodo,
} from './controllers';

// Todo-routes
const todoRouter = Router();

// done
todoRouter.get('/', getAllTodos);
todoRouter.get('/completed', getCompletedTodos);
todoRouter.get('/incomplete', getIncompleteTodos);
todoRouter.post('/', createTodos);
todoRouter.delete('/', deleteTodos);
todoRouter.put('/completed', completeTodo);
todoRouter.put('/incomplete', incompleteTodo);

// undone

export default todoRouter;
