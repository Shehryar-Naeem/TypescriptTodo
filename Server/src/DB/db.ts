import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const connectDB=():void=>{
    const DB:string = process.env.DB || "undefined"
    mongoose.connect(DB).then(()=>{
        console.log("database is connected");
        
    }).catch((err)=>{
        console.log("database is not connected" );
        
    })
}
export default connectDB    