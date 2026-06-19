import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require:true},
    price:Number
})
export const Book=mongoose.model('book',bookSchema)