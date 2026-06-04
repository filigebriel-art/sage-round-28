import { useParams } from "react-router-dom"
import Course from "./Course"

export default function CoursesDetail(){
   const {name}=useParams();
   return<>
   <h1>This is {name} subject</h1>
   </>
}