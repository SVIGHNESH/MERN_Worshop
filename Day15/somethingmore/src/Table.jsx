import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

function Table({users,setData,setEditId,setDel_id}) {
    const[p_data,setP_data]=useState([])
    const [user_data,setUser_data]=useState({})
    const send_data=(data)=>{
        setP_data(data)
    }
    console.log(users);
   console.log(p_data);
   useEffect(()=>{
        setP_data({...p_data, ["users_data"]:0})
   },[])
  useEffect(()=>{
    setData(user_data)
    setEditId(user_data.id)
  },[user_data])

//    to edit user data
   const edit=(user_id)=>{
        setUser_data(users.find((user)=>user.id==user_id))
        
   }

   const delet =(id)=>{
          setDel_id(id)
   }
  return (
    <div>
        {p_data["users_data"] && <table border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { p_data["users_data"].map((user)=>(
                    
                    
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td><button onClick={()=>edit(user.id)}>Edit</button></td>
                        <td><button onClick={()=>delet(user.id)}>Delete</button></td>
                    </tr>

                ))}
            </tbody>
        </table> 
}
        <Pagination users={users} send_data={send_data}/>   
    </div>

  )
}

export default Table