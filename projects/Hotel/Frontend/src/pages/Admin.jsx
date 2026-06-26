import { useState, useEffect } from "react";
import "../css/Admin.css";
import { Link } from "react-router-dom";

export default function Admin() {
    const [rooms, setRooms] = useState([])
    const [roomName, setRoomName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // Add image preview
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editImage, setEditImage] = useState("");
    const [totalUsers, setTotalUsers] = useState(0)
    const [searchRoom, setSearchRoom] = useState("")
    const [bookings, setBookings] = useState([])
    const [description, setDescription] = useState("")
    const [editDescription, setEditDescription] = useState("")
    const [totalBookings, setTotalBookings] = useState(0)
    const [loading, setLoading] = useState(true)

    

    // Image preview when selecting file
    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(image);
        } else {
            setImagePreview(null);
        }
    }, [image]);

    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => setTotalUsers(data.length))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/api/rooms")
            .then(res => res.json())
            .then(data => setRooms(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        fetch("http://localhost:5000/api/bookings")
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setTotalBookings(data.length)
            })
            .catch(err => console.log(err))
    }, [])

    async function addRoom() {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        if (!roomName || !price || !image) {
            alert("Please fill all fields");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", roomName);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("image", image);

            const response = await fetch(
                "http://localhost:5000/api/rooms",
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add room");
            }

            const newRoom = await response.json()
            console.log("New room added:", newRoom) // Debug log
            
            setRooms([...rooms, newRoom])
            setRoomName("")
            setPrice("")
            setImage(null)
            setImagePreview(null) // Clear preview
            setDescription("")
            alert("Room added successfully!")
        } catch (error) {
            console.log(error)
            alert("Failed to add room")
        }
    }

    async function deleteRoom(id) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        const confirmDelete = window.confirm("Delete this room?")

        if (!confirmDelete) return

        try {
            await fetch(
                `http://localhost:5000/api/rooms/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )

            setRooms(rooms.filter(room => room._id !== id))
            alert("Room deleted successfully!")
        } catch (error) {
            console.log(error)
            alert("Failed to delete room")
        }
    }

    function editRoom(room) {
        console.log("Room selected", room)
        setEditingId(room._id);
        setEditName(room.name);
        setEditPrice(room.price);
        setEditImage(room.image);
        setEditDescription(room.description)
    }

    async function updateRoom() {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        try {
            const response = await fetch(
                `http://localhost:5000/api/rooms/${editingId}`,
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: editName,
                        price: Number(editPrice),
                        image: editImage,
                        description: editDescription
                    })
                }
            )

            if (!response.ok) {
                throw new Error("Failed to update room");
            }

            const updateRoom = await response.json()
            setRooms(rooms.map(room =>
                room._id === editingId ? updateRoom : room
            ))

            setEditingId(null)
            setEditName("")
            setEditPrice("")
            setEditImage("")
            setEditDescription("")
            alert("Room updated successfully!")
        } catch (error) {
            console.log(error)
            alert("Failed to update room")
        }
    }

    // Function to get full image URL
    function getImageUrl(imagePath) {
        if (!imagePath) return 'https://via.placeholder.com/300x200?text=No+Image';
        if (imagePath.startsWith('http') || imagePath.startsWith('data:image')) {
            return imagePath;
        }
        // If it's a relative path, prepend the base URL
        return `http://localhost:5000${imagePath}`;
    }

    const totalRooms = rooms.length
    const totalRevenue = bookings.reduce((total, booking) => {
        const room = rooms.find(r => r._id === booking.roomId)
        if (room) {
            const checkIn = new Date(booking.checkIn)
            const checkOut = new Date(booking.checkOut)
            const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24))
            return total + (room.price * nights)
        }
        return total
    }, 0)

    const availableRooms = rooms.filter(room =>
        !bookings.some(booking => booking.roomId === room._id)
    ).length

    const filteredAdminRooms = rooms.filter(room =>
        (room.name || "").toLowerCase().includes(searchRoom.toLowerCase())
    )

    if (loading) {
        return <div className="loading">Loading admin dashboard...</div>
    }

    return (
        <>
            {editingId !== null && (
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

                    <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Room Description"
                    />

                    <button onClick={updateRoom}>
                        Save Changes
                    </button>
                    <button onClick={() => setEditingId(null)}>
                        Cancel
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
                        <h2>{totalUsers}</h2>
                        <p>Total Users</p>
                    </div>

                    <div className="stat-card">
                        <h2>${totalRevenue}</h2>
                        <p>Total Revenue</p>
                    </div>

                    <div className="stat-card">
                        <h2>{availableRooms}</h2>
                        <p>Available Rooms</p>
                    </div>
                </div>

                <div className="admin-actions">
                    <Link to="/bookings">
                        <button className="admin-btn">View Bookings</button>
                    </Link>

                    <Link to="/admin/users">
                        <button className="admin-btn">Manage Users</button>
                    </Link>
                </div>

                <div className="add-room-form">
                    <h2>Add New Room</h2>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    {/* Image preview */}
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" width="200" />
                        </div>
                    )}

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

                    <textarea
                        placeholder="Room Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Search rooms..."
                        value={searchRoom}
                        onChange={(e) => setSearchRoom(e.target.value)}
                    />

                    <button onClick={addRoom}>
                        Add Room
                    </button>
                </div>

                <div className="rooms-grid">
                    {filteredAdminRooms.length === 0 ? (
                        <p className="no-rooms">No rooms found</p>
                    ) : (
                        filteredAdminRooms.map((room) => (
                            <div className="admin-room" key={room._id}>
                                <img
                                    src={getImageUrl(room.image)}
                                    alt={room.name}
                                    className="admin-room-image"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                                    }}
                                />

                                <h3>{room.name}</h3>
                                <p>${room.price} / Night</p>
                                <p className="room-description">{room.description}</p>

                                <div className="admin-buttons">
                                    <button
                                        className="edit-btn"
                                        onClick={() => editRoom(room)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteRoom(room._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}