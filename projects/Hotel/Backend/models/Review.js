import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    roomId: {
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},
{
  timestamps:true

})

export default mongoose.model("Review",reviewSchema)