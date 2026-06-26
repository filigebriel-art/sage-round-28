
import RoomCard from "../components/RoomCard"
import"../css/Rooms.css"
import { useState,useEffect } from "react"
export default function Rooms(){

    const [bookings, setBookings]=useState([])
    const [rooms, setRooms]=useState([])
    const[search,setSearch]=useState("")
    const[priceFilter,setPriceFilter]=useState("all")
    const[sortOrder,setSortOrder]=useState("")
    const [reviews,setReviews]= useState([])

  

      


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


    useEffect(()=>{
        fetch("http://localhost:5000/api/rooms")
        .then(res => res.json())
        .then(data =>setRooms(data))
        .catch(err => console.log(err))

    fetch("http://localhost:5000/api/bookings")
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(err => console.log(err))


    fetch("http://localhost:5000/api/reviews")
         .then(res => res.json())
         .then(data => setReviews(data))
    },[])

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

                booking => booking.roomId === room._id)

                const roomReviews = reviews.filter(
                    reviews =>reviews.roomId === room._id
                )

                const averageRating = 
                roomReviews.length > 0 ?(
                    roomReviews.reduce(
                        (sum,review)=>sum + review.rating,0
                    )/roomReviews.length

                ).toFixed(1)

                : "No Rating"



                return(

        
            <RoomCard
            key={room._id}
            id={room._id}
            name={room.name}
            price={room.price}
            image={room.image}
            isBooked={isBooked}
            rating={Number(room.rating) || 0}
            
            />
          
        )})}
    </section>
    </div>
)}