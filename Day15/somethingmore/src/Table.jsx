import { useState } from "react";
import Pagination from "./Pagination";
function Table({users}) {

    const[p_data,setP_data] = useState([])
    const send_data = (data)=>{
        setP_data(data)
        console.log(p_data);
    }

    const styles = {
        "border":"solid 1px black"
    }
    return (
        <div>
            <table style={styles}>
                <thead>
                    <th>id</th>
                    <th>Email</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {users.map((user) =>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                                      
                        
                </tbody>
            </table>

            {/* <Pagination user = {users}  send={send_data}/> */}
        </div>

    );
}
export default Table