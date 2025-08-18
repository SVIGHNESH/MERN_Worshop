// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// function Pagination({users},send){
//     const [rows,setRows] = useState(5);
//     const users_length =users.length
//     const [c_page,setC_page] = useState(1)
//     const l_row = c_page*rows;
//     const first_row =  l_row - rows 


//     send([rows,users_length,c_page,l_row,first_row]    )
//     return(
//         <div>
//                 <button>Prev</button>



//         </div>
//     );

// }
// export default Pagination

  function Pagination({users},send_data){
    const len = users.length;
    const [rows_per_page,setRows_per_page] = useState(5);
    const[page,Setpage] = useState(1);
      const l_row = page * rows_per_page
      const f_row  = l_row - rows_per_page;
    const users_data = users.slice(f_row,l_row);
    const page_number = Math.ceil(len/rows_per_page);
    useEffect(()=>{
    send_data({"rows_per_page":rows_per_page,"page":page,"l_row":l_row,"f_row":f_row,"users_data":users_data,"page_number":page_number})
  
    },[users])

    const decrease =()=>{
                // if(page > 1 ){
                //     Setpage(page - 1 )
                // }

                page == 1 ? Setpage(1) : Setpage(prev => prev - 1)
    }
    const increase = ()=>{
          page === page_number ? Setpage(page_number) : Setpage(prev => prev + 1)
    }


    return(
      <div>
        <button onClick={()=>{}}>
                Prev
        </button>
        {Array.from({length: page_number}, (_, i) => (
          <button key={i} onClick={() => Setpage(i + 1)}>
            {i + 1}
          </button>
        ))}
        <button>
            Next
        </button>


      </div>
    );
  }

 export default Pagination;