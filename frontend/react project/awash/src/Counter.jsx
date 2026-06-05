import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/counterSlice"


export default function Counter(){
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch()
    return
    <>
    <h1>{count}</h1>
    <button onClick={()=>dispatch(increment())}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    <button onClick={()=>dispatch(state=0)}>Reset</button>
    </>
}