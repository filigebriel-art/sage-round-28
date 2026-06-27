import { useEffect, useState } from "react";
import "../css/Admin.css";

export default function ManageRooms() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editId, setEditId] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editImage, setEditImage] = useState("");
    const [editImageFile, setEditImageFile] = useState(null);
    const [editImagePreview, setEditImagePreview] = useState("");

    useEffect(() => {
        fetchRooms();
    }, []);

    useEffect(() => {
        if (editImageFile) {
            const reader = new FileReader();
            reader.onloadend = () => setEditImagePreview(reader.result);
            reader.readAsDataURL(editImageFile);
            return;
        }

        if (editImage) {
            setEditImagePreview(editImage);
        } else {
            setEditImagePreview("");
        }
    }, [editImage, editImageFile]);

    async function fetchRooms() {
        try {
            const res = await fetch("http://localhost:5000/api/rooms");
            const data = await res.json();
            setRooms(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    function startEdit(room) {
        setEditId(room._id);
        setEditName(room.name);
        setEditPrice(room.price);
        setEditDescription(room.description || "");
        setEditImage(room.image || "");
        setEditImageFile(null);
        setEditImagePreview(room.image || "");
        setShowEditModal(true);
    }

    function closeEditModal() {
        setShowEditModal(false);
        setEditId(null);
        setEditName("");
        setEditPrice("");
        setEditDescription("");
        setEditImage("");
        setEditImageFile(null);
        setEditImagePreview("");
    }

    function handleImageChange(e) {
        const file = e.target.files?.[0];
        if (file) {
            setEditImageFile(file);
        } else {
            setEditImageFile(null);
        }
    }

    async function saveEdit(e) {
        e.preventDefault();
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        const roomId = editId;

        if (!editName || !editPrice) {
            alert("Please fill in the room name and price");
            return;
        }

        try {
            let response;

            if (editImageFile) {
                const formData = new FormData();
                formData.append("name", editName);
                formData.append("price", Number(editPrice));
                formData.append("description", editDescription);
                formData.append("image", editImageFile);

                response = await fetch(`http://localhost:5000/api/rooms/${roomId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                });
            } else {
                response = await fetch(`http://localhost:5000/api/rooms/${roomId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: editName,
                        price: Number(editPrice),
                        description: editDescription,
                        image: editImage
                    })
                });
            }

            if (!response.ok) throw new Error("Failed to update room");

            const updatedRoom = await response.json();
            setRooms((prevRooms) => prevRooms.map((room) => (room._id === roomId ? updatedRoom : room)));
            closeEditModal();
            alert("Room updated successfully!");
        } catch (error) {
            console.log(error);
            alert("Failed to update room");
        }
    }

    async function deleteRoom(id) {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        const confirmDelete = window.confirm("Delete this room?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/rooms/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error("Failed to delete room");

            setRooms((prevRooms) => prevRooms.filter((room) => room._id !== id));
            alert("Room deleted successfully!");
        } catch (error) {
            console.log(error);
            alert("Failed to delete room");
        }
    }

    if (loading) {
        return <div className="loading">Loading rooms...</div>;
    }

    return (
        <div className="admin-container">
            <h1>Manage Rooms</h1>

            <div className="rooms-grid">
                {rooms.map((room) => (
                    <div className="admin-room" key={room._id}>
                        <img
                            src={room.image || "https://via.placeholder.com/300x200?text=No+Image"}
                            alt={room.name}
                            className="admin-room-image"
                        />

                        <h3>{room.name}</h3>
                        <p>${room.price} / Night</p>
                        <p className="room-description">{room.description}</p>
                        <div className="admin-buttons">
                            <button className="edit-btn" onClick={() => startEdit(room)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteRoom(room._id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {showEditModal && (
                <div className="modal-overlay" onClick={closeEditModal}>
                    <div className="edit-room-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Edit Room</h2>
                            <button type="button" className="close-btn" onClick={closeEditModal}>
                                ×
                            </button>
                        </div>

                        <form className="edit-room-form" onSubmit={saveEdit}>
                            <label className="image-upload-box">
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                                {editImagePreview ? (
                                    <img src={editImagePreview} alt="Room preview" className="edit-image-preview" />
                                ) : (
                                    <span>Click to upload room image</span>
                                )}
                            </label>

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

                            <div className="modal-actions">
                                <button type="submit" className="edit-btn">
                                    Save Changes
                                </button>
                                <button type="button" className="delete-btn" onClick={closeEditModal}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
