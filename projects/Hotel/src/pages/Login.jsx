import { useState } from "react"
import { useNavigate } from "react-router-dom"
import"../css/Form.css"
export default function Login(){

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()
       
        const users = 
        JSON.parse(localStorage.getItem("users"))||[]


        const user = users.find(
            (u)=>
                u.email ===email &&
            u.password === password
        )

     if(user){
        localStorage.setItem(
            "isLoggedIn",
            "true"

        )

        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        )

        navigate("/")


     }
     else{
        alert("Invalid email or Password")
     }




    }
    return(
    <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>

        <button type="submit">Login</button>
    </form>
    )
}