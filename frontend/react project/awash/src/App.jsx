
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import Course from "./pages/Course"
import CoursesDetail from "./pages/CoursesDetail"

export default function App(){
  return<BrowserRouter>
     <Routes>

      <Route  path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route  path="About"element={<About/>}/>
      <Route  path="Contact" element={<Contact/>}/>
      <Route  path="Course" element={<Course/>}/>
      <Route  path="Course/:name" element={<CoursesDetail/>}/>
      </Route>
      </Routes> 
  </BrowserRouter>
}