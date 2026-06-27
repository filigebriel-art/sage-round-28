import { Link, useNavigate } from "react-router-dom";
import "../css/RoomCard.css";

export default function RoomCard({
    id,
    name,
    price,
    image,
    isBooked = false,
    rating = 0,
    linkTo = null
}) {
    const navigate = useNavigate();

    function isInFavorites() {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        return favorites.some((fav) => fav.id === id);
    }

    function addToFavorite(e) {
        e.preventDefault();
        e.stopPropagation();
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const exists = favorites.find((fav) => fav.id === id);

        if (exists) {
            alert("Already in favorites");
            return;
        }

        favorites.push({
            id,
            name,
            price,
            image
        });

        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Added to favorites ❤️");
    }

    function removeFromFavorites(e) {
        e.preventDefault();
        e.stopPropagation();

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter((fav) => fav.id !== id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Removed from favorites");
    }

    function handleBookClick(e) {
        e.preventDefault();
        e.stopPropagation();

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            navigate("/login");
        } else {
            navigate(`/book/${id}`);
        }
    }

    const renderRating = () => {
        const numericRating = Number(rating) || 0;
        
        if (numericRating === 0) return <span className="no-rating">No ratings yet</span>;

        const fullStars = Math.floor(numericRating);
        const hasHalfStar = numericRating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <>
                {'⭐'.repeat(fullStars)}
                {hasHalfStar && '⭐'}
                {'☆'.repeat(emptyStars)}
                <span className="rating-number">({numericRating.toFixed(1)})</span>
            </>
        );
    };


    return (
        <div className="room-card">
            <Link to={linkTo || `/rooms/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="room-image-container">
                    <img
                        src={image}
                        alt={name || "Room"}
                        onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                        }}
                    />
                    {isBooked && (
                        <div className="room-status-badge">
                            <span className="badge booked">Booked</span>
                        </div>
                    )}
                </div>

                <h2>{name}</h2>

                <div className="room-rating">
                    {renderRating()}
                </div>

                <p className="room-price">${price} / Night</p>

                <div className="room-actions" onClick={(e) => e.preventDefault()}>
                    <button
                        className={`favorite-btn ${isInFavorites() ? 'active' : ''}`}
                        onClick={isInFavorites() ? removeFromFavorites : addToFavorite}
                    >
                        {isInFavorites() ? '❤️ Remove' : '🤍 Add to Favorites'}
                    </button>

                    {!isBooked ? (
                        <button
                            className="book-btn"
                            onClick={handleBookClick}
                        >
                            Book Now
                        </button>
                    ) : (
                        <button className="book-btn disabled" disabled>
                            Not Available
                        </button>
                    )}
                </div>
            </Link>
        </div>
    );
}