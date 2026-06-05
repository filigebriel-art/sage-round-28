import { Link } from "react-router-dom";
export default function NavBar(){
    return(
    <div className="navbar">
    
    <Link to="/">Home</Link>
    <Link to="/About">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/Course">Course</Link>
    
    </div>
    )
}