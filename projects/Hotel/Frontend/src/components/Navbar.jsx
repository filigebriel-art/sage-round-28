


import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import"../css/Navbar.css"

function getCurrentUser() {
    try {
        const storedUser = localStorage.getItem("currentUser")
        return storedUser ? JSON.parse(storedUser) : null
    } catch {
        return null
    }
}

export default function Navbar(){
    const [currentUser, setCurrentUser] = useState(getCurrentUser)
    const navigate = useNavigate()

    useEffect(() => {
        const handleAuthChange = () => {
            setCurrentUser(getCurrentUser())
        }

        window.addEventListener("storage", handleAuthChange)
        window.addEventListener("auth-change", handleAuthChange)

        return () => {
            window.removeEventListener("storage", handleAuthChange)
            window.removeEventListener("auth-change", handleAuthChange)
        }
    }, [])

   function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("rememberedEmail");
    setCurrentUser(null)
    window.dispatchEvent(new Event("auth-change"))
    navigate("/login")
}
    return(
    <nav  className="navbar">
        <h2 className="logo">
            🏨 LuxuryHotel</h2>

       
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/rooms">Rooms</Link>
                </li>


            <li>
                <Link to="my-bookings">My Booking</Link>
            </li>

           


        

             {currentUser?.role === "admin" && (
            
            <li>
                <Link to="/admin">
                Admin
                </Link>
            </li>
             )}
            
           


                {currentUser ? (
                    <>


                     <li>
                <Link to="/profile">Profile</Link>
                    </li>


                     <li>
                <Link to="/favorites">
                Favorites ❤️
                 </Link>
            </li>


            

                    <span>welcome,  {currentUser.name}</span>



                    <li>
                    <button onClick={logout}>Logout</button>

                    </li>

                             
           
           
                    </>
                ):(
                    <>
                    <li>
                    <Link  to="/login">Login</Link>
                    </li>
                    <li>
                    <Link to="/register">Register</Link>
                    </li>
                    </>
                )}


        </ul>
    </nav>
    )
}