import { Request, Response } from "express";
import { ITodo } from "../../types/todo";
import Todo from "../../models/todo"



export const getTodo = async (req: Request, res: Response): Promise<void> => {
    try {

        const todos: ITodo[] = await Todo.find()
        res.status(200).json({
            message: "All Todos",
            todos,
            todoAmount:todos.length

        })
    } catch (error) {
        throw error
    }
}
export const createTodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITodo, "name" | "discription" | "status">


        const todo: ITodo = new Todo({
            name: body.name,
            discription: body.discription,  
            status: body.status,
        })
        const newTodo: ITodo = await todo.save()
        const todos: ITodo[] = await Todo.find()
 
        
        res.status(201).json({
            message: "Todo Added",
            todo: newTodo,
            todos: todos
        })
    } catch (error) {
        throw error
    }
}


export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { params: { id }, body } = req
        if(!id){
            res.status(404).json({
                message:`Not found Todo on such id ${id}`
            })
        }
        const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
            { _id: id }
            , body)
        const todos: ITodo[] = await Todo.find()
        
        res.status(200).json({
            message:"Todo is updated",
            updateTodo:updateTodo,
            todos:todos
        })
    } catch (error) {
        throw error
    }
}

export const deleteTodo=async(req:Request,res:Response):Promise<void>=>{
    try{
        const {params:{id}}= req
        if(!id){
            res.status(404).json({
                message:`Not found Todo on such id ${id}`
            })
        }
        const delete_todo:ITodo|null= await Todo.findByIdAndRemove({_id:id})
        
        const todos: ITodo[] = await Todo.find()
        
        res.status(200).json({
            message:"Todo deleted",
            deletedTodo: delete_todo,
            todos:todos,
            todoAmount:todos.length
        })
    }catch(error){
        throw error
    }
}