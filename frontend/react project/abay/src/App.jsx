import{useRef,useEffect}from"react"
import TestMemo from "./TestMemo";
import Form from "./Form";

export default function App(){
const clickCount=useRef(0);
useEffect(()=>{
  console.log("render")
})

  return<>
  
  <h1>welcome!</h1>
  <button onClick={()=>{
    clickCount.current=clickCount.current+1
    console.log(clickCount.current)
  }}>click</button>
  <TestMemo/>
  <Form/>
  
  </>
}