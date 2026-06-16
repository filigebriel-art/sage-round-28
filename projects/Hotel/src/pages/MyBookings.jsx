import { useEffect,useState } from "react"

import "../css/Mybookings.css";

export default function MyBookings(){

    const [bookings, setBookings]=useState([])

    useEffect(()=>{
       
        const savedBookings =
        JSON.parse(localStorage.getItem("bookings")) ||[]

        const myBookings= savedBookings.filter(
            (booking)=>booking.userId ===currentUser.id
        )

        setBookings(myBookings)
    },[])

     

    function cancelBooking(id){
        const allBookings=
        JSON.parse(localStorage.getItem("bookings"))|| []

        const updatedAllBookings = allbookings.filter(
            (booking)=>booking.id !==id
        )
        

        localStorage.setItem(
            "bookings",
            JSON.stringify(updatedAllBookings)
        )
        setBookings(
            updatedAllBookings.filter(
                (booking)=>booking.userId ===currentUser.id
            )
        )
    }

    const currentUser =JSON.parse(
            localStorage.getItem("currentUser")
        )
        if (!currentUser){
            
            return <h2>Please login to view your bookings.</h2>
        }
    

    return(
        <div className="my-bookings">
            <h1>My Bookings</h1>


            {bookings.length === 0 ?(
                <p>No bookings found .</p>
            ):(
                <div className="booking-cards">
                    {bookings.map((booking)=>(
                        <div className="booking-card" key={booking.id}>
                            <h3>{booking.name}</h3>

                            <p>Email: {booking.email}</p>

                            <p>Guests:{booking.guests}</p>

                            <p>Room ID: {booking.roomId}</p>

                            <p>Check In: {booking.checkIn}</p>

                            <p>Check Out: {booking.checkOut}</p>

                            <button onClick={()=>cancelBooking(booking.id)

                            }>Cancel Booking</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}