
import { useState } from "react"
import RoomCard from "../components/RoomCard"
import rooms from "../data/rooms"
import"../css/Rooms.css"

export default function Rooms(){

    const[search,setSearch]=useState("")
    const[priceFilter,setPriceFilter]=useState("all")
    const[sortOrder,setSortOrder]=useState("")

    const bookings =
    JSON.parse(localStorage.getItem("bookings"))||[]

      


    let filteredRooms =rooms.filter((room)=>
    room.name.toLowerCase().includes(
        search.toLowerCase()
    ))
    if(priceFilter === "under100"){
        filteredRooms =filteredRooms.filter(
            (room)=>room.price < 100
        )
    }


    if (priceFilter === "100to150"){
        filteredRooms=filteredRooms.filter(
            (room)=>room.price >= 100 && room.price <=150
        )
    }

    if(priceFilter === "above150"){
        filteredRooms= filteredRooms.filter(
            (room)=>room.price > 150
        )
    }

    if(sortOrder === "lowToHigh"){
        filteredRooms.sort(
            (a,b)=>a.price -b.price
        )
    }

    if (sortOrder === "highToLow"){
        filteredRooms.sort(
            (a,b)=>b.price - a.price
        )
    }


    function clearFilters(){
        setSearch("")
        setPriceFilter("all")
        setSortOrder("")
    }

    return(
    <div className="rooms-pages">

        <input
        className="search-box"
        type="text"
        placeholder="Search rooms...."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />



        <select 
          value={priceFilter}
          onChange={(e)=>setPriceFilter(e.target.value)}>
            <option value="all">All Prices</option>
            <option value="under100">Under $100</option>
            <option value="100to150">$100 - $150</option>
            <option value="above150">Above $150</option>
          </select>


          <select
             value={sortOrder}
             onChange={(e)=>setSortOrder(e.target.value)}>

                <option value="">Sort By Price</option>
                <option value="lowToHigh">Low - High</option>
                <option value="highToLow">High - Low</option>


             </select>

             <button
             className="clear-btn"
             onClick={clearFilters}>
                Clear Filters
             </button>
    <h1>Our Rooms</h1>

    <section className="rooms">
        {filteredRooms.map((room)=>{
            const isBooked =bookings.some(
                (booking)=>Number(booking.roomId) ===room.id)
                return(

        
            <RoomCard
            key={room.id}
            id={room.id}
            name={room.name}
            price={room.price}
            image={room.image}
            isBooked={isBooked}
            
            />
          
        )})}
    </section>
    </div>
)}