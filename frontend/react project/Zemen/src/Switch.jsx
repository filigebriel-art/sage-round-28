
import {useState}from"react"

export default function Switch(){
const [turn,setTurn]=useState(0)
const [status,setStatus]=useState(0)
return<>
<h1>{turn? "ON":"OFF"}</h1>
<button onClick={()=>setTurn(true)}>ON</button>
<button onClick={()=>setTurn(false)}>OFF</button>


   


    </>
}