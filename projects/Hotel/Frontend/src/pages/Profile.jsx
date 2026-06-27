import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Profile.css";

export default function Profile(){

    const [user, setUser] = useState(null)
    const [bookingCount, setBookingCount] = useState(0)
    const [reviewCount, setReviewCount] = useState(0)
    const navigate = useNavigate()

    //fetch user
    useEffect(()=>{
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser")
        )
        setUser(currentUser)
    },[])

    //fetch bookings
    useEffect(()=>{
        if(!user) return

        fetch("http://localhost:5000/api/bookings")
        .then(res=>res.json())
        .then(data=>{
            const myBookings = data.filter(
                booking => booking.userId === user._id
            )
            setBookingCount(myBookings.length)
        })
        .catch(error => {
            console.error("error fetching bookings:", error)
        })

        fetch("http://localhost:5000/api/reviews")
        .then(res => res.json())
        .then(data => {
            const myReviews = data.filter(
                review => review.userId === user._id
            )
            setReviewCount(myReviews.length)
        })
        .catch(error => {
            console.error("Error fetching reviews:", error)
        })
    },[user])

    if(!user){
        return (
            <div className="profile-container">
                <div className="login-prompt">
                    <h2>Please Login</h2>
                    <button onClick={() => navigate("/login")} className="btn-primary">
                        Go to Login
                    </button>
                </div>
            </div>
        )
    }

    function logout(){
        localStorage.removeItem("currentUser")
        localStorage.removeItem("token")
        window.location.href="/login"
    }

    const getInitials = (name) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
    }

    return(
        <div className="profile-container">
            <div className="profile-wrapper">
                {/* Header Section */}
                <div className="profile-header">
                    <div className="profile-avatar">
                        {getInitials(user.name)}
                    </div>
                    <div className="profile-header-content">
                        <h1>{user.name}</h1>
                        <p className="user-role">{user.role}</p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="profile-stats">
                    <div className="stat-card">
                        <h3>{bookingCount}</h3>
                        <p>Total Bookings</p>
                    </div>
                    <div className="stat-card">
                        <h3>{reviewCount}</h3>
                        <p>Reviews Written</p>
                    </div>
                </div>

                {/* Profile Information Section */}
                <div className="profile-info-section">
                    <h2>Account Information</h2>
                    <div className="profile-info-grid">
                        <div className="info-item">
                            <label>Email Address</label>
                            <p>{user.email}</p>
                        </div>
                        <div className="info-item">
                            <label>User ID</label>
                            <p>{user._id}</p>
                        </div>
                        <div className="info-item">
                            <label>Account Type</label>
                            <p className="role-badge">{user.role === "admin" ? "Administrator" : "Guest"}</p>
                        </div>
                    </div>
                </div>

                {/* Actions Section */}
                <div className="profile-actions">
                    <button onClick={() => navigate("/my-bookings")} className="btn-secondary">
                        📅 View My Bookings
                    </button>
                    <button onClick={logout} className="btn-danger">
                        🚪 Logout
                    </button>
                </div>
            </div>
        </div>
    )
}