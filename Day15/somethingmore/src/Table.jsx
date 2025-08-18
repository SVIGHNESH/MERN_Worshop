import { useState ,useEffect, use} from "react";
import Pagination from "./Pagination";
function Table({ users,setData }) {

    const [p_data, setP_data] = useState([])
    const[user_data,setUser] = useState()

    const send_data =(data)=>{
        setP_data(data)
    }


   
    // const send_data = (data) => {
    //     setP_data(data)
    //     console.log(p_data);
    // }

    const styles = {
       "border": "solid 1px black",
       "gridLines": "solid 1px black"
    }
    

    useEffect(()=>{
        setP_data({...p_data,["user_data"]:0})
},[])


    useEffect(()=>{
        setData(user_data)
    },[user_data])


``//to edit the user 
  const edit = (user_id)=>{
    const user_data = users.find((user) => user.id === user_id )
    
  }

    return (
        <div>
            <>
                {p_data["users_data"] && (
                    <table border={1} style={styles}>
                        <thead>
                            <tr style={styles}>
                                <th>id</th>
                                <th>Email</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {p_data["users_data"].map((user) => (
                                <tr style={styles} key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
                                    <td><button onClick={()=>edit(user.id)}>Edit</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <Pagination users={users} send_data={send_data} />
            </>
        </div>

    );
}
export default Table