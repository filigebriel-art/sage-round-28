
import RoomCard from "../components/RoomCard"
import rooms from "../data/rooms"


export default function Room(){
    return(
    <div className="rooms-pages">
    <h1>Our Rooms</h1>

    <section className="rooms">
        {rooms.map((room)=>(
            <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            price={room.price}
            image={room.image}
            
            />
        ))}
    </section>
    </div>
)}