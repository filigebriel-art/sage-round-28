import { Navigate } from "react-router-dom"



export default function ProtectedRoute({children}){

    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    )

    if(!currentUser){
        return <Navigate to="/login"/>
    }


    if(currentUser.role !=="admin"){
        return <Navigate to="/"/>
    }
    return children

   

}