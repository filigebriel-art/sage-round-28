import { useEffect,useState } from "react"

import "../css/Mybookings.css";

export default function MyBookings(){

    const [bookings, setBookings]=useState([])

    const currentUser =JSON.parse(
        localStorage.getItem("currentUser")
    )

   async function cancelBooking(id){

    const confirmDelete = window.confirm(
        "Are you sure you want to cancel this booking?"
    )

    if(!confirmDelete) return
     
     try{
        await fetch(
            `http://localhost:5000/api/bookings/${id}`,
            {
                method:"DELETE"
            }
        )

        setBookings(
            bookings.filter(
                booking => booking._id !==id
            )
        )
     }catch(error){
        console.log(error)
     }
   }


    useEffect(()=>{
       
        if(!currentUser) return
         
        fetch ("http://localhost:5000/api/bookings")
        .then(res => res.json())
        .then(data => {

            const MyBookings = data.filter(
                booking =>booking.userId ===currentUser._id        
              )

              setBookings(MyBookings)
        })
        .catch(err => console.log(err))
    },[])
    


        if(!currentUser) {
            return <h2>Please login to view your bookings.</h2>
        }

     

    
    
    

    return(
        <div className="my-bookings">
            <h1>My Bookings</h1>


            {bookings.length === 0 ?(
                <p>No bookings found .</p>
            ):(
                <div
                 className="booking-cards">
                    {bookings.map((booking)=>(

                        <div 
                        className="booking-card"
                         key={booking._id}>


                            <h3>Booking Details</h3>

                            <p>Email: {booking.email}</p>

                            <p>Guests:{booking.guests}</p>

                            <p>Room ID: {booking.roomId}</p>

                            <p>Check In: {booking.checkIn}</p>

                            <p>Check Out: {booking.checkOut}</p>
                 
<button onClick={()=>cancelBooking(booking._id)}>Cancel Booking</button>

                
                           
                        </div>

                        
                    ))}
                </div>
            )}
        </div>
    )
}