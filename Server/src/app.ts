import express,{ Express } from "express";
import * as dotenv from "dotenv"
import connectDB from "./DB/db";
import todoRoute from "./router/index"
import cors from "cors"
const app :Express = express()


dotenv.config({path:"./config.env"})
const PORT:string | number = process.env.PORT || 5000


app.use(express.json())
app.use(cors())
app.use(todoRoute)
app.listen(PORT,()=>{
    console.log(`server is created at port ${PORT}`);
})
connectDB()