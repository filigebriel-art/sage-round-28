import Navbar from "../components/Navbar";
import "../css/Home.css"
export default function Home(){
    return<>
    <Navbar/>
    <section className="hero">
        <h1>Welecome To Our Hotel</h1>

        <p>Book your dream room today</p>
        <button>Book Now</button>
    </section>
    
    </>
}