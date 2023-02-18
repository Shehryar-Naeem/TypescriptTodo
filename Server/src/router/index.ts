import { Router } from "express";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todos/todo";

const router:Router = Router()

router.get("/getTodo",getTodo)
router.post("/createtodo",createTodo)
router.put("/updatetodo/:id",updateTodo)
router.delete("/deletetodo/:id",deleteTodo)

export default router