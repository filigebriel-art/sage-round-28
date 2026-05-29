
import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"

export default function Layout(){
    return<>
    <NavBar/>
    <Outlet/>
    <h1>footer</h1>
    </>
}