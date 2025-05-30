import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    pages:{
        type:Number
    },
    publishedYear:{
        type:Number
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Author",
        required:true
    }
},{timestamps:true});

const Book = mongoose.model("Book",bookSchema);
export default Book;