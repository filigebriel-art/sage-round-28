import{useParams}from "react-router-dom"
import { useState } from "react"
import"../css/Form.css"
import { useNavigate } from "react-router-dom"
export default function Booking(){
   
    const[checkIn,setCheckIn]=useState("")
    const[checkOut,setCheckOut]=useState("")
    const[guests,setGuests]=useState("")




    const currentUser =JSON.parse(
        localStorage.getItem("currentUser")
    )
    const [name,setName] =useState(currentUser?.name || "")
    const [email,setEmail] =useState(currentUser?.email || "")


    const navigate = useNavigate()

    const {id}= useParams()


   
   async function handleBooking(e){
    
        e.preventDefault();


        const existingBookings = await fetch(
            "http://localhost:5000/api/bookings"
        ).then(res => res.json())

       

        const roomBooked = existingBookings.some(booking => {

            if(booking.roomId !== id) return false

            return(
                checkIn < booking.checkOut && 
                checkOut > booking.checkIn
            )
        })

        if(roomBooked){
            alert("Room is already booked for these dates.")
            return
        }


          if (checkIn && checkOut && checkIn >= checkOut) {
            alert("Check-out date must be after check-in date")
            
            return
        }

        // ✅ Check if check-in date is in the past
        const today = new Date().toISOString().split('T')[0]
        if (checkIn < today) {
            alert("Check-in date cannot be in the past")
            
            return
        }

        try{

            const booking ={
                userId: currentUser._id,
                roomId: id,
                guests,
                name,
                email,
                checkIn,
                checkOut
            }

            console.log(currentUser)

            const response = await fetch(
                "http://localhost:5000/api/bookings",
                {
                    method:"post",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(booking)
                }
            )

            const data = await response.json()

            console.log(data)

        alert("Booking Successful!");
        navigate("/booking-success")


        }catch(error){
            console.log(error)
            alert("Booking Failed")
        }
       
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
            readOnly
             />
             <br /><br />
        
            <input
             type="email"
            placeholder="Enter Email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            readOnly
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