import {  useState } from "react"


export default function  Counter(){

    const [counter,setCounter]=useState(0)
   
    return<>
    
    <h1>{counter}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>add</button>
    <button onClick={()=>(setCounter(counter-1))}>substract</button>
    <button onClick={()=>(setCounter(counter+counter))}>Double</button>
    <button onClick={()=>setCounter(0)}>Reset</button>
    
    
    </>
    
}