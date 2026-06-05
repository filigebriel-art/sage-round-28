export default function MyBookings(){

    const bookings =[
        {
        id:1,
        room:"Luxury Room",
        guests: 2,
        checkIn:"2026-o6-10",
        checkOut:"2026-06-15"
        },
        {
            id:2,
            room:"Family Room",
            guests:4,
            checkIn:"2026-07-01",
            checkOut:"2026-07-05"

        }

]
    return(
        <div className="booking-card">
            <h1>My Bookings</h1>
            {bookings.map((booking)=>(
                <div key={booking.id}>

                    <h3>{booking.room}</h3>

                    <p>Guests:{booking.guests}</p>

                    <p>CheckIn: {booking.checkIn}</p>

                    <p>CheckOut:{booking.checkOut}</p>
                    
                    </div>
            ))}
        </div>
    )
}