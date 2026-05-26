import{useEffect,useState}from "react"

import Switch from "./Switch"
import Effect from "./Effect"
import Effect2 from "./Effect2"
export default function App(){
useEffect(()=>{
   console.log("changes from app component")
})
return<>
  
   
    
   <Switch/>
   <Effect2/>
   <Effect/>
</>
}