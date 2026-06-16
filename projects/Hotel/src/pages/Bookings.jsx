import { useEffect, useState } from "react"
import "../css/Bookings.css"
import rooms from "../data/rooms"








export default function Bookings(){

    const [search,setSearch]=useState("")

    const [bookings,setBookings]=useState([])

    useEffect(()=>{
        const savedBookings=JSON.parse(localStorage.getItem("bookings"))||[]
       
        setBookings(savedBookings)

    },[])


    function deleteBooking(id){
        const updatedBookings = bookings.filter(
            (booking) =>booking.id  !==id
         )


         setBookings(updatedBookings)

         localStorage.setItem("bookings",
            JSON.stringify(updatedBookings)
         )
    }
    const filteredBookings = bookings.filter((booking)=>
    booking.name.toLowerCase().includes(
        search.toLowerCase()
    ))
    return (
        <div className="bookings-container">
            <h1>Hotel Bookings</h1>

        
        <input
        type="text"
        placeholder="Search guest name..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
        />

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
                            <th>Actiions</th>

                        </tr>
                    </thead>

                    <tbody>
                        
                        {filteredBookings.map((booking)=>{
                            const room =rooms.find(
                                (room)=>room.id ===Number(booking.roomId)
                            )
                            return(
                            <tr key={booking.id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.guests}</td>
                                <td>{room ? room.name : "Unknown Room"}</td>
                                <td>{booking.checkIn}</td>
                                <td>{booking.checkOut}</td>


                                <td>

                                    <button
                                       onClick={()=>deleteBooking(booking.id)}
                                    >
                                        Cancel
                                        
                                    </button>
                                </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>

            )}
            </div>
    )}