import { useEffect, useState } from "react";

function Pagination({users},send){
    const [rows,setRows] = useState(5);
    const users_length =users.length
    const [c_page,setC_page] = useState(1)
    const l_row = c_page*rows;
    const first_row =  l_row - rows 


    send([rows,users_length,c_page,l_row,first_row]    )
    return(
        <div>
                <button>Prev</button>



        </div>
    );

}
export default Pagination