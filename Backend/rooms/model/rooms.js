import mongoose from "mongoose";
const roomSchema= new mongoose.Schema({
   roomname:{type:String,required:true},
    price:Number,

})
export const Room=mongoose.model("Room",roomSchema)