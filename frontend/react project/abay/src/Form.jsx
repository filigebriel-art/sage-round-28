
import"./Form.css"

import { useState } from "react";

export default function Form(){

    const [fullname, setFullName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [gender,setGender]=useState("")
    const [age,setAge]=useState("")
    const [date,setDate]=useState("")
    const [country,setCountry]=useState("")
    const [hobby,setHobby]=useState([])

function handleSubmit(e){
    e.preventDefault()
    alert(`
        fullname: ${fullname}
        Email :   ${email}
        password: ${password}
        Gender :  ${gender}
        Age :     ${age}
        Country : ${country}
        Hobby :   ${hobby}
        Date :    ${date}
         `)
       
}







function handleHobby(e){
    // e.target.Checked? setHobby(e.target.name): setHobby("")

    if(e.target.checked){
        setHobby((prev)=>([...prev,e.target.name]))
    }else{
        setHobby((prev)=>prev.filter((v)=>(v!=e.target.name)))
    }
}
return<>
<h1>My Form</h1>
<form onSubmit={handleSubmit}>
     <label htmlFor="fullname">FullName</label>
     <input 
          type="text" 
          id="fullname" 
          placeholder="Enter your fullname"
          value={fullname}
          onChange={(e)=>setFullName(e.target.value)}
          
          
          />
          <br />
          <br />

      <label htmlFor="email">Email</label>
      <input type="email"
             id="email" 
             placeholder="enter your password"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             
             />
             <br />
             <br />
             <label htmlFor="password">password</label>
             <input type="password"
             id="password"
             placeholder="enter your password"
             value={password} 
             onChange={(e)=>setPassword(e.target.value)}/>
             <br />
             <br />
             <p>select Gender</p>
    <label htmlFor="male">Male</label>
    <input type="radio" id="male" name="gender"value="male" onChange={(e)=>setGender(e.target.value)}/>
    <label htmlFor="female">Female</label>
    <input type="radio"  id="female"name="gender" value="female" onChange={(e)=>setGender(e.target.value)} />
    <br />
    <br />


    <label htmlFor="age" id="age">Age</label>
    <input type="number"
            id="age"
            min="10"
            max="99"
            value={age} 
            onChange={(e)=>setAge(e.target.value)  }/>
            <br />
            <br />

    <label htmlFor="country">Country</label>
     <select name="country" id="country"
     value={country}
     onChange={(e)=>setCountry(e.target.value)}>
        <option value="ethiopia">Ethiopia</option>
        <option value="USA">America</option>
        <option value="kenya">Kenya</option>
        <option value="UAE">Dubai</option>
     </select>
     <br />
     <br />
     <p>Choose your Hobby</p>
     <label htmlFor="sport">Sport</label>
     <input type="checkbox"
     id="sport"
     name="sport"
     value={hobby}
     onChange={handleHobby} />


      <label htmlFor="music">Music</label>
     <input type="checkbox"
     
     id="music"
     name="music"
     value={hobby}
     onChange={handleHobby} />
     <label htmlFor="art">Art</label>
     <input type="checkbox"
     
     id="art"
     name="art"
     value={hobby}
     onChange={handleHobby} />

    
     <br />
     <br />







            <input type="date" id="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}/>
            <br />
            <br />
            <br />


    <button type="submit" id="submit">submit</button>



</form>



</>

}