import Navbar from "../components/Navbar";
import RoomCard from "../components/RoomCard";
import "../css/Home.css"
export default function Home(){
    return<>
    <Navbar/>
    <section className="hero">
        <h1>Welecome To Our Hotel</h1>

        <p>Exprience luxury , confort, and unforgattable stays.</p>
        <button>Explore Rooms</button>
    </section>
        

        <section className="rooms">
            <RoomCard
              name="Luxury Room"
              price="120"
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945"
              />
            <RoomCard
            name="Vip Suite"
            price="180"
            image="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            />

            <RoomCard
             name="Standard Room"
             price="80"
             image="https://images.unsplash.com/photo-1590490360182-c33d57733427"            />
        </section>
    
    </>
}