import { useEffect, useState } from "react"
import "../css/AdminUsers.css"


export default function AdminUsers(){
    const [users,setUsers] = useState([])


    useEffect(()=>{
        fetch("http://localhost:5000/api/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    },[])
    async function deleteUser(id){
          
         const confirmDelete = window.confirm(
            "Delete this user?"
         )

         if(!confirmDelete) return

         try{
            await fetch(
                `http://localhost:5000/api/users/${id}`,
                {
                    method:"DELETE"
                }
            )
            setUsers(
                users.filter(
                    user => user._id !== id
                )
            )
         }catch(error){
        console.log(error)
    }
    }



    return(
        <div className="admin-users">

            <h1>All Users</h1>



            <table>


                <thead>


                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {users.map(user=>(

                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>


                            <td>

                                {user.role === "admin" ?(
                                    <button disabled>
                                        Admin
                                    </button>
                                ) : (

                                     <button onClick={()=> deleteUser(user._id)}
                                     >
                                        Delete
                                        
                                    </button>

                                )}

                               
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}



