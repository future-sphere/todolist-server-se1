import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';

import { paramMissingError } from '@shared/constants';
import TodoModel from '../../schema/Todo';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getAllTodos(req: Request, res: Response) {
  const todos = await TodoModel.find({});
  return res.status(OK).json(todos);
}

export async function getCompletedTodos(req: Request, res: Response) {
  const todos = await TodoModel.find({ isComplete: true });
  return res.status(OK).json(todos);
}

export async function getIncompleteTodos(req: Request, res: Response) {
  const todos = await TodoModel.find({ isComplete: false });
  return res.status(OK).json(todos);
}

export async function createTodos(req: Request, res: Response) {
  const title = req.body.title;
  if (title) {
    const newTodo = await TodoModel.create({ title: title, isComplete: false });
    return res.status(CREATED).json(newTodo);
  } else {
    return res.status(BAD_REQUEST).json('Title is empty!');
  }
}

export async function deleteTodos(req: Request, res: Response) {
  const todoId = req.body.todoId;
  if (todoId) {
    await TodoModel.findByIdAndRemove(todoId);
    return res.status(OK).json('Successfully deleted');
  } else {
    return res.status(BAD_REQUEST).json('No todo id requested');
  }
}

export async function completeTodo(req: Request, res: Response) {
  const todoId = req.body.todoId;
  if (todoId) {
    const newTodo = await TodoModel.findByIdAndUpdate(
      todoId,
      {
        $set: { isComplete: true },
      },
      {
        new: true,
      }
    );
    return res.status(OK).json(newTodo);
  } else {
    return res.status(BAD_REQUEST).json('No todo id requested');
  }
}

export async function incompleteTodo(req: Request, res: Response) {
  const todoId = req.body.todoId;
  if (todoId) {
    const newTodo = await TodoModel.findByIdAndUpdate(
      todoId,
      {
        $set: { isComplete: false },
      },
      {
        new: true,
      }
    );
    return res.status(OK).json(newTodo);
  } else {
    return res.status(BAD_REQUEST).json('No todo id requested');
  }
}
