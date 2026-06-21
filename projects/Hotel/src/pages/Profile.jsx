import { useEffect,useState } from "react";
export default function Profile(){

    const [user,setUser]=useState(null)
    

    useEffect(()=>{
        const currentUser =JSON.parse(
            localStorage.getItem("currentUser")
        )
        setUser(currentUser)

    },[])

    if(!user){
        return
         <h2>Please Login</h2>
    }
    return(
    <div className="profile-container">

        <h1>My Profile</h1>
        <div className="profile-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Role:{user.role}</p>

        </div>
    </div>
    )
}