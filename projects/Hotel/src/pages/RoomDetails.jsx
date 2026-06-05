import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import rooms from "../data/rooms";

export default function RoomDetails(){
    const{id}=useParams();


    const room =rooms.find(
        (room)=>room.id===Number(id)
    )
    return(
    
    <div >
        <h1>{room.name}</h1>
        <img
             src={room.image}
             alt={room.name}
             width="400"
        
        />

        <p>{room.description}</p>
        <h2>${room.price}/Night</h2>

        <Link to={`/book/${room.id}`}>
        <button>Book Now</button>
        </Link>


    </div>
    )
}