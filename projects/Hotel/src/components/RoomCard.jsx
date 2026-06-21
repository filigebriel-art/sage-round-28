
import { Link } from "react-router-dom"
export default function RoomCard({id,name,price,image,isBooked}){




    function addToFavorite(){
        const favorites=JSON.parse(localStorage.getItem("favorites"))|| []

        const exists= favorites.find((fav)=>fav.id===id)

        if(exists){
            alert("Already in favorites")
            return
        }

        favorites.push({
            id,name,price,image
        })

        localStorage.setItem("favorites",JSON.stringify(favorites))
        alert("Added to favorites ❤️ ")
    }
    return(
       < Link to={`/rooms/${id}`}>
    
    <div className="room-card">
        <img src={image} alt="Room" />

        <h2>{name}</h2>

        <p>${price} / Night</p>

        
          <p>
                
                {isBooked ? "Booked  ❌ " : "Available ✅"}
            </p>

        <button>Book Now</button>

    </div>


    </Link>
    )
}