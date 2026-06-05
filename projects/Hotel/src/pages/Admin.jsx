 

import { useState } from "react";
import roomsData from "../data/rooms";

 export default function Admin(){
    const[rooms, setRooms]=useState(roomsData);


    function deleteRoom(id){
        serRoom(
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
        </div>
    )
 }