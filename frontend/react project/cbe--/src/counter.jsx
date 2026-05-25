import {  useState } from "react"


export default function  Counter(){

    const [counter,setCounter]=useState(0)
    const [dark,setDark]=useState("false")
    return<>
    
    <h1>{counter}</h1>
    <button onClick={()=>{setCounter(counter+1)}}>add</button>
    <button onClick={()=>(setCounter(counter-1))}>substract</button>
    <button onClick={()=>(setCounter(counter+counter))}>Double</button>
    <button onClick={()=>setCounter(0)}>Reset</button>
    <div  
    style={{
        backgroundColor:dark? "black":"white",
        color:dark?"white":"black",
        height:"100vh"
        
    }}>
        <button onClick={()=>setDark(!dark)}>Tggle Mode</button>


    </div>
    
    </>
    
}