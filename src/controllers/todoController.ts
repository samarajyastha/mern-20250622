import todoService from "../services/todoService";
import type { Request, Response } from "express";

const getTodos = (req: Request, res: Response) => {
  const data = todoService.getAll();

  res.json(data);
};

const getOneTodo = (req: Request, res: Response) => {
  const data = todoService.getOne();

  res.json(data);
};

const createTodo = (req: Request, res: Response) => {
  res.send("Create a task");
};

export default { getTodos, getOneTodo, createTodo };
