import Room from "../models/Room.js";






export const getRooms = async (req,res)=>{
    try{
        const rooms= await Room.find()
        res.json(rooms)

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
export const createRoom = async (req, res) => {

    try {

        const room = await Room.create({

            name: req.body.name,

            price: req.body.price,

            description: req.body.description,

            image: req.file
                ? `/uploads/${req.file.filename}`
                : ""

        });

        res.status(201).json(room);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


export const deleteRoom = async (req,res) => {
    try{


        await Room.findByIdAndDelete(req.params.id)

        res.json({
            message:"Room deleted"
        })

    }catch(error){

        res.status(500).json({
             message:error.message
        })
    }
}


export const updateRoom = async (req,res)=>{
    try{

        const room = await Room.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new:true}
        )

        res.json(room)

    }catch(error){

        res.status(500).json({
            message:error.message
        })

    }
}


export const getRoomById = async (req,res) => {
    try {
        const room = await Room.findById(req.params.id)

        if(!room){
            return res.status(404).json({
                message:"Room not found"
            })
        }

        res.json(room)
    }catch (error){
        res.status(500).json({
            message:error.message
        })
    }
}


