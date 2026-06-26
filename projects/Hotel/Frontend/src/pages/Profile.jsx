import { useEffect,useState } from "react";
export default function Profile(){

    const [user,setUser]=useState(null)

    const [bookingCount,setBookingCount] = useState(0)
    const [reviewCount,setReviewCount] = useState(0)

          //fetch user
    useEffect(()=>{
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser")
        )
        setUser(currentUser)
    },[])




          //  fetch bookings


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
             return <h2>Please Login</h2>
    }



    function logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("token")
    window.location.href="/login"
}
    return(
        
    <div className="profile-container">

        <h1>My Profile</h1>
        <div className="profile-card">
           <p>Name: {user.name}</p>
           <p>Email: {user.email}</p>
           <p>Role: {user.role}</p>
           <p>User ID: {user._id}</p>
           <p>Total Bookings: {bookingCount}</p>
           <p>Total Reviews:{reviewCount}</p>

        </div>

        <button onClick={logout}>
          Logout
        </button>
    </div>
    )
}