import express from "express";
import todoController from "../controllers/todoController.js";

const router = express.Router();

router.get("/", todoController.getTodos);

router.get("/one", todoController.getOneTodo);

router.post("/", todoController.createTodo);

export default router;
