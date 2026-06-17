import mongoose from "mongoose"
const bookSchema =new mongoose.Schema({
    title:{type:String,required:true},
    author:String,
    price:Number,
    publicationYear:Number
})
export const Book=mongoose.model("Book",bookSchema)