import { useState ,useEffect, use} from "react";
import Pagination from "./Pagination";
function Table({ users }) {

    const [p_data, setP_data] = useState([])


    const send_data =(data)=>{
        setP_data(data)
    }


   
    // const send_data = (data) => {
    //     setP_data(data)
    //     console.log(p_data);
    // }

    const styles = {
        "border": "solid 1px black"
    }
    

    useEffect(()=>{
        setP_data({...p_data,["user_data"]:0})
},[])

    return (
        <div>
            <>
                {p_data["users_data"] && (
                    <table style={styles}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Email</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {p_data["users_data"].map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.name}</td>
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