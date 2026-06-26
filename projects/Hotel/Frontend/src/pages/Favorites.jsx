import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Favorite.css"

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  function removeFromFavorites(id) {
    const confirmDelete = window.confirm("Remove this room from favorites?");
    if (!confirmDelete) return;

    const updatedFavorites = favorites.filter((room) => room.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  return (
    <div>
      <h1>My Favorite Rooms</h1>
      {favorites.length === 0 ? (
        <p>No favorite rooms yet.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((room) => (
            <div key={room.id} className="favorite-card">
              <Link to={`/rooms/${room.id}`}>
                <img
                  src={room.image}
                  alt={room.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                  }}
                />
                <h3>{room.name}</h3>
                <p>${room.price} / Night</p>
              </Link>
              <button 
                onClick={() => removeFromFavorites(room.id)}
                className="remove-btn"
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}