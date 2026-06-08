import { evaluate } from "mathjs"
import { useState } from "react"
import  "./calculator.css"

function Calculator(){

    const[input,setInput]=useState("")

    const addValue=(value)=>{
        setInput(input+value)
    }
    const calculate=()=>{
        try {
            setInput(evaluate(input).toString())
        }
        catch{
            setInput("Error")
        }
    }
    const clearInput=()=>{
        setInput("")
    }


    
    return(
    <div className="calculator">
    
<input type="text"
value={input}
readOnly
 />
 <br /><br />
     <div className="buttons">

    <button onClick={()=>addValue("1")}>1</button>
    <button onClick={()=>addValue("2")}>2</button>
    <button onClick={()=>addValue("3")}>3</button>
    <button onClick={()=>addValue("+")}>+</button>
     <br /><br />    
     <button onClick={()=>addValue("4")}>4</button>
     <button onClick={()=>addValue("5")}>5</button>
     <button onClick={()=>addValue("6")}>6</button>
     <button onClick={()=>addValue("-")}>-</button>
     <br /><br />

     <button onClick={()=>addValue("7")}>7</button>
     <button onClick={()=>addValue("8")}>8</button>
     <button onClick={()=>addValue("9")}>9</button>
     <button onClick={()=>addValue("*")}>*</button>
    
    <br /><br />
    <button onClick={()=>addValue("0")}>0</button>
    <button onClick={()=>addValue("/")}>/</button>
    <button onClick={calculate}>=</button>
    <button onClick={clearInput}>c</button>
    </div>
    </div>

)}
export default Calculator