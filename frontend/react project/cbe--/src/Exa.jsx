import { useState } from "react"



export default function Exa(){
  const [bgColor, setBgColor]=useState("white");
    return (
      <div style={{backgroundColor:bgColor }}>
        <button onClick={()=>setBgColor("black")}>Dark</button>
        <button onClick={()=>setBgColor("white")}>Light</button>

      </div>

    );
}