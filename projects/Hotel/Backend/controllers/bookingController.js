import Booking from "../models/Booking.js";

export const createBooking =async (req,res)=>{

    try{
        const booking = await Booking.create(req.body)
        res.status(201).json(booking)

    }catch(error){
        console.log(error)
        res.status(500).json({message:error.message})
    }
    console.log(req.body)
}

export const getBookings =async(req,res)=>{

    try{
        const bookings = await Booking.find()
        res.json(bookings)


    }catch(error){
        console.log(error)
        res.status(500).json({
            message:error.message
        })
    }

    
}

export const deleteBooking =async (req,res)=>{
    try{
        await Booking.findByIdAndDelete(req.params.id)
        res.json({
            message:"Booking deleted"
        })

    }catch(error){

        res.status(500).json({
            message:error.message
        })
    }
}


export const getUserBookings = async (req, res) => {
    try {

        const bookings = await Booking.find({
            userId: req.params.userId
        });

        res.json(bookings);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};