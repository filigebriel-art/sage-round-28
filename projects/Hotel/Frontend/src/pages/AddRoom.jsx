import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Admin.css";

export default function AddRoom() {
    const [roomName, setRoomName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => setImagePreview(reader.result);
            reader.readAsDataURL(image);
        } else {
            setImagePreview(null);
        }
    }, [image]);

    async function handleAddRoom(e) {
        e.preventDefault();
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        if (!roomName || !price || !image) {
            alert("Please fill all required fields");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("name", roomName);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("image", image);

            const response = await fetch("http://localhost:5000/api/rooms", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });

            if (!response.ok) {
                throw new Error("Failed to add room");
            }

            alert("Room added successfully!");
            setRoomName("");
            setPrice("");
            setDescription("");
            setImage(null);
            setImagePreview(null);
            navigate("/admin");
        } catch (error) {
            console.log(error);
            alert("Failed to add room");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="admin-container">
            <h1>Add New Room</h1>

            <form className="add-room-form" onSubmit={handleAddRoom}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />

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
                    required
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <textarea
                    placeholder="Room Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Room"}
                </button>
            </form>
        </div>
    );
}
