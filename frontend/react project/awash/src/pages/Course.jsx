
import { Link } from "react-router-dom"

export default function Course(){
    return<>
    <br />
    <br />
    <div className="courses">
    <Link to="/Course/English">English</Link><br />
    <Link to="/Course/Maths">Maths</Link><br />
    <Link to="/Course/Biology">Biology</Link><br />
    <Link to="/Course/Physics">physics</Link>
    </div>
    </>
}