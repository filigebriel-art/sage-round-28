

import { useEffect,useState } from "react";
export default function Effect(){
    const[counter,setCounter]=useState(0)
    const[counter2,setCounter2]=useState(0)


    useEffect(()=>{
        console.log("useEffect")
    },[counter2])
    return <>
    <h1>Learning useEffect</h1>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter+1)}>add</button>
    <h1>{counter2}</h1>

    <button onClick={()=>setCounter2(counter2+1)}>add from effect2</button>
    
    </>

}