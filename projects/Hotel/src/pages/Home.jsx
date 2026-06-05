import RoomCard from "../components/RoomCard";
import "../css/Home.css";
import room1 from"../assets/room1.jpg";
import family from"../assets/family.jpg"
import luxury from"../assets/luxury.jpg"
export default function Home(){

console.log(room1)
    const rooms=[
        {
            id:1,
            name:"Luxury Room",
            price:120,
            image:luxury
        },
        {
            id:2,
            name:"VIP Suite",
            price:180,
            image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
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
            price:150,
            image:family

        }
        
    ]
    return(
    <>
    <section className="hero">
        <h1>Welcome To Our Hotel</h1>
        <p>Experience luxury, comfort, and unforgettable stays.</p>
        <button>Explore Rooms</button>
    </section>
    


    
        



   
    </>
    )
}