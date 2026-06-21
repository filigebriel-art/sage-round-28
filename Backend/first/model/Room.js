import mongoose from "mongoose";

const roomSchema =new mongoose.Schema({
    roomName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    
        capacity:{
            type:Number,
            required:true
        }

    
})

const Room =mongoose.model("Room",roomSchema)
export default Room