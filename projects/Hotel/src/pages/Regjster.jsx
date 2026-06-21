import { useState } from "react"
import { useNavigate } from "react-router-dom"
import"../css/Form.css"



export default function Register(){
    const [name,setName]=useState("")

    const [email,setEmail]=useState("")

    const [password, setPassword]=useState("")

    const navigate =useNavigate()

    
    function handleRegister(e){
        e.preventDefault()

        const user ={
            id:Date.now(),
            name,
            email,
            password,
            role:email ==="admin@gmail.com"? "admin": "user",
        }

        const existingUsers =
        JSON.parse(localStorage.getItem("users"))||[]


        localStorage.setItem(
            "users",
            JSON.stringify([...existingUsers,user])
        )

        alert("Registration Successful!")
        navigate("/login")
    }
    return(
        <form onSubmit={handleRegister}>

            <h1>Register</h1>

            <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <br />
            <br />

            <input
             
             type="email"
             placeholder="Email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}/>

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
              
              <br /><br />
            <button type="submit">Register</button>
        </form>
    
    )
}