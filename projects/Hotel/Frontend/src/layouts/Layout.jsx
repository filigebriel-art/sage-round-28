
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import "../css/App.css"
export default function Layout(){
    return(
        <>
        <div className="app">
        <Navbar/>

        <div className="main-content">
        <Outlet/>

        </div>
        <Footer/>
        </div>
        </>
    )
}