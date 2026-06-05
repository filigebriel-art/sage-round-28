import { useNavigate } from "react-router-dom"

export default function(){

    const Navigate=useNavigate()
    function gotoAbout(){
        Navigate('/About')
    }
    return<>

    <h1>Contact page</h1>
    <button onClick={()=>gotoAbout()}>Abt</button>
    </>
}

