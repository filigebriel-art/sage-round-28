import{useEffect,useState}from "react"

import Switch from "./Switch"
import Effect from "./Effect"
import Effect2 from "./Effect2"

 const rooms=["Vip","custome","new"]

export default function App(){
useEffect(()=>{
   console.log("changes from app component")
})




return<>
  
   
    
   <Switch/>
   <Effect2/>
   <Effect/>



<div>
   {
 rooms.map((room)=>{
        return  <h1>{room}</h1>
})

   }
</div>




</>
}