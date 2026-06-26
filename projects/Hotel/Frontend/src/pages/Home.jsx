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
        <div className="hero-overlay">
        <h1>Welcome To Grand Palace Hotel</h1>



        <p>Experience luxury, comfort, and unforgettable memories.</p>


        <button>Explore Rooms</button>

        </div>
    </section>
    

    <section className="featured-rooms">
        <h2> Featured Rooms</h2>

        <div className="rooms-grid">

            {rooms.slice(0, 3).map((room)=>(
                <RoomCard
                key={room.id}
                id={room.id}
                name={room.name}
                price={room.price}
                image={room.image}
                
                />
))}
        </div>
    </section>


        <section className="features">
            <h2>Why Choose Grand Palace Hotel?</h2>

            <div className="feature-grid">
                <div className="feature-card">

                    <h3>📶Free WiFi</h3>
                    <p>High-speed internet available  throughout the hotel.</p>
                </div>

                <div className="feature-card">
                    <h3>🏊 Swimming Pool</h3>
                    <p>Relax and enjoy our luxury swimming pool.</p>

                </div>

                <div className="feature-card">
                    <h3>🍽️ Restaurant</h3>
                    <p>Enjoy delicious local and international cuisine.</p>
                </div>

                <div className="feature-card">
                    <h3>🕒 24/7 Service</h3>
                    <p>Our staff is always available to assist you.</p>
                </div>
            </div>
        </section>

        <section className="testimonials">

            <h2>What Our Guests Say</h2>
             
             <div className="testimonial-container">
            <div className="testimonials-card">
                <p>
                    ⭐️⭐️⭐️⭐️⭐️

                </p>
                <p>"The rooms were beautiful and the staff were very friendly."</p>

                <h4>-John Smith</h4>
            </div>


            <div className="testimonials-card">
                <p>
                    ⭐️⭐️⭐️⭐️⭐️

                </p>
                
                <p>
                    "Amazing Service and delicious food, Highly recommended!"
                </p>
                <h4>-Sarah Johson</h4>

            </div>

            <div className="testimonials-card">
                <p>⭐️⭐️⭐️⭐️⭐️</p>
                <p>"One of the best hotel Experience I've ever had</p>
                <h4>-Michael Brown</h4>

            </div>
            
            </div>
        </section>
        
    </>
    )
}