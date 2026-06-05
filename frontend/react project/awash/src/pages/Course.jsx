
import { Link, Navigate, useNavigate } from "react-router-dom"

export default function Course(){
   
    const Navigate=useNavigate()
    function gotoHome(){
        Navigate('Home')
    }
    return<>
    <br />
    <br />
    <div className="courses">
    <Link to="/Course/English">English</Link><br />
    <Link to="/Course/Maths">Maths</Link><br />
    <Link to="/Course/Biology">Biology</Link><br />
    <Link to="/Course/Physics">physics</Link>
    </div>
    <button onClick={()=>gotoHome()}>Goto</button>
    </>
}