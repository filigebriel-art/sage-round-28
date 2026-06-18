import mongoose from "mongoose";
import { type } from "node:os";
 
const userSchema=new mongoose.Schema({
    fullName:{type:String, require:true},
    userName:{type:String, require:true,unique:true},
    password:{type:String, require:true}

})

export const User=mongoose.model("User",userSchema)