import Room from "../model/Room.js";
export const getRooms =async(req,res)=>{
    try{
        const rooms=await Room.find()
        res.json(rooms)

    }catch(error){
        res.status(500).json({message:error.message})

    }
}

export const createRoom=async(req,res)=>{
    try{
        const rooms=await Room.create(req.body)
        res.status(201).json(rooms)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const updateRoom=async(req,res)=>{
    try{
        const rooms= await Room.findByIdAndUpdate(req.params.id,req.body,{new:true})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const deleteRoom=async(req,res)=>{
    try{
        const rooms=await Room.findByIdAndDelete(req.params.id)
        res.json({message:"Room deleted successfuly!"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}