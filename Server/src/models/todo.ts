import { ITodo } from "../types/todo"   
import { model, Schema } from "mongoose"


const todoSchema:Schema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the name"]
        },
        discription:{
            type:String,
            required:[true,"Please enter the discription"]
        },  
        status:{
            type:Boolean,
            required:true
        }
    },{
        timestamps:true
    }
)
export default model<ITodo>("todo",todoSchema)