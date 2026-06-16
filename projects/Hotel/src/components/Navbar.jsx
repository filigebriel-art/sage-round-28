


import{Link}from "react-router-dom"

export default function Navbar(){

    const currentUser=JSON.parse(
        localStorage.getItem("currentUser")
    )
    console.log(currentUser)



    function logout(){

        localStorage.removeItem("isLoggedIin")
        localStorage.removeItem("currentUser")
        window.location.href="/login"
    }

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
                <Link to="my-bookings">My Booking</Link>
            </li>
            


            {currentUser ?.role ==="admin" && (

            
            
            <li>
                <Link to="/admin">Admin</Link>
            </li>
            )}
           


                {currentUser ? (
                    <>
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