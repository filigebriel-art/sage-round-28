import { useEffect, useState } from "react"
import "../css/Bookings.css"

export default function Bookings(){
    const [bookings,setBookings]=useState([])

    useEffect(()=>{
        const savedBookings=JSON.parse(localStorage.getItem("bookings"))||[]
       
        setBookings(savedBookings)

    },[])
    return (
        <div className="bookings-container">
            <h1>Hotel Bookings</h1>


            {bookings.length === 0 ? (
                <p>No bookings available.</p>
            ):(
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Guest Name</th>
                            <th>Email</th>
                            <th>Guests</th>
                            <th>Room ID</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                        {bookings.map((booking)=>{
                            return(
                            <tr key={booking.id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.guests}</td>
                                <td>{booking.roomId}</td>
                                <td>{booking.checkIn}</td>
                                <td>{booking.checkOut}</td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>

            )}
            </div>
    )}