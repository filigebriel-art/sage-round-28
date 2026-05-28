import { useState } from "react"
import "./Booking.css"

export default function Booking(){

    const[city,setCity]=useState("")
    const[checkin,setCheckin]=useState("")
    const[checkout,setCheckout]=useState("")
    function handlebooking(){
        alert(`
            city:${city}
            check In:${checkin}
            check Out:${checkout}
        `)
    }
    return(
    <section className="booking">
        <select 
        value={city}
        onChange={(e)=>setCity(e.target.value)}>
            <option value="">select a City</option>
            <option value="Addis Abeba">Addis Abeba</option>
            <option value="Adama">Adama</option>
            <option value="Hawasa">Hawasa</option>
        


        </select>

    <input
     type="date" 
    value={checkin}
    onChange={(e)=>setCheckin(e.target.value)}
    />
    <input 
    type="date"
    value={checkout} 
    onChange={(e)=>setCheckout(e.target.value)}
    />
    <button onClick={handlebooking}>Check Availability</button>
    </section>

    )
}