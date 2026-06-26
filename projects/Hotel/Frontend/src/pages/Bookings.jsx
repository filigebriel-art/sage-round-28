import { useEffect, useState } from "react"
import "../css/Bookings.css"








export default function Bookings(){

    const [search,setSearch]=useState("")

    const [bookings,setBookings]=useState([])
     const [rooms, setRooms] = useState([])
    





    useEffect(() => {
        // Fetch both bookings and rooms
        const fetchData = async () => {
            try {
                const bookingsRes = await fetch("http://localhost:5000/api/bookings")
                const bookingsData = await bookingsRes.json()
                setBookings(bookingsData)

                const roomsRes = await fetch("http://localhost:5000/api/rooms")
                const roomsData = await roomsRes.json()
                setRooms(roomsData)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData()
    }, [])

 
    function getRoomName(roomId) {
    const room = rooms.find(r => r._id === roomId)
    return room ? room.name || room.roomName : `Room ${roomId}`
} 

function getRoomPrice(roomId) {
    const room = rooms.find(r => r._id === roomId)
    return room ? room.price : 0
}

     function formatDate(dateString) {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric' 
        })
    }




     function calculateNights(checkIn, checkOut) {
        const start = new Date(checkIn)
        const end = new Date(checkOut)
        const diffTime = Math.abs(end - start)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays
    }

    // Function to calculate total price
    function calculateTotal(roomId, checkIn, checkOut) {
        const pricePerNight = getRoomPrice(roomId)
        const nights = calculateNights(checkIn, checkOut)
        return pricePerNight * nights
    }



   async function deleteBooking(id){

     const confirmDelete = window.confirm("Cancel this booking?")
        if (!confirmDelete) return

        try{
            await fetch(
                `http://localhost:5000/api/bookings/${id}`,
                {
                    method:"DELETE"
                }
            )

            setBookings(
                bookings.filter(
                    booking => booking._id !== id
                )
            )
             alert("Booking cancelled successfully")

        }catch(error){
            console.log(error)
        }

       
    }


    const filteredBookings = bookings.filter((booking)=>
    (booking.name || "").toLowerCase().includes(
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
                <div>
                <h2>No bookings yet</h2>
                <p>Book a room to get started.</p>
                </div>

            ):(
                <div className="table-wrapper">
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>Guest Name</th>
                            <th>Email</th>
                            <th>Guests</th>
                            <th>Room ID</th>
                            <th>Check In</th>
                            <th>Check Out</th>
                            
                             <th>Price/Night</th>
                                <th>Total</th>
                            <th>Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        
                       {filteredBookings.map((booking) => {
                                const pricePerNight = getRoomPrice(booking.roomId)
                                const nights = calculateNights(booking.checkIn, booking.checkOut)
                                const total = pricePerNight * nights


                            
                            return(
                            <tr key={booking._id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.guests}</td>
                                <td>{getRoomName(booking.roomId)}</td>
                                 <td>{formatDate(booking.checkIn)}</td>
                                 <td>{formatDate(booking.checkOut)}</td>
                                 
                                  <td>${pricePerNight}</td>
                                <td><strong>${total}</strong></td>
                                <td>

                                    <button
                                       onClick={()=>deleteBooking(booking._id)}
                                    >
                                        Cancel
                                        
                                    </button>
                                </td>
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
                </div> 

            )}
            </div>
    )}