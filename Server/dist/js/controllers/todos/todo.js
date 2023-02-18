"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodo = void 0;
const todo_1 = __importDefault(require("../../models/todo"));
const getTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.status(200).json({
            message: "All Todos",
            todos,
            todoAmount: todos.length
        });
    }
    catch (error) {
        throw error;
    }
});
exports.getTodo = getTodo;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const todo = new todo_1.default({
            name: body.name,
            discription: body.discription,
            status: body.status,
        });
        const newTodo = yield todo.save();
        const todos = yield todo_1.default.find();
        res.status(201).json({
            message: "Todo Added",
            todo: newTodo,
            todos: todos
        });
    }
    catch (error) {
        throw error;
    }
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body } = req;
        if (!id) {
            res.status(404).json({
                message: `Not found Todo on such id ${id}`
            });
        }
        const updateTodo = yield todo_1.default.findByIdAndUpdate({ _id: id }, body);
        const todos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo is updated",
            updateTodo: updateTodo,
            todos: todos
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id } } = req;
        if (!id) {
            res.status(404).json({
                message: `Not found Todo on such id ${id}`
            });
        }
        const delete_todo = yield todo_1.default.findByIdAndRemove({ _id: id });
        const todos = yield todo_1.default.find();
        res.status(200).json({
            message: "Todo deleted",
            deletedTodo: delete_todo,
            todos: todos,
            todoAmount: todos.length
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteTodo = deleteTodo;
