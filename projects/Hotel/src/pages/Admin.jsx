import { useState,useEffect } from "react";
import roomsData from "../data/rooms";
import "../css/Admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
  const [rooms, setRooms] = useState(()=>{
    const savedRooms=localStorage.getItem("rooms")
    return savedRooms
    ? JSON.parse(savedRooms)
    :roomsData
  });

  const [roomName, setRoomName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState("");

  useEffect(()=>{
    localStorage.setItem(
      "rooms",
      JSON.stringify(rooms)
    );
  },[rooms])

  function addRoom() {
    if (!roomName || !price || !image) {
      alert("Please fill all fields");
      return;
    }

    const newRoom = {
      id: Date.now(),
      name: roomName,
      price: Number(price),
      image: image,
    };

    setRooms([...rooms, newRoom]);

    setRoomName("");
    setPrice("");
    setImage("");
  }

  function deleteRoom(id) {
    setRooms(
      rooms.filter((room) => room.id !== id)
    );
  }

  function editRoom(room) {
    console.log("Room selected",room)
    setEditingId(room.id);

    setEditName(room.name);
    setEditPrice(room.price);
    setEditImage(room.image);
  }

  function updateRoom() {
    const updatedRooms = rooms.map((room) => {
      if (room.id === editingId) {
        return {
          ...room,
          name: editName,
          price: Number(editPrice),
          image: editImage,
        };
      }

      return room;
    });
    console.log("editing ID",editingId)
    console.log("updated Rooms",updatedRooms)
    setRooms(updatedRooms);

    setEditingId(null);
    setEditName("");
    setEditPrice("");
    setEditImage("");
  }


  const totalRooms=rooms.length

  const totalBookings=
    JSON.parse(localStorage.getItem("bookings"))?.length || 0;



  const totalRevenue =
  rooms.reduce((total,room)=>total + room.price, 0)




  

  return (
    <>
      {editingId !==null && (
        <div className="edit-form">
          <h2>Edit Room</h2>

          <input
            type="text"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
            placeholder="Image URL"
          />

          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Room Name"
          />

          <input
            type="number"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            placeholder="Price"
          />

          <button onClick={updateRoom}>
            Save Changes
          </button>
        </div>
      )}

      <div className="admin-container">
        <h1>Admin Dashboard</h1>
         <div className="stats-container">
          <div className="stat-card">
            <h2>{totalRooms}</h2>

            <p>Total Rooms</p>


          </div>

          <div className="stat-card">
            <h2>{totalBookings}</h2>
            <p>Total Bookings</p>

          </div>


          <div className="stat-card">

            <h2>${totalRevenue}</h2>
            <p>Total Room Value</p>

          </div>

         </div>
                <Link to="/bookings">
                <button>View Bookings</button>
                
                </Link>
          
         

        <div className="add-room-form">
          <h2>Add New Room</h2>

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="text"
            placeholder="Room Name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button onClick={addRoom}>
            Add Room
          </button>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <div className="admin-room" key={room.id}>
              <img
                src={room.image}
                alt={room.name}
                className="admin-room-image"
              />

              <h3>{room.name}</h3>

              <p>${room.price} / Night</p>

              <div className="admin-buttons">
                <button
                  className="edit-btn"
                  onClick={() =>editRoom(room)

                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteRoom(room.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}