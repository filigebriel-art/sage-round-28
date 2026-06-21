import { useEffect, useState } from "react";

export default function Favorites() {


  const [favorites,setFavorites]=useState([])

  useEffect(()=>{

    const savedFavorites= JSON.parse(localStorage.getItem("favorites"))||[]

    setFavorites(savedFavorites)
  },[])
  return (
    <div>
      <h1>My Favorite Rooms</h1>
      {favorites.length === 0 ?(
        <p>No favorite rooms yet.</p>
      ):(
        favorites.map((room)=>(
          <div key={room.id}>
            <img src={room.image}
             alt={room.name}
             width= "200"/>

             <h3>{room.name}</h3>

             <p>${room.price}</p>
          </div>
        ))
      )}
    </div>
   
  );
}