import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected successfully");
    }catch(error){
        console.log("Mongodb connection failed. Error:",error);
    }
}
 export default connectDB;