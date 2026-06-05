import { useDispatch, useSelector } from "react-redux"
import { increament, decreament, reset } from "./redux/counterSlice"


export default function App(){

  const count=useSelector(state=>state.counter.value)
  const dispatch=useDispatch()
  return<>
  <h1>{count}</h1>
  <button onClick={()=>dispatch(increament())}>Increment</button>
  <button onClick={()=>dispatch(decreament())}>Decrement</button>
  <button onClick={()=>dispatch(reset())}>Reset</button>
  
  </>
}