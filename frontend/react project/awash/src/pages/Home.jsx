
import { Navigate, useNavigate } from "react-router-dom"
export default function Home(){

    const Navigate=useNavigate()

    function handleLogin(){
        Navigate('/Course')
    }
    return<>
    <h1>Home page</h1>

    <button onClick={()=>handleLogin()}>Login</button>
    </>
}