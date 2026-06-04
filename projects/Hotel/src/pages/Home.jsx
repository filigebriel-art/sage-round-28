import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import "../css/Home.css";
export default function Home(){


    const rooms=[
        {
            id:1,
            name:"Luxury Room",
            price:120,
            Image:"https://images.unsplash.com/photo-1566073771259-6a8506099945"
        },
        {
            id:2,
            name:"vIP Suite",
            price:180,
            Image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
        },
        {
            id:3,
            name:"Standard Room",
            price: 80,
            image:"https://images.unsplash.com/photo-1590490360182-c33d57733427"
        },
        {
            id:4,
            name:"Family Room",
            price:150
        }
        
    ]
    return(
    <>
    <Navbar/>
    <section className="hero">
        <h1>Welcome To Our Hotel</h1>
        <p>Experience luxury, comfort, and unforgettable stays.</p>
        <button>Explore Rooms</button>
    </section>
    


    <section className="rooms">
        {rooms.map((room)=>(
            <RoomCard
            key={room.id}
            name={room.name}
            price={room.price}
            image={room.image}
            />
        ))}
        



    </section>
    </>
    )
}