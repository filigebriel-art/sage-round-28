 

import { useState } from "react";
import roomsData from "../data/rooms";

 export default function Admin(){
    const[rooms, setRooms]=useState(roomsData);
    const[roomName,setRoomName]=useState("")
    const[price, setPrice]=useState("")

    const [image,setImage]=useState("")
   function addRoom(){
    const  newRoom={
        id:Date.now(),
        name:roomName,
        price:Number(price),
        image:image
        
    }
       setRooms([...rooms, newRoom])
       setRoomName("")
       setPrice("")
   }

    function deleteRoom(id){
        setRooms(
            rooms.filter((room)=>room.id!==id)
        )
    }

    return(
        <div>
            <h1>Admin Dashboard</h1>
            {rooms.map((room)=>(
                <div className="admin-room" key={room.id}>
                    <h3>{room.name}</h3>
                    <p>${room.price}</p>
                    <button onClick={()=>deleteRoom(room.id)}>Delete</button>
                </div>
            ))}
        <h2>Add New Room</h2>

         <input type="text"
          placeholder="image URL" 
          value={image}
          onChange={(e)=>setImage(e.target.value)}/>

          
          <input
          type="text"
          placeholder="Room Name"
          value={roomName}
          onChange={(e)=>setRoomName(e.target.value)}
          />

          <input type="number"
          placeholder="price"
          value={price} 
          onChange={(e)=>setPrice(e.target.value)}/>

          <button onClick={addRoom}>Add Room</button>
        </div>
    )
 }