import{useState}from "react"

import Switch from "./Switch"
import Garage from "./Garage"
import List from "./LIst"
export default function App(){
const [counter,setCounter]=useState(0)

return<>
   <h1>{counter}</h1>
   <button onClick={()=>{setCounter(counter+1)}}>Add</button>
   <button onClick={()=>{setCounter(counter-1)}}>Substract</button>
   <button onClick={()=>{setCounter(counter*counter)}}>product</button>
   <button onClick={()=>setCounter(0)}>Reset</button>
   
    
   <Switch/>
   <Garage cars={["byd","toyota","bmw"]}/>
   <List/>
</>
}