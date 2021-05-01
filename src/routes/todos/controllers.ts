import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import { paramMissingError } from '@shared/constants';
import TodoModel from '../../schema/Todo';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllTodos(req: Request, res: Response) {
  const todos = await TodoModel.find({});
  return res.status(OK).json({ todos });
}

export async function getCompletedTodos(req: Request, res: Response) {
  const todos = await TodoModel.find({ isComplete: true });
  return res.status(OK).json({ todos });
}
