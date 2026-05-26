
import{useEffect,memo}from "react"

export default memo(function TestMemo(){

         useEffect(()=>{console.log("test from memo component")})

    return <>
    <h1>this is test memo component</h1>
    
    </>
}

)