import { useState } from "react";

export default function Form(){

const [fullname, setFullName]=useState("")
function handlesubmit(e){
    e.preventDefault()
    alert("your full name is ${fullname}")
}
return<>
<h1>my form</h1>
<form action="">
     <label htmlFor="fullname">FullName</label>
     <input 
          type="text" 
          id="fullname" 
          placeholder="Enter your fullname"
          value={fullname}
          onChange={(e)=>{e.target.value}}
          
          
          />




    <button type="submit">submit</button>



</form>



</>

}