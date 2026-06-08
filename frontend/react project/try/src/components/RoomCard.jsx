export default function RoomCard({name,price,image}){
    return(
        <div className="room-card">
            <img src={image}
             alt="Room" />

             <h2>{name}</h2>
             <p>${price}/ Night</p>
             <button>Book Now</button>


        </div>
    )
}