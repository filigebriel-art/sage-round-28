import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {

    userId:{
        type:String,
        required:true
    },
    roomId:{
        type:String,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    guests:{
        type:Number,
        required:true
    },
    
    status:{
        type:String,
        dafault:"Confirmed"
    
},
    name:String,
    email:String
   
},


{
    timestamps:true
}

)

export default mongoose.model("Booking",bookingSchema)