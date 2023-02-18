"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todos/todo");
const router = (0, express_1.Router)();
router.get("/getTodo", todo_1.getTodo);
router.post("/createtodo", todo_1.createTodo);
router.put("/updatetodo/:id", todo_1.updateTodo);
router.delete("/deletetodo/:id", todo_1.deleteTodo);
exports.default = router;