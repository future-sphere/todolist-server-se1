/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express';
import todoRouter from './todos';

// Export the base-router
const baseRouter = Router();
baseRouter.use('/todos', todoRouter);
export default baseRouter;
