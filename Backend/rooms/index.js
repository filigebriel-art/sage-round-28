import express from 'express'
import mongoose from 'mongoose'
import { Room } from './model/rooms.js'
const app =express()


mongoose.connect('mongodb://localhost:27017/roomstore')
.then(()=>console.log('mongodb connected'))
.catch((err)=>console.log(err))

app.use(express.json())

app.get('/rooms',async(req,res)=>{
    const rooms=await Room.find()
    return res.status(200).json(rooms)

})
app.post('/rooms',async(req,res)=>{
     const room=new Room(req.body)
     await room.save()
     return res.status(200).json(room)
})
app.put('/rooms/:id',async(req,res)=>{
    const room=await Room.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).json(book)

})


app.listen(3000,()=>[
    console.log("server started at port 3000")
])