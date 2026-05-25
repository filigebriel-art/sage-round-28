import{useState}from "react"

export default function App(){
const [counter,setCounter]=useState(0)
const [turn,setTurn]=useState("on")

return<>
   <h1>{counter}</h1>
   <button onClick={()=>{setCounter(counter+1)}}>Add</button>
   <button onClick={()=>{setCounter(counter-1)}}>Substract</button>
   <button onClick={()=>{setCounter(counter*counter)}}>product</button>
   <button onClick={()=>setCounter(0)}>Reset</button>

   <h1>{turn}</h1>
   
   <button onClick={()=>{setTurn()}}>on</button>
    <button>off</button>

</>
}