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
import BookingSuccess from "./pages/BookingSuccess";
import AdminUsers from "./pages/AdminUsers";
import GalleryManagement from "./pages/GalleryManagement";



export default function App(){
  return(
    <BrowserRouter>
    <Routes>

      <Route path="/"element={<Layout/>}>

      <Route index element={<Home/>}/>


      <Route path="rooms" element={<Rooms/>}/>

      <Route path="login" element={<Login/>}/>

      <Route path="/profile" element={ <Profile/>}/>
      

      <Route path="register" element={<Register/>}/>

      <Route path="rooms/:id" element={<RoomDetails/>}/>

      <Route path="book/:id" element={<Booking/>}/>
      <Route path="/booking-success"  element={<BookingSuccess/>}/>

      <Route path="my-bookings" element={<MyBookings/>} />

      <Route path="/admin/gallery" element={
    <ProtectedRoute>
        <GalleryManagement />
    </ProtectedRoute>
} />
      <Route
         path="/favorites"
         element={
        
        <Favorites />
      }
      
/>

      <Route
       path="/admin" 
       element={
       
       <AdminProtectedRoute>
            <Admin/>
        </AdminProtectedRoute>
        }
        />

      
      <Route path="/bookings" element={
        <ProtectedRoute>
          <Bookings/>
          </ProtectedRoute>
        }/>


        <Route path="/admin/users" element={
          <AdminProtectedRoute>

          <AdminUsers/>


          </AdminProtectedRoute>

        }
        />
    </Route>



    </Routes>  
    </BrowserRouter>
  )
  
  
  
  
}