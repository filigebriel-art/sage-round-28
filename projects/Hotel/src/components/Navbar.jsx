


import{Link}from "react-router-dom"

export default function Navbar(){
    return(
    <nav  className="navbar">
        <h2>Hotel</h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
                </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                 <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/my-bookings">My Bookings</Link>
            </li>
            <li>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
    </nav>
    )
}