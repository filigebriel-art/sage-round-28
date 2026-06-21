import { BrowserRouter ,Routes,Route} from "react-router-dom";
import RoomDetails from "./pages/RoomDetails";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms"
import Login from "./pages/Login";
import Register from "./pages/Regjster";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Admin from "./pages/Admin";
import Bookings from "./pages/Bookings";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

import AdminProtectedRoute from "./components/AdminProtectedRoute";
export default function App(){
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/"element={<Layout/>}>

      <Route index element={<Home/>}/>


      <Route path="rooms" element={<Rooms/>}/>

      <Route path="login" element={<Login/>}/>

      <Route path="/profile" element={
       
       <ProtectedRoute>
          <Profile/>
        </ProtectedRoute>}/>

      <Route path="register" element={<Register/>}/>

      <Route path="rooms/:id" element={<RoomDetails/>}/>

      <Route path="book/:id" element={<Booking/>}/>

      <Route path="my-bookings" element={<MyBookings/>} />
      <Route
         path="/favorites"
         element={
        <ProtectedRoute>
        <Favorites />
       </ProtectedRoute>
  }
/>

      <Route
       path="/admin" 
       element={<AdminProtectedRoute>
        <Admin/>
        </AdminProtectedRoute>
        }
        />

      
      <Route path="/bookings" element={<Bookings/>}/>
    </Route>



    </Routes>  
    </BrowserRouter>
  )
  
  
  
  
}