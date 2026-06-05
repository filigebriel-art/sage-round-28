import{useParams}from "react-router-dom"
import { useState } from "react"
export default function Booking(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[checkIn,setCheckIn]=useState("")
    const[checkOut,setCheckOut]=useState("")
    const[guests,setGuests]=useState("")

    const {id}= useParams()


    function handleBooking(e){
        e.preventDefault();
        alert(`
            Guests:${guests}
            Name:${name}
            Email:${email}
            Check In:${checkIn}
            Chack Out:${checkOut}
            Room ID: ${id}
            `);
    }
    return(
    <div >
         <h1>Book Now{id}</h1>

         <form onSubmit={handleBooking} >
            <input type="number"
            placeholder="Number of guests"
            value={guests}
            onChange={(e)=>setGuests(e.target.value)} />
            <br /><br />
            <input type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
             />
             <br /><br />
        
            <input
             type="email"
            placeholder="Enter Email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <br /><br />
            <input
             type="date" 
             value={checkIn}
             onChange={(e)=>setCheckIn(e.target.value)}
            />
            <br /><br />
            <input
             type="date" 
             value={checkOut}
             onChange={(e)=>setCheckOut(e.target.value)}/>

            <br /><br />
            <button type="submit">Confirm Booking</button>
         </form>

    </div>
    )
}