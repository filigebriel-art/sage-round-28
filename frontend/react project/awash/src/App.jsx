
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App(){
  return<BrowserRouter>
     <Routes>
      <Route  path="/"element={<Home/>}/>
      <Route  path="/About"element={<About/>}/>
      <Route  path="/Contact" element={<Contact/>}/>
      </Routes> 
  </BrowserRouter>
}