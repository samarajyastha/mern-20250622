import todoService from "../services/todoService.js";

const getTodos = (req, res) => {
  const data = todoService.getAll();

  res.json(data);
};

const getOneTodo = (req, res) => {
  const data = todoService.getOne();

  res.json(data);
};

const createTodo = (req, res) => {
  res.send("Create a task");
};

export default { getTodos, getOneTodo, createTodo };
