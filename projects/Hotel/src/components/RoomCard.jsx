
import { Link } from "react-router-dom"
export default function RoomCard({id,name,price,image}){
    return(
       < Link to={`/rooms/${id}`}>
    
    <div className="room-card">
        <img src={image} alt="Room" />

        <h2>{name}</h2>

        <p>${price} / Night</p>
        <button>Book Now</button>

    </div>
    </Link>
    )
}