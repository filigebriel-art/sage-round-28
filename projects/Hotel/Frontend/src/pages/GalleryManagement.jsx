// GalleryManagement.jsx
import { useState, useEffect } from "react";
import "../css/GalleryManagement.css";

export default function GalleryManagement() {
    const [galleryImages, setGalleryImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deletingId, setDeletingId] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);

    useEffect(() => {
        fetchGallery();
    }, []);

    async function fetchGallery() {
        try {
            const response = await fetch("http://localhost:5000/api/gallery");
            const data = await response.json();
            setGalleryImages(data);
        } catch (error) {
            console.log("Error fetching gallery:", error);
        }
    }

    function handleImageSelect(e) {
        const files = Array.from(e.target.files);
        setNewImages(files);
        
        const previews = files.map(file => URL.createObjectURL(file));
        setPreviews(previews);
    }

    async function uploadImages() {
        if (newImages.length === 0) {
            alert("Select images first");
            return;
        }

        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        setLoading(true);

        try {
            const formData = new FormData();
            newImages.forEach(image => {
                formData.append("images", image);
            });

            const response = await fetch(
                "http://localhost:5000/api/gallery",
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}` },
                    body: formData
                }
            );

            const uploaded = await response.json();
            setGalleryImages([...galleryImages, ...uploaded]);
            setNewImages([]);
            setPreviews([]);
            alert("Upload successful!");
        } catch (error) {
            console.log(error);
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    }

    // ✅ Delete single image
    async function deleteImage(id) {
        if (!window.confirm("Delete this image?")) return;

        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        setDeletingId(id);

        try {
            await fetch(
                `http://localhost:5000/api/gallery/${id}`,
                {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            
            setGalleryImages(galleryImages.filter(img => img._id !== id));
            alert("Image deleted!");
        } catch (error) {
            console.log(error);
            alert("Delete failed");
        } finally {
            setDeletingId(null);
        }
    }

    // ✅ Delete multiple images
    async function deleteSelectedImages() {
        if (selectedImages.length === 0) {
            alert("Select images first");
            return;
        }

        if (!window.confirm(`Delete ${selectedImages.length} images?`)) return;

        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        try {
            for (const id of selectedImages) {
                await fetch(
                    `http://localhost:5000/api/gallery/${id}`,
                    {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );
            }
            
            setGalleryImages(galleryImages.filter(img => !selectedImages.includes(img._id)));
            setSelectedImages([]);
            alert("Selected images deleted!");
        } catch (error) {
            console.log(error);
            alert("Delete failed");
        }
    }

    // ✅ Delete all images
    async function deleteAllImages() {
        if (galleryImages.length === 0) {
            alert("No images to delete");
            return;
        }

        if (!window.confirm(`Delete ALL ${galleryImages.length} images?`)) return;

        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        try {
            for (const image of galleryImages) {
                await fetch(
                    `http://localhost:5000/api/gallery/${image._id}`,
                    {
                        method: "DELETE",
                        headers: { Authorization: `Bearer ${token}` }
                    }
                );
            }
            
            setGalleryImages([]);
            setSelectedImages([]);
            alert("All images deleted!");
        } catch (error) {
            console.log(error);
            alert("Delete failed");
        }
    }

    function toggleSelect(id) {
        setSelectedImages(prev =>
            prev.includes(id) 
                ? prev.filter(imgId => imgId !== id)
                : [...prev, id]
        );
    }

    function selectAll() {
        if (selectedImages.length === galleryImages.length) {
            setSelectedImages([]);
        } else {
            setSelectedImages(galleryImages.map(img => img._id));
        }
    }

    return (
        <div className="gallery-management">
            <h1>Hotel Gallery Management</h1>

            {/* Upload Section */}
            <div className="upload-section">
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageSelect}
                />
                
                {previews.length > 0 && (
                    <div className="preview-grid">
                        {previews.map((preview, index) => (
                            <img key={index} src={preview} alt="Preview" />
                        ))}
                        <button 
                            onClick={uploadImages}
                            disabled={loading}
                        >
                            {loading ? "Uploading..." : "Upload Images"}
                        </button>
                    </div>
                )}
            </div>

            {/* Controls */}
            {galleryImages.length > 0 && (
                <div className="gallery-controls">
                    <button onClick={selectAll}>
                        {selectedImages.length === galleryImages.length ? "Deselect All" : "Select All"}
                    </button>
                    <button 
                        onClick={deleteSelectedImages}
                        disabled={selectedImages.length === 0}
                    >
                        Delete Selected ({selectedImages.length})
                    </button>
                    <button onClick={deleteAllImages}>
                        Delete All
                    </button>
                    <span>{galleryImages.length} images</span>
                </div>
            )}

            {/* Gallery Grid */}
            <div className="gallery-grid">
                {galleryImages.map(image => (
                    <div key={image._id} className="gallery-item">
                        <input
                            type="checkbox"
                            checked={selectedImages.includes(image._id)}
                            onChange={() => toggleSelect(image._id)}
                        />
                        <img 
                            src={`http://localhost:5000${image.imageUrl}`} 
                            alt="Gallery" 
                        />
                        <button 
                            onClick={() => deleteImage(image._id)}
                            disabled={deletingId === image._id}
                        >
                            {deletingId === image._id ? "..." : "✕"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}