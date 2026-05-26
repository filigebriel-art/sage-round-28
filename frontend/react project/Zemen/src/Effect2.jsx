import { useEffect,useState } from "react";
export default function Effect2(){
    const[counter,setCounter]=useState(0)
    

    useEffect(()=>{
        console.log("changes from componenet2")
    })
    return<>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>add</button>
    <button onClick={()=>setCounter(counter-1)}>Substract</button>
    
    </>
}