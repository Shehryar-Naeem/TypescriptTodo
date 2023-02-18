import { Document } from "mongoose";    

export interface ITodo extends Document{
    name:string,
    discription:string,
    status:boolean
}