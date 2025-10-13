import mongoose from "mongoose";
const connectDB =async()=>{
    try{
const conn=await mongoose.connect(process.env.MONGODB_URI)
console.log('MangoDB Connected : ${conn}')
    }catch(err){
        
    }
}

export default connectDB