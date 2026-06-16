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
    

    <section className="featured-rooms">
        <h2> Featured Rooms</h2>

        <div className="rooms-grid">

            {rooms.map((room)=>{
                <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                
                />
})}
        </div>
    </section>


        <section className="features">
            <h2>Why Choose Us?</h2>

            <div className="feature-grid">
                <div className="feature-card">

                    <h3>Free WiFi</h3>
                    <p>Fast internet throughout the hotel.</p>
                </div>

                <div className="feature-card">
                    <h3>Swimming Pool</h3>
                    <p>Relax and enjoy our luxury pool.</p>

                </div>

                <div className="feature-card">
                    <h3>Restaurant</h3>
                    <p>Delicious meals served daily.</p>
                </div>

                <div className="feature-card">
                    <h3>24/7 Support</h3>
                    <p>Always available to assist guests.</p>
                </div>
            </div>
        </section>

        <section className="testimonials">

            <h2>What Our Guests Say</h2>

            <div className="testimonials-card">
                <p>"Excellent service and beautiful rooms"</p>
                <h4>-Sarah</h4>
            </div>
        </section>
        
    </>
    )
}